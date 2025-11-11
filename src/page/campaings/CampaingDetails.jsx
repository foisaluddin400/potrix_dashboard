"use client";
import React from "react";
import { Progress } from "antd";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Navigate } from "../../Navigate";

const CampaingDetails = () => {
  // ✅ Dummy Data
  const campaign = {
    image: "https://cdn3d.iconscout.com/3d/premium/thumb/headphone-3d-icon-png-download-9770555.png?f=webp",
    name: "Summer Collection Review",
    description:
      "This is a test for summer collection before it sent out for mass production",
    timeline: "Mar 23, 2024 - Sep 30, 2024",
    budget: "$25,000 of $100,000",
    status: "Active",
    progressValue: 3,
    progressText: "10/300",
    reviewsCompleted: 32,
    totalSpent: "$12,450",
    averageRating: 4.3,
    daysRemaining: 12,
  };

  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">
      {/* Header */}
      <Navigate title={"Campaings"} />

      {/* Image + Info */}
      <div className="flex flex-col md:flex-row items-start gap-8 border-b border-gray-200 pb-8">
        <img
          src={campaign.image}
          alt={campaign.name}
          className="w-40 h-40 object-contain rounded-lg border"
        />
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">
            {campaign.name}
          </h1>
          <p className="text-gray-500 mt-2">{campaign.description}</p>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5 mt-8">
        {/* Timeline */}
        <div className="border rounded-2xl p-4">
          <p className="text-sm text-gray-500 mb-1">TIMELINE</p>
          <p className="font-medium text-gray-800">{campaign.timeline}</p>
        </div>

        {/* Budget */}
        <div className="border rounded-2xl p-4">
          <p className="text-sm text-gray-500 mb-1">BUDGET</p>
          <p className="font-medium text-gray-800">{campaign.budget}</p>
        </div>

        {/* Status */}
        <div className="border rounded-2xl p-4">
          <p className="text-sm text-gray-500 mb-1">STATUS</p>
          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 text-xs font-medium rounded-full">
            {campaign.status}
          </span>
        </div>

        {/* Progress */}
        <div className="border rounded-2xl p-4">
          <p className="text-sm text-gray-500 mb-1">PROGRESS</p>
          <div className="flex items-center gap-2">
            <Progress
              percent={campaign.progressValue}
              showInfo={false}
              size="small"
              className="w-full"
            />
            <span className="text-sm text-gray-600">
              {campaign.progressText}
            </span>
          </div>
        </div>
      </div>

      {/* Extra Stats */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5 mt-5">
        <div className="border rounded-2xl p-4">
          <p className="text-sm text-gray-500 mb-1">REVIEWS COMPLETED</p>
          <p className="text-2xl font-semibold text-gray-800">
            {campaign.reviewsCompleted}
          </p>
        </div>
        <div className="border rounded-2xl p-4">
          <p className="text-sm text-gray-500 mb-1">TOTAL SPENT</p>
          <p className="text-2xl font-semibold text-gray-800">
            {campaign.totalSpent}
          </p>
        </div>
        <div className="border rounded-2xl p-4">
          <p className="text-sm text-gray-500 mb-1">AVERAGE RATING</p>
          <p className="text-2xl font-semibold text-gray-800">
            {campaign.averageRating}
          </p>
        </div>
        <div className="border rounded-2xl p-4">
          <p className="text-sm text-gray-500 mb-1">DAYS REMAINING</p>
          <p className="text-2xl font-semibold text-gray-800">
            {campaign.daysRemaining}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CampaingDetails;
