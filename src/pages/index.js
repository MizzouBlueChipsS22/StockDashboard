import Head from 'next/head';
import React from 'react';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';

export default class Portfolio extends React.Component {
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
            Portfolio
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
            <CustomerListToolbar search={this.onSearchChange}/>
            <Box sx={{ mt: 3 }}>
              <CustomerListResults customers={customers} search={this.state.search} />
            </Box>
          </Container>
        </Box>
      </DashboardLayout>
    )
  }
}
