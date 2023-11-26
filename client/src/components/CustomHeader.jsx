import { TableSortLabel, LinearProgress } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
export const CustomHeader = (props) => {
    const { field, sortDirection, sortIndex, ...other } = props;
  
    return (
      <div {...other}>
        <TableSortLabel
          active={sortIndex !== undefined}
          direction={sortDirection}
          IconComponent={sortDirection === 'asc' ? ArrowDropUpIcon : ArrowDropDownIcon}
        >
          {field}
        </TableSortLabel>
      </div>
    );
  };