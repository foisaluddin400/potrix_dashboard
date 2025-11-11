import React, { useState } from "react";
import { Input, Pagination, Select, Table, Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { LuEye } from "react-icons/lu";
import { CheckCircleOutlined, CarOutlined, HomeOutlined } from "@ant-design/icons";
import { Navigate } from "../../Navigate";

const { Option } = Select;

const Order = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pageSize = 10;

  // Dummy order data
  const dummyOrders = Array.from({ length: 25 }, (_, index) => ({
    key: index + 1,
    no: index + 1,
    image: `https://picsum.photos/seed/order${index}/60/60`,
    name: `Product ${index + 1}`,
    date: new Date(2025, 10, index + 1).toLocaleDateString(),
    customer: `Customer ${index + 1}`,
    amount: `$${(Math.random() * 200 + 20).toFixed(2)}`,
    status:
      index % 4 === 0
        ? "Processing"
        : index % 4 === 1
        ? "Shipped"
        : index % 4 === 2
        ? "Delivered"
        : "Cancelled",
  }));

  // Table Columns
  const columns = [
    { title: "No", dataIndex: "no", key: "no" },
    {
      title: "Order Image",
      key: "image",
      render: (_, record) => (
        <img
          src={record.image}
          alt="Order"
          className="w-12 h-12 object-cover rounded-md"
        />
      ),
    },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Date", dataIndex: "date", key: "date" },
    { title: "Customer", dataIndex: "customer", key: "customer" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "";
        if (status === "Processing") color = "text-blue-500";
        else if (status === "Shipped") color = "text-yellow-500";
        else if (status === "Delivered") color = "text-green-500";
        else color = "text-red-500";
        return <span className={`font-medium ${color}`}>{status}</span>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-2xl text-gray-700 hover:text-blue-600 transition-colors"
        >
          <LuEye />
        </button>
      ),
    },
  ];

  // Pagination
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedOrders = dummyOrders.slice(start, end);

  return (
    <>
      <div className="bg-white p-3 h-[87vh] overflow-auto">
        {/* Header Section */}
        <div className="flex justify-between mb-3">
           <Navigate title={"Order"} />
          <div className="flex gap-3">
            <Select
              style={{ height: "40px", width: 180 }}
              placeholder="All Orders"
              defaultValue="all"
            >
              <Option value="all">All Orders</Option>
              <Option value="processing">Processing Orders</Option>
              <Option value="shipping">Shipping Orders</Option>
              <Option value="delivered">Delivered Orders</Option>
              <Option value="cancelled">Cancelled Orders</Option>
            </Select>

            <Input
              placeholder="Search by name..."
              prefix={<SearchOutlined />}
              style={{ maxWidth: "300px", height: "40px" }}
            />
          </div>
        </div>

        {/* Orders Table */}
        <Table
          dataSource={paginatedOrders}
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
            total={dummyOrders.length}
            onChange={handlePageChange}
            showSizeChanger={false}
          />
        </div>
      </div>

      {/* ==================== EXACT MODAL DESIGN ==================== */}
      <Modal
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={null}
        centered
        width={600}
        title={null}
        closeIcon={<span className="text-gray-500">×</span>}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-xl font-semibold text-gray-900">Order ID: #8838837</h2>
            <span className="bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full">
              Processing
            </span>
          </div>
          <p className="text-sm text-gray-500 mb-6">December 3, 2024 at 3:40 am</p>

          {/* Order Item */}
          <div className="border-b pb-4 mb-4">
            <h3 className="text-sm font-medium text-gray-700 mb-3">Order Item</h3>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 rounded-md flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-400 rounded-sm"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">JBL Maximum speaker</p>
                  <p className="text-sm text-gray-500">Medium Black</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">$50.00 × 1</p>
                <p className="font-semibold text-gray-900">$50.00</p>
              </div>
            </div>
          </div>

          {/* Price Summary */}
          <div className="space-y-2 mb-6 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-medium text-gray-700">2 items</span>
              <span className="font-medium text-gray-900">$50.00</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span className="font-medium text-gray-700">Door delivery</span>
              <span className="font-medium text-gray-900">$0.00</span>
            </div>
            <div className="flex justify-between text-base font-semibold pt-2 border-t border-gray-200">
              <span>Total</span>
              <span></span>
              <span>$50.00</span>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Timeline</h3>
            <div className="relative">
              <div className="absolute left-5 top-8 bottom-0 w-0.5 bg-gray-200"></div>

              <div className="space-y-6">
                {/* Order Processed */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center z-10">
                    <CheckCircleOutlined className="text-green-600 text-lg" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Order processed</p>
                    <p className="text-xs text-gray-500">23, Oct 2023</p>
                  </div>
                </div>

                {/* Payment Confirmed */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center z-10">
                    <CheckCircleOutlined className="text-gray-400 text-lg" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Payment confirmed</p>
                    <p className="text-xs text-gray-500">23, Oct 2023</p>
                  </div>
                </div>

                {/* Item Shipped */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center z-10">
                    <CarOutlined className="text-gray-400 text-lg" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-600">Item shipped</p>
                    <p className="text-xs text-gray-500">23, Oct 2023</p>
                  </div>
                </div>

                {/* Delivered */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center z-10">
                    <HomeOutlined className="text-gray-400 text-lg" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-600">Delivered</p>
                    <p className="text-xs text-gray-500">23, Oct 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Order;