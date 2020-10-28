import { Typography } from "@material-ui/core";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { MainContainer } from "components/MainContainer";
import { FileInput } from "components/FileInput";
import { SubmitButton } from "components/SubmitButton";
import { Form } from "components/Form";
import { useData } from "DataContext";

const Step3 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { control, handleSubmit } = useForm({
    defaultValues: { files: data.files }
  });
  const onSubmit = data => {
    history.push("/result");
    setValues(data);
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        Upload your files
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FileInput name="files" control={control} />
        <SubmitButton>Next</SubmitButton>
      </Form>
    </MainContainer>
  );
};

export default Step3;
