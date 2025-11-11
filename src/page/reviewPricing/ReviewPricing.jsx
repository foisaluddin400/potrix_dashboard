import React, { useState } from "react";
import { Modal, Input, Button } from "antd";
import { Navigate } from "../../Navigate";

const ReviewPricing = () => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [imagePrice, setImagePrice] = useState("5");
  const [videoPrice, setVideoPrice] = useState("10");

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">
      {/* Breadcrumb */}
   
 <Navigate title={"Reviewers"} />
      <div className="">
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image Review Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-50 rounded-br-full opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Image Review Pricing</h3>
              <p className="text-sm text-gray-600 mb-4">
                Set the price for image review services. Adjust rates based on volume, priority, or complexity.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">$5</span>
              </div>
              <button
                onClick={() => setIsImageModalOpen(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Update Pricing
              </button>
            </div>
          </div>

          {/* Video Review Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-24 h-24 bg-blue-50 rounded-br-full opacity-50"></div>
            <div className="relative z-10">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Video Review Pricing</h3>
              <p className="text-sm text-gray-600 mb-4">
                Set the price for video review services. Adjust rates by duration, resolution, turnaround time, or complexity.
              </p>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-bold text-gray-900">$10</span>
              </div>
              <button
                onClick={() => setIsVideoModalOpen(true)}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                Update Pricing
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Review Modal */}
      <Modal
        title={<span className="text-lg font-semibold">Update Image Review Pricing</span>}
        open={isImageModalOpen}
        onCancel={() => setIsImageModalOpen(false)}
        footer={null}
        centered
        width={400}
        closeIcon={<span className="text-gray-500 text-xl">×</span>}
      >
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
          <Input
            prefix="$"
            value={imagePrice}
            onChange={(e) => setImagePrice(e.target.value)}
            className="mb-6"
            size="large"
            style={{ borderRadius: "6px" }}
          />
          <div className="flex justify-end gap-3">
            <Button
              onClick={() => setIsImageModalOpen(false)}
              className="border-red-300 text-red-600 hover:bg-red-50"
              style={{ borderRadius: "6px", height: "40px", minWidth: "100px" }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => setIsImageModalOpen(false)}
              style={{ borderRadius: "6px", height: "40px", minWidth: "100px" }}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>

      {/* Video Review Modal */}
      <Modal
        title={<span className="text-lg font-semibold">Video Review Pricing</span>}
        open={isVideoModalOpen}
        onCancel={() => setIsVideoModalOpen(false)}
        footer={null}
        centered
        width={400}
        closeIcon={<span className="text-gray-500 text-xl">×</span>}
      >
        <div className="p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
          <Input
            prefix="$"
            value={videoPrice}
            onChange={(e) => setVideoPrice(e.target.value)}
            className="mb-6"
            size="large"
            style={{ borderRadius: "6px" }}
          />
          <div className="flex justify-end gap-3">
            <Button
              onClick={() => setIsVideoModalOpen(false)}
              className="border-red-300 text-red-600 hover:bg-red-50"
              style={{ borderRadius: "6px", height: "40px", minWidth: "100px" }}
            >
              Cancel
            </Button>
            <Button
              type="primary"
              onClick={() => setIsVideoModalOpen(false)}
              style={{ borderRadius: "6px", height: "40px", minWidth: "100px" }}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReviewPricing;