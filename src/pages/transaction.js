import Head from 'next/head';
import React from 'react';
import { Box, Container } from '@mui/material';
import { TransactionListResults } from '../components/transactions/transactions-list-results';
import { TransactionListToolbar } from '../components/transactions/transactions-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

export default class Transactions extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { search: "" }

  onSearchChange = (event) => {
    this.setState({search: event.target.value});
  }

  render() {
    console.log(this.state)
    return(
      <DashboardLayout>
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
            <TransactionListToolbar search={this.onSearchChange}/>
            <Box sx={{ mt: 3 }}>
              <TransactionListResults search={this.state.search} />
            </Box>
          </Container>
        </Box>
      </DashboardLayout>
    )
  }
}
