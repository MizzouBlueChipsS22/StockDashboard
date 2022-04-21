/********************************
 * Portfolio Layout
 * Notes:
 * 
 * 
 */
import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import React from 'react';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';

const PortfolioRoot = () => (
    <>
      <Head>
        <title>
          User Portfolio
        </title>
      </Head>
      <Grid 
        container 
        spacing={2}
        direction="column"
        justifyContent="left"
        alignItems="center"
      >
        <Grid item rowSpacing={2} md={2}>
          <Box
            sx={{
              backgroundColor: 'lightslategrey'
            }}
          >
            <Container>
                1
            </Container>
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              backgroundColor: 'powderblue'
            }}
          >
            <Container>
                2
            </Container>
          </Box>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item rowSpacing={2} md={2}>
          <Box
            sx={{
              backgroundColor: 'lightslategrey'
            }}
          >
            <Container>
                3
            </Container>
          </Box>
        </Grid>
      </Grid>
    </>
  );
  
  PortfolioRoot.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default PortfolioRoot;