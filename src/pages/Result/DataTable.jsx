import { makeStyles } from "@material-ui/core/styles";
import {
  TableContainer,
  Table,
  TableBody,
  TableRow,
  Paper
} from "@material-ui/core";

import TwoCellsTableRow from "./TwoCellsTableRow";

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4)
  }
}));

export default function DataTable({ entries, data }) {
  const styles = useStyles();

  return (
    <TableContainer className={styles.root} component={Paper}>
      <Table>
        <TableBody>
          {entries.map(item => (
            <TableRow key={item[0]}>
              {item[0] !== "hasPhone" &&
                (item[0] !== "phoneNumber" ? (
                  <TwoCellsTableRow item={item} />
                ) : (
                  data["hasPhone"] && <TwoCellsTableRow item={item} />
                ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
