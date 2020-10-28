import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Typography } from "@material-ui/core";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form } from "components/Form";
import { Input } from "components/Input";
import { MainContainer } from "components/MainContainer";
import { SubmitButton } from "components/SubmitButton";
import { useData } from "DataContext";
import { schema } from "./Schema";

const Step1 = () => {
  const history = useHistory();
  const { data, setValues } = useData();
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { firstName: data.firstName, lastName: data.lastName },
    mode: "onChange",
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    history.push("/step2");
    setValues(data);
  };
  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        What is your name?
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="firstName"
          type="text"
          label="First Name"
          name="firstName"
          error={!!errors.firstName}
          helperText={errors.firstName && errors.firstName.message}
        />
        <Input
          ref={register}
          id="lastName"
          type="text"
          label="Last Name"
          name="lastName"
          error={!!errors.lastName}
          helperText={errors.lastName && errors.lastName.message}
        />
        <SubmitButton>Next</SubmitButton>
      </Form>
    </MainContainer>
  );
};

export default Step1;
