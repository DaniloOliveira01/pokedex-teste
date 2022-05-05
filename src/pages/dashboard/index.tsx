import { NextPage } from "next";
import { ReactElement } from "react";

import Layout from "@/templates/Layout";

import { DashboardTemplate } from "@/templates/dashboard";
import { IDashboardPage } from "@/@types/type-pages";


const Dashboard: NextPage & IDashboardPage = () => {
  return <DashboardTemplate />
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Dashboard;
