import { Controller } from "react-hook-form";
import {
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles
} from "@material-ui/core";
import { CloudUpload, InsertDriveFile } from "@material-ui/icons";
import Dropzone from "react-dropzone";

import { CalcFileSize } from "utils.js";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#eee",
    textAlign: "center",
    cursor: "pointer",
    color: "#333",
    padding: "0.75rem",
    marginTop: theme.spacing(8)
  },
  icon: {
    marginTop: theme.spacing(2),
    color: "#888",
    fontSize: theme.spacing(6)
  }
}));

export const FileInput = ({ control, name }) => {
  const styles = useStyles();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                className={styles.root}
                variant="outlined"
                {...getRootProps()}
              >
                <CloudUpload className={styles.icon} />
                <input name={name} onBlur={onBlur} {...getInputProps()} />
                <p>Dran 'n' drops files here or click to select files.</p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((item, i) => (
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
        </>
      )}
    />
  );
};
