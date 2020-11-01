import React from "react";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import { MainContainer } from "components/MainContainer";
import { useData } from "DataContext";
import * as CONSTS from "constants.js";
import { ResetData } from "utils.js";

import ButtonsGroup from "./ButtonsGroup";
import DataTable from "./DataTable";
import ListFiles from "./ListFiles";

const Result = () => {
  const history = useHistory();
  const { data } = useData();
  const entries = Object.entries(data).filter(entry => entry[0] !== "files");
  const { files } = data;

  const [success, setSuccess] = React.useState(false);

  const onSubmit = async () => {
    const formData = new FormData();
    if (data.files) {
      data.files.forEach(file => {
        formData.append("files", file, file.name);
      });
    }
    entries.forEach(entry => {
      formData.append(entry[0], entry[1]);
    });

    Swal.fire(CONSTS.SWAL_TITLE, CONSTS.SWAL_MESSAGE, "success");
    setSuccess(true);
    ResetData(data);
    setTimeout(() => history.push("/"), CONSTS.TIMEOUT);
  };

  React.useEffect(() => {
    !data.firstName && !data.email && history.push("/");
  }, [history, data.firstName, data.email]);

  return (
    <>
      {success && <></>}
      {data.firstName && data.email && (
        <MainContainer>
          <Typography component="h2" variant="h5">
            Check your data
          </Typography>
          <DataTable entries={entries} data={data} />
          {files && files.length > 0 && (
            <>
              <Typography component="p" variant="h6" color="textSecondary">
                Files
              </Typography>
              <ListFiles files={files} />
            </>
          )}
          <ButtonsGroup onSubmit={onSubmit} history={history} />
        </MainContainer>
      )}
    </>
  );
};

export default Result;
