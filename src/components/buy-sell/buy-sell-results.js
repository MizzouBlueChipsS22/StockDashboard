import {
  Chart,
  ArgumentAxis,
  ValueAxis,
  LineSeries,
  TickInterval
} from '@devexpress/dx-react-chart-material-ui';
import {
  Card, Paper
} from '@mui/material';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const BuySellResults = ({stockData, ...rest }) => {
  const test = stockData["Time Series (Daily)"]
  var data = []
  var i =100;
  for(var key in test) {
    var x = new Date(key);
    data.push({x: i--, y: parseFloat(test[key]["1. open"])})
  }
  console.log(data);
  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Paper>
          <Chart
            data={data}
          >
            <ArgumentAxis>
              <TickInterval days={1} />
            </ArgumentAxis>
            <ValueAxis>
            </ValueAxis>

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

BuySellResults.propTypes = {
  customers: PropTypes.array.isRequired
};
