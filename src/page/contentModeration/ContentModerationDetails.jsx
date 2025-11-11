import React from "react";
import { Navigate } from "../../Navigate";

const ContentModerationDetails = () => {
  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">
      {/* Breadcrumb */}
      <Navigate title={"Content Moderation Details"} />

      <div className="">
        {/* Review Card */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            {/* User Info */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white font-semibold text-lg">
                CW
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">ChanceWestervelt</h3>
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-yellow-500">5 stars</span>
                  <span className="text-gray-500">• 5.0</span>
                </div>
                <p className="text-xs text-gray-500">23rd Mar, 2023</p>
              </div>
            </div>

            {/* Price & Product */}
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900">$25.00</p>
              <p className="text-xs text-gray-500">/Electronics</p>
              <p className="text-sm font-medium text-gray-700 mt-1">
                Mini Portable Refillable Sprayer Atomizer Bottle 5ml-Gold
              </p>
            </div>
          </div>

          {/* Review Text */}
          <p className="text-gray-700 text-sm leading-relaxed mb-6">
            These headphones are absolutely incredible! The noise-cancelling is top-notch and battery life is amazing. Been using them for a week now and I'm impressed with the sound quality. Great for both music and calls.
          </p>

          <hr className="border-gray-200 mb-6" />

          {/* Media Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Video Player */}
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Review Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-3 bg-white flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center gap-3">
                  <button className="hover:text-gray-900">Play</button>
                  <div className="w-32 bg-gray-300 h-1 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-1/3"></div>
                  </div>
                  <span>1:23 / 4:78</span>
                </div>
                <div className="flex items-center gap-3">
                  <button className="hover:text-gray-900">Volume</button>
                  <button className="hover:text-gray-900">CC</button>
                  <button className="hover:text-gray-900">More</button>
                </div>
              </div>
            </div>

            {/* Product Image */}
            <div className="bg-yellow-100 rounded-lg p-8 flex items-center justify-center">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-64 flex items-center justify-center text-gray-500">
                <span className="text-lg font-medium">Headphones Image</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-start gap-3">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
            Approve
          </button>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentModerationDetails;