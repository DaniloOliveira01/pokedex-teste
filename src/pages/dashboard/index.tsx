import { NextPage } from "next";
import { ReactElement } from "react";
import Head from "next/head";

import Layout from "@/templates/Layout";
import { useAuth } from "@/contexts/auth";

type DashboardPage = {
  getLayout: (page: ReactElement) => JSX.Element
}

const Dashboard: NextPage & DashboardPage = () => {
  const { email } = useAuth();

  return (
    <>
      <Head>
        <title>
          Dashboard
        </title>
      </Head>

      <h1>Dashboard</h1>
      <h3>{email}</h3>
    </>
  );
};

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Dashboard;
