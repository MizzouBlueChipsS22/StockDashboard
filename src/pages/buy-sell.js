import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';

const transactions = () => (
  <>
    <Head>
      <title>
        Transactions | Material Kit
      </title>
    </Head>
  </>
);

transactions.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default transactions;
