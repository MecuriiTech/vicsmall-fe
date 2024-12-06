"use client";

import { useState } from "react";
import Overview from "./overview";
import Reviews from "./reviews-tab/reviews";
import Vendor from "./vendor";
import Shipping from "./shipping";
import { reviews, vendorDetails } from "@/app/data/dummyData";

const InfoTabs = () => {
  const [activeTab, setActiveTab] = useState<string>("overview");
  return (
    <section className="rounded-xl bg-white p-2 shadow-lg">
      <div className="mb-4 flex items-center rounded-lg text-gray-400">
        <button
          onClick={() => setActiveTab("overview")}
          className={`${activeTab === "overview" ? "bg-white font-medium text-gray-600" : "bg-neutral-light-gray text-gray-400"} rounded-l-xl border px-4 py-2`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab("reviews")}
          className={`${activeTab === "reviews" ? "bg-white font-medium text-gray-600" : "bg-neutral-light-gray text-gray-400"} border px-4 py-2`}
        >
          Reviews ({reviews.length})
        </button>
        <button
          onClick={() => setActiveTab("vendor")}
          className={`${activeTab === "vendor" ? "bg-white font-medium text-gray-600" : "bg-neutral-light-gray text-gray-400"} border px-4 py-2`}
        >
          Vendor info
        </button>
        <button
          onClick={() => setActiveTab("shipping")}
          className={`${activeTab === "shipping" ? "bg-white font-medium text-gray-600" : "bg-neutral-light-gray text-gray-400"} rounded-r-xl border px-4 py-2`}
        >
          Shipping
        </button>
      </div>

      <div className="px-4">
        {activeTab === "overview" && <Overview />}
        {activeTab === "reviews" && <Reviews reviews={reviews} />}
        {activeTab === "vendor" && <Vendor vendor={vendorDetails} />}
        {activeTab === "shipping" && <Shipping />}
      </div>
    </section>
  );
};

export default InfoTabs;