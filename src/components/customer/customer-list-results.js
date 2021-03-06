import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';

export const CustomerListResults = ({ customers,search, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const data = {stocks: [
    {
      name: "IBM Common Stock",
      symbol: "IBM",
      quantity: 3,
      dop: "2/3/2022",
      currentPrice: 128.48,
      roi: 13.23
    },
    {
      name: "Apple",
      symbol: "APPL",
      quantity: 1,
      dop: "3/7/2022",
      currentPrice: 165.01,
      roi: 15.23
    }
  ]};
  const stocks=data.stocks.filter((value)=>value.name.indexOf(search) !== -1)

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  
  const router = useRouter();

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 500 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Symbol
                </TableCell>
                <TableCell>
                  Quantity
                </TableCell>
                <TableCell>
                  Date of Purchase
                </TableCell>
                <TableCell>
                  Current Price
                </TableCell>
                <TableCell>
                  ROI
                </TableCell>
                <TableCell/>
              </TableRow>
            </TableHead>
            <TableBody>
              {stocks.slice(0, limit).map((stock) => (
                <TableRow
                  hover
                  key={stock.symbol}
                >
                  <TableCell>
                    {stock.name}
                  </TableCell>
                  <TableCell>
                    {stock.symbol}
                  </TableCell>
                  <TableCell>
                    {stock.quantity}
                  </TableCell>
                  <TableCell>
                    {stock.dop}
                  </TableCell>
                  <TableCell>
                    {stock.currentPrice}
                  </TableCell>
                  <TableCell>
                    {stock.roi>=0 ? "+"+stock.roi+"%" : stock.roi+"%"}
                  </TableCell>
                  <TableCell>
                    <Button onClick={()=>router.push('/buy-sell')}>
                      Buy/Sell
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={stocks.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
