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
    // this.socket = socketIO('ipaddress of server:65430');
  }

  state = { search: "" }

  onSearchChange = (event) => {
    this.setState({search: event.target.value});
  }

  // componentDidMount() {
  //   this.socket.connect();
  //   this.socket.on('connect', () => {
  //     console.log("Connected to Server\n");
  //   });
  //   this.socket.on("Example Listener", (arg) => {
  //   });
  // }

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
