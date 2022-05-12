import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon, Typography
} from '@mui/material';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Download as DownloadIcon } from '../../icons/download';

export const BuySellToolbar = (props) => (
  <Box {...props}>
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        m: -1
      }}
    >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
      >
        IBM Common Stock (IBM)<br/>
        ($125.75) Score (+1.875)
      </Typography>
      <Box sx={{ m: 1 }}>
        <TextField id="standard-basic" label="Quantity" variant="standard" />
        <Button
          startIcon={(<UploadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Buy
        </Button>
        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Sell
        </Button>
      </Box>
    </Box>
  </Box>
);
