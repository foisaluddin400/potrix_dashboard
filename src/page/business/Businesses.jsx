import React, { useState } from "react";
import { Input, Modal, Pagination, Select, Table, Tabs, message } from "antd";
import { MdBlockFlipped } from "react-icons/md";
import { LuEye } from "react-icons/lu";
import { SearchOutlined } from "@ant-design/icons";
import { Navigate } from "../../Navigate";

const { Option } = Select;
const { TabPane } = Tabs;

const Businesses = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Dummy data
  const dummyBusinesses = Array.from({ length: 25 }, (_, index) => ({
    key: index + 1,
    no: index + 1,
    legalName: `Business ${index + 1}`,
    tradeName: `Trade ${index + 1}`,
    type: index % 2 === 0 ? "LLC" : "Private Limited",
    industry: index % 3 === 0 ? "Technology" : "Retail",
    address: "123 Business Street, Dhaka",
    website: "https://example.com",
    businessLicenseEmail: `license${index + 1}@business.com`,
    businessLicensePhoto: "https://via.placeholder.com/150",
    certificatePhoto: "https://via.placeholder.com/150",
    ein: `EIN-${1000 + index}`,
    tin: `TIN-${2000 + index}`,
    contactName: `Contact ${index + 1}`,
    contactRole: "Manager",
    phone: `+8801${Math.floor(100000000 + Math.random() * 900000000)}`,
    email: `contact${index + 1}@business.com`,
    blockId: index % 2 === 0,
    image: `https://avatar.iran.liara.run/public/${index + 1}`,
    createdAt: new Date().toLocaleDateString(),
  }));

  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [selectedBusiness, setSelectedBusiness] = useState(null);

  const showModal2 = (record) => {
    setSelectedBusiness(record);
    setIsModalOpen2(true);
  };

  const handleCancel2 = () => {
    setIsModalOpen2(false);
    setSelectedBusiness(null);
  };

  const handleBlockUnblock = (id) => {
    message.success(`Business with ID ${id} blocked/unblocked successfully`);
  };

  const columns = [
    {
      title: "Legal Business Name",
      key: "legalName",
      render: (_, record) => (
        <div className="flex items-center gap-3">
          <img
            src={record.image}
            className="w-10 h-10 object-cover rounded-full"
            alt="Business Avatar"
          />
          <span>{record.legalName}</span>
        </div>
      ),
    },
    { title: "Type of Business", dataIndex: "type", key: "type" },
    { title: "Industry/Sector", dataIndex: "industry", key: "industry" },
    { title: "Contact Name", dataIndex: "contactName", key: "contactName" },
    { title: "Phone Number", dataIndex: "phone", key: "phone" },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <button className="text-2xl" onClick={() => showModal2(record)}>
            <LuEye />
          </button>
          <button
            onClick={() => handleBlockUnblock(record.key)}
            className={`w-[30px] h-[30px] flex justify-center items-center text-xl rounded-md ${
              record.blockId ? "bg-green-600" : "bg-red-600"
            } text-white`}
          >
            <MdBlockFlipped />
          </button>
        </div>
      ),
    },
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  const paginatedData = dummyBusinesses.slice(start, end);

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">
      <div className="flex justify-between mb-3">
        <Navigate title={"Businesses"} />
        <div className="flex gap-3">
          <Select style={{ height: "40px" }} placeholder="Select Business">
            <Option value="all">All Business</Option>
            <Option value="blocked">Blocked Business</Option>
          </Select>
          <Input
            placeholder="Search by name..."
            prefix={<SearchOutlined />}
            style={{ maxWidth: "300px", height: "40px" }}
          />
        </div>
      </div>

      <Table
        dataSource={paginatedData}
        columns={columns}
        pagination={false}
        scroll={{ x: "max-content" }}
        className="custom-table"
      />

      <div className="mt-4 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={dummyBusinesses.length}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>

      {/* ===== MODAL WITH FIELD BOXES & BLUE ACTIVE TAB ===== */}
      <Modal
        open={isModalOpen2}
        centered
        onCancel={handleCancel2}
        footer={null}
        width={750}
       
        closeIcon={<span className="text-gray-500 text-xl">×</span>}
      >
        {selectedBusiness && (
          <div>
            {/* Header */}
            <div className="flex flex-col items-center mb-6 pt-4">
              <div className="w-24 h-24 rounded-full bg-blue-100 mb-3 overflow-hidden border-4 border-white shadow-md">
                <img
                  src={selectedBusiness.image}
                  alt="Business avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedBusiness.legalName}</h2>
            </div>

            {/* Tabs with Blue Active Background */}
            <Tabs
              defaultActiveKey="1"
              centered
              tabBarGutter={30}
              className="custom-tabs"
              tabBarStyle={{ marginBottom: 24 }}
            >
              <TabPane tab="Business Info" key="1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FieldBox label="Legal Business Name" value={selectedBusiness.legalName} />
                  <FieldBox label="Trade Name" value={selectedBusiness.tradeName} />
                  <FieldBox label="Type of Business" value={selectedBusiness.type} />
                  <FieldBox label="Industry/Sector" value={selectedBusiness.industry} />
                  <FieldBox label="Business Address" value={selectedBusiness.address} />
                  <FieldBox label="Website" value={selectedBusiness.website} />
                  <FieldBox label="Business License Email" value={selectedBusiness.businessLicenseEmail} />
                </div>

                <div className="flex gap-6 mt-6 justify-center">
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Business License Photo</p>
                    <img
                      src={selectedBusiness.businessLicensePhoto}
                      alt="License"
                      className="w-40 h-40 object-cover rounded-lg border border-gray-300 shadow-sm"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-gray-700 mb-2">Certificate of Incorporation</p>
                    <img
                      src={selectedBusiness.certificatePhoto}
                      alt="Certificate"
                      className="w-40 h-40 object-cover rounded-lg border border-gray-300 shadow-sm"
                    />
                  </div>
                </div>
              </TabPane>

              <TabPane tab="Business Owner Info" key="2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <FieldBox label="Contact Name" value={selectedBusiness.contactName} />
                  <FieldBox label="Contact Role" value={selectedBusiness.contactRole} />
                  <FieldBox label="Phone Number" value={selectedBusiness.phone} />
                  <FieldBox label="Email" value={selectedBusiness.email} />
                </div>
              </TabPane>

              <TabPane tab="Legal Info" key="3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                  <FieldBox label="EIN" value={selectedBusiness.ein} />
                  <FieldBox label="Tax Identification Number (TIN)" value={selectedBusiness.tin} />
                </div>
              </TabPane>
            </Tabs>
          </div>
        )}
      </Modal>
    </div>
  );
};

// Reusable Field Box Component
const FieldBox = ({ label, value }) => (
  <div className="flex flex-col">
    <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
    <div className="px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 font-medium">
      {value}
    </div>
  </div>
);

export default Businesses;