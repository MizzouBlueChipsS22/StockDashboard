import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import { Box, Container } from '@mui/material';
import { BuySellResults } from '../components/buy-sell/buy-sell-results';
import { BuySellToolbar } from '../components/buy-sell/buy-sell-toolbar';
import { microsoft } from '../__mocks__/microsoft';


const transactions = () => (
  <>
    <Head>
      <title>
        Transactions
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <BuySellToolbar />
        <Box sx={{ mt: 3 }}>
          <BuySellResults stockData={microsoft} />
        </Box>
      </Container>
    </Box>
  </>
);

transactions.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default transactions;
