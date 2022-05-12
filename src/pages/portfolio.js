/********************************
 * Portfolio Layout
 * Notes:
 * 
 * 
 */
import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import React from 'react';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { PieSeries, Chart, Title, Legend} from '@devexpress/dx-react-chart-material-ui';
import { Animation } from '@devexpress/dx-react-chart';

//Function for putting data in table
function createData(ticker, company, marketCap, price, volume) {
  return { ticker, company, marketCap, price, volume };
}

//Table Data
const rows = [
  createData('ABC', 'Filler', 6.0, 24, 4.0),
  createData('ABB', 'Filler', 9.0, 37, 4.3),
  createData('CTL', 'Filler', 16.0, 24, 6.0),
  createData('HEL', 'Filler', 3.7, 67, 4.3),
  createData('POO', 'Filler', 16.0, 49, 3.9),
  createData('ABC', 'Filler', 6.0, 24, 4.0),
  createData('ABB', 'Filler', 9.0, 37, 4.3),
  createData('CTL', 'Filler', 16.0, 24, 6.0),
  createData('HEL', 'Filler', 3.7, 67, 4.3),
  createData('POO', 'Filler', 16.0, 49, 3.9),
];

//Data for pie chart
const data = [
  { argument:'Stock1', value:10 },
  { argument:'Stock2', value:40 },
  { argument:'Stock3', value:10 },
  { argument:'Stock4', value:20 },
  { argument:'Stock5', value:20 },
  { argument:'Stock1', value:10 },
  { argument:'Stock2', value:40 },
  { argument:'Stock3', value:10 },
  { argument:'Stock4', value:20 },
  { argument:'Stock5', value:20 },
];

const PortfolioRoot = () => (
    <>
      <Head>
        <title>
          User Portfolio
        </title>
      </Head>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "lightgrey",
                height: 500,
                borderRadius: "5%",
                margin: '10px 0px 0px 0px'
              }}
              >
              <Typography
                  align='center'
                >
                  Stocks Owned Table
                </Typography>
                <TableContainer sx={{height: 476}}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Ticker</TableCell>
                        <TableCell align="right">Comapny Name</TableCell>
                        <TableCell align="right">Market Cap</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Volume</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                            {row.ticker}
                          </TableCell>
                          <TableCell align="right">{row.company}</TableCell>
                          <TableCell align="right">{row.marketCap}</TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                          <TableCell align="right">{row.volume}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box
              sx={{
                backgroundColor: "offwhite",
                height: 500
              }}
              >
                <Typography
                  align='center'
                >
                </Typography>
                <Paper variant='outlined' elevation={6}>
                  <Chart
                    data={data}
                  >
                    <PieSeries valueField='value' argumentField='argument' innerRadius={0.65}/>
                    <Title text='Stock Portfolio'/>
                    <Legend/>
                    <Animation/>
                  </Chart>
                </Paper>
              </Box>
          </Grid>
          <Grid item xs={12} md={6}>
          <Box
              sx={{
                backgroundColor: "lightslategrey",
                height: 500
              }}
              >
                <Typography
                  align='center'
                >
                  3
                </Typography>
              </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
  
  PortfolioRoot.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
  );
  
  export default PortfolioRoot;