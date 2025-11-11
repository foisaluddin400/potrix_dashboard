import React, { useState } from "react";
import { Input, Pagination, Select, Table, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import { Link } from "react-router-dom";

const { Option } = Select;

const ContentModeration = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy data
  const dummyUsers = Array.from({ length: 25 }, (_, index) => ({
    key: index + 1,
    user: {
      name: `User ${index + 1}`,
      image: `https://avatar.iran.liara.run/public/${index + 1}`,
    },
    review: "⭐⭐⭐⭐☆", // Example star review (4/5)
    date: new Date(2025, 10, index + 1).toLocaleDateString(),
    category:
      index % 3 === 0
        ? "Electronics"
        : index % 3 === 1
        ? "Beauty"
        : "Fashion",
    amount: `$${(Math.random() * 200 + 20).toFixed(2)}`,
    status:
      index % 4 === 0
        ? "Approved"
        : index % 4 === 1
        ? "Pending"
        : index % 4 === 2
        ? "Rejected"
        : "Flagged",
  }));

  // Columns
  const columns = [
    {
      title: "User",
      key: "user",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.user.image}
            alt="user"
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="font-medium">{record.user.name}</span>
        </div>
      ),
    },
    {
      title: "Review",
      dataIndex: "review",
      key: "review",
      render: (review) => <span className="text-yellow-500">{review}</span>,
    },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Category", dataIndex: "category", key: "category" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color =
          status === "Approved"
            ? "green"
            : status === "Pending"
            ? "orange"
            : status === "Rejected"
            ? "red"
            : "volcano";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Link to={`/dashboard/contentModerationDetails/${record.key}`}>
          <button className="text-2xl text-gray-700 hover:text-blue-600">
            <LuEye />
          </button>
        </Link>
      ),
    },
  ];

  // Pagination logic
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedUsers = dummyUsers.slice(start, end);

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">
      <div className="flex justify-between mb-3">
        <Navigate title={"Content Moderator"} />
        <div className="flex gap-3">
          <Select style={{ height: "40px" }} placeholder="All Category">
            <Option value="">All Category</Option>
            <Option value="Electronics">Electronics</Option>
            <Option value="Beauty">Beauty</Option>
            <Option value="Fashion">Fashion</Option>
          </Select>

          <Select style={{ height: "40px" }} placeholder="All Status">
            <Option value="">All Status</Option>
            <Option value="Approved">Approved</Option>
            <Option value="Pending">Pending</Option>
            <Option value="Rejected">Rejected</Option>
            <Option value="Flagged">Flagged</Option>
          </Select>

          <Input
            placeholder="Search by user name..."
            prefix={<SearchOutlined />}
            style={{
              marginBottom: "16px",
              maxWidth: "300px",
              height: "40px",
            }}
          />
        </div>
      </div>

      {/* Table */}
      <Table
        dataSource={paginatedUsers}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        className="custom-table"
      />

      {/* Pagination */}
      <div className="mt-4 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={dummyUsers.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default ContentModeration;
