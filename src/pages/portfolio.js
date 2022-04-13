/********************************
 * Portfolio Layout
 * Notes:
 * 
 * 
 */
import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';

const PortfolioRoot = () => (
    <>
      <Head>
        <title>
          User Account | Material Kit
        </title>
      </Head>
    </>
  );
  
  PortfolioRoot.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default PortfolioRoot;