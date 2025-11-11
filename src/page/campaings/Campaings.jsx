
import React, { useState } from "react";
import { Input, Pagination, Select, Table, Progress } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { Navigate } from "../../Navigate";
import { Link } from "react-router-dom";

const { Option } = Select;

const Campaings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // ✅ Dummy data (as in your uploaded design)
  const dummyCampaigns = [
    {
      key: 1,
      name: "Summer Collection Review Group 1",
      status: "Active",
      progress: "10/300",
      progressValue: 3,
      budget: "$25,000 of $100,000",
      date: "Mar 23, 2024 - Sep 30, 2024",
      image: "https://i.ibb.co/qp8HfF5/bottle.png",
    },
    {
      key: 2,
      name: "Fan Campaign for Production",
      status: "Scheduled",
      progress: "0/300",
      progressValue: 0,
      budget: "$25,000 of $100,000",
      date: "Mar 23, 2024 - Sep 30, 2024",
      image: "https://i.ibb.co/YLFRpdb/fan.png",
    },
    {
      key: 3,
      name: "Brush for Europe",
      status: "Completed",
      progress: "100/100",
      progressValue: 100,
      budget: "$25,000 of $100,000",
      date: "Mar 23, 2024 - Sep 30, 2024",
      image: "https://i.ibb.co/LpxML3Z/brush.png",
    },
    {
      key: 4,
      name: "Headphones Test",
      status: "Pause",
      progress: "45/100",
      progressValue: 45,
      budget: "$25,000 of $100,000",
      date: "Mar 23, 2024 - Sep 30, 2024",
      image: "https://i.ibb.co/xDYprKx/headphone.png",
    },
  ];

  // Pagination logic
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = dummyCampaigns.slice(start, end);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // ✅ Column setup (new fields added)
  const columns = [
    {
      title: "Campaign Name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            className="w-10 h-10 object-cover rounded-md"
            alt="campaign"
          />
          <div>
            <p className="font-medium">{record.name}</p>
            <p className="text-xs text-gray-500">{record.date}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let colorClass =
          status === "Active"
            ? "bg-yellow-100 text-yellow-700"
            : status === "Scheduled"
            ? "bg-purple-100 text-purple-700"
            : status === "Completed"
            ? "bg-green-100 text-green-700"
            : "bg-gray-100 text-gray-700";
        return (
          <span
            className={`px-2 py-1 text-xs font-medium rounded-full ${colorClass}`}
          >
            {status}
          </span>
        );
      },
    },
    {
      title: "Progress",
      key: "progress",
      render: (_, record) => (
        <div className="flex items-center gap-2 w-40">
          <Progress
            percent={record.progressValue}
            size="small"
            showInfo={false}
          />
          <span className="text-sm text-gray-500">{record.progress}</span>
        </div>
      ),
    },
    {
      title: "Budget",
      dataIndex: "budget",
      key: "budget",
      render: (budget) => <span className="font-medium">{budget}</span>,
    },
    {
      title: "Actions",
      key: "action",
      render: (_, record) => (
        <Link to={`/dashboard/campainDetails/${record?.key}`}>
          <button className="text-2xl">
            <LuEye />
          </button>
        </Link>
      ),
    },
  ];

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">
      {/* Header */}
      <div className="flex justify-between">
        <Navigate title={"Campaings"} />
        <div className="flex gap-3">
          <Select
            style={{ height: "40px" }}
            placeholder="All Campaings"
            defaultValue="All Campaings"
          >
            <Option value="all">All Campaings</Option>
            <Option value="active">Active Campaings</Option>
            <Option value="scheduled">Scheduled Campaings</Option>
            <Option value="completed">Completed Campaings</Option>
            <Option value="paused">Pause Campaings</Option>
          </Select>
          <Input
            placeholder="Search by name..."
            prefix={<SearchOutlined />}
            style={{ marginBottom: "16px", maxWidth: "300px", height: "40px" }}
          />
        </div>
      </div>

      {/* Table */}
      <Table
        dataSource={paginatedData}
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
          total={dummyCampaigns.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Campaings;
