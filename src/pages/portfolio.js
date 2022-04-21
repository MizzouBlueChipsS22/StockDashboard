/********************************
 * Portfolio Layout
 * Notes:
 * 
 * 
 */
import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import React from 'react';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

const PortfolioRoot = () => (
    <>
      <Head>
        <title>
          User Account | Material Kit
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'right',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%',
        }}
      >
        <Container maxWidth="md">
          First Container
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: "blue"
          }}
        >
          First
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: "darkcyan"
          }}
        >
          Second
        </Box>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: "white"
          }}
        >
          Third
        </Box>
        </Container>
        <Container maxWidth="md">
          second container
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: "cadetblue",
              flexGrow: "1"
            }}
          >
            Portfolio Pie Chart
          </Box>
        </Container>
      </Box>
    </>
  );
  
  PortfolioRoot.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default PortfolioRoot;