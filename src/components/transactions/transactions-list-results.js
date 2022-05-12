import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
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

export const TransactionListResults = ({ customers,search, ...rest }) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const data = {stocks: [
    {
      name: "IBM Common Stock",
      symbol: "IBM",
      quantity: 3,
      dop: "2/3/2022",
      dos: "4/18/2022",
      roi: 15.23
    },
    {
      name: "Apple",
      symbol: "APPL",
      quantity: 1,
      dop: "3/7/2022",
      dos: "4/18/2022",
      roi: 13.23
    },
    {
      name: "Apple",
      symbol: "APPL",
      quantity: 1,
      dop: "3/6/2022",
      dos: "3/7/2022",
      roi: 2.33
    },
    {
      name: "Apple",
      symbol: "APPL",
      quantity: 1,
      dop: "3/3/2022",
      dos: "3/6/2022",
      roi: -5.32
    },
  ]};
  const stocks=data.stocks.filter((value)=>value.name.indexOf(search) !== -1)

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

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
                  Date of Purchase
                </TableCell>
                <TableCell>
                  Date of Sale
                </TableCell>
                <TableCell>
                  Quantity
                </TableCell>
                <TableCell>
                  ROI
                </TableCell>
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
                    {stock.dop}
                  </TableCell>
                  <TableCell>
                    {stock.dos}
                  </TableCell>
                  <TableCell>
                    {stock.quantity}
                  </TableCell>
                  <TableCell>
                    {stock.roi>=0 ? "+"+stock.roi+"%" : stock.roi+"%"}
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

TransactionListResults.propTypes = {
};
