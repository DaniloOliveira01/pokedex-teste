import { NextPage } from "next";
import { ReactElement } from "react";

import Layout from "@/templates/Layout";

import { DashboardTemplate } from "@/templates/dashboard";

type DashboardPage = {
  getLayout: (page: ReactElement) => JSX.Element
}

const Dashboard: NextPage & DashboardPage = () => {
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
