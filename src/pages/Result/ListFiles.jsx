import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { InsertDriveFile } from "@material-ui/icons";
import { CalcFileSize } from "utils";

export default function ListFiles({ files }) {
  return (
    <List>
      {files.map((item, i) => (
        <ListItem key={i}>
          <ListItemIcon>
            <InsertDriveFile />
          </ListItemIcon>
          <ListItemText
            primary={item.name}
            secondary={CalcFileSize(item.size)}
          />
        </ListItem>
      ))}
    </List>
  );
}
