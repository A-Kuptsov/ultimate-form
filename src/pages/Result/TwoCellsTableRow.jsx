import { Typography, TableCell } from "@material-ui/core";
import { ConvertFieldName } from "utils";

export default function TwoCellsTableRow({ item }) {
  return (
    <>
      <TableCell>
        <Typography component="p" variant="h6" color="textSecondary">
          {ConvertFieldName(item[0])}
        </Typography>
      </TableCell>
      <TableCell align="right">
        <Typography component="p" variant="h6" color="textPrimary">
          {item[1].toString()}
        </Typography>
      </TableCell>
    </>
  );
}
