import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../layout/dashboardLayout/DashboardLayout";
import Dashboard from "../components/Dashboard/Dashboard";
import UserManagement from "../page/UserManagement/UserManagement";
import CreatorManagement from "../page/CreatorManagement/CreatorManagement";

import Subscription from "../page/Subscription/Subscription";

import Profile from "../page/Settings/Profile";
import TermsCondition from "../page/Settings/TermsCondition";
import FAQ from "../page/Settings/FAQ";
import PrivacyPolicy from "../page/Settings/PrivacyPolicy";
import Categories from "../page/CategoriesManagement/Categories";
import Subcategory from "../page/CategoriesManagement/Subcategory";

import ForgetPass from "../Auth/ForgetPass";
import Verify from "../Auth/Verify";
import ResetPass from "../Auth/ResetPass";
import Notification from "../page/Notification/Notification";
import About from "../page/Settings/About";
import Login from "../Auth/Login";
import Reviewers from "../page/reviewers/Reviewers";
import Businesses from "../page/business/Businesses";
import Campaings from "../page/campaings/Campaings";
import Order from "../page/order/Order";
import ReviewPricing from "../page/reviewPricing/ReviewPricing";
import Transaction from "../page/transaction/Transaction";
import ContentModeration from "../page/contentModeration/ContentModeration";
import CampaingDetails from "../page/campaings/CampaingDetails";
import ContentModerationDetails from "../page/contentModeration/ContentModerationDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
     
        <DashboardLayout></DashboardLayout>
      
    ),
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/UserManagement",
        element: <UserManagement></UserManagement>,
      },
          {
        path: "/dashboard/reviewers",
        element: <Reviewers></Reviewers>
      },
          {
        path: "/dashboard/businesses",
        element: <Businesses></Businesses>
      },
          {
        path: "/dashboard/campaings",
        element: <Campaings></Campaings>
      },
       {
        path: "/dashboard/campainDetails/:id",
        element: <CampaingDetails></CampaingDetails>
      },
          {
        path: "/dashboard/order",
        element: <Order></Order>
      },
          {
        path: "/dashboard/reviewPricing",
        element: <ReviewPricing></ReviewPricing>
      },
          {
        path: "/dashboard/transaction",
        element: <Transaction></Transaction>
      },
          {
        path: "/dashboard/contentModeration",
        element: <ContentModeration></ContentModeration>
      },
         {
        path: "/dashboard/contentModerationDetails/:id",
        element: <ContentModerationDetails></ContentModerationDetails>
      },
      {
        path: "/dashboard/CreatorManagement",
        element: <CreatorManagement></CreatorManagement>,
      },
      {
        path: "/dashboard/CategoriesManagement/Categories",
        element: <Categories></Categories>,
      },
      {
        path: "/dashboard/CategoriesManagement/Categories",
        element: <Categories></Categories>,
      },
      {
        path: "/dashboard/CategoriesManagement/Subcategory",
        element: <Subcategory></Subcategory>,
      },
      {
        path: "/dashboard/Subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "/dashboard/Settings/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/Settings/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/Settings/notification",
        element: <Notification></Notification>,
      },
      {
        path: "/dashboard/Settings/Terms&Condition",
        element: <TermsCondition></TermsCondition>,
      },
      {
        path: "/dashboard/Settings/FAQ",
        element: <FAQ></FAQ>,
      },
      {
        path: "/dashboard/Settings/aboutUs",
        element: <About></About>,
      },
      {
        path: "/dashboard/Settings/PrivacyPolicy",
        element: <PrivacyPolicy></PrivacyPolicy>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/forgot-password",
    element: <ForgetPass></ForgetPass>,
  },
  {
    path: "/verification",
    element: <Verify></Verify>,
  },
  {
    path: "/reset-password",
    element: <ResetPass></ResetPass>,
  },
]);
