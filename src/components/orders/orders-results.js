import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    LineSeries,
  } from '@devexpress/dx-react-chart-material-ui';
  import {
    Card, Paper
  } from '@mui/material';
  import PropTypes from 'prop-types';
  import PerfectScrollbar from 'react-perfect-scrollbar';
  
  export const OrderResults = ({stockData, ...rest }) => {
  
    return (
      <Card {...rest}>
        <PerfectScrollbar>
          <Paper>
            <Chart
              data={stockData}
            >
              <ArgumentAxis />
              <ValueAxis/>
  
              <LineSeries
                name="Android"
                valueField="y"
                argumentField="x"
              />
            </Chart>
          </Paper>
        </PerfectScrollbar>
      </Card>
    );
  };
  
  OrderResults.propTypes = {
    customers: PropTypes.array.isRequired
  };
  