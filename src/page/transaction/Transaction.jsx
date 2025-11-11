import React, { useState } from "react";
import { Input, Pagination, Select, Table, Tag } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { Navigate } from "../../Navigate";

const { Option } = Select;

const Transaction = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy transaction data
  const dummyTransactions = Array.from({ length: 25 }, (_, index) => ({
    key: index + 1,
    date: new Date(2025, 10, index + 1).toLocaleDateString(),
    item: `Mini Portable Refillable Sprayer Atomizer ${index + 1}`,
    amount: `$${(Math.random() * 200 + 20).toFixed(2)}`,
    status:
      index % 3 === 0
        ? "Paid"
        : index % 3 === 1
        ? "Pending"
        : "Failed",
    refId: `TXN${100000 + index}`,
  }));

  // Table Columns
  const columns = [
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Item", dataIndex: "item", key: "item" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "";
        if (status === "Paid") color = "green";
        else if (status === "Pending") color = "orange";
        else color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    { title: "Ref ID", dataIndex: "refId", key: "refId" },
  ];

  // Pagination logic
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = dummyTransactions.slice(start, end);

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">
      {/* Header Section */}
      <div className="flex justify-between mb-3">
        <Navigate title={"Transactions"} />

        <div className="flex gap-3">
          <Select style={{ height: "40px" }} placeholder="Date Range">
            <Option value="">Last 7 Days</Option>
            <Option value="">Last 30 Days</Option>
            <Option value="">This Year</Option>
          </Select>

          <Select style={{ height: "40px" }} placeholder="All Category">
            <Option value="">All Category</Option>
            <Option value="">Electronics</Option>
            <Option value="">Fashion</Option>
          </Select>

          <Select style={{ height: "40px" }} placeholder="All Status">
            <Option value="">All Status</Option>
            <Option value="Paid">Paid</Option>
            <Option value="Pending">Pending</Option>
            <Option value="Failed">Failed</Option>
          </Select>

          <Input
            placeholder="Search by item..."
            prefix={<SearchOutlined />}
            style={{ maxWidth: "300px", height: "40px" }}
          />
        </div>
      </div>

      {/* Transaction Table */}
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
          total={dummyTransactions.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Transaction;
