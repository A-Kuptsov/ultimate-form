import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Typography, FormControlLabel, Checkbox } from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { parsePhoneNumberFromString } from "libphonenumber-js";

import { MainContainer } from "components/MainContainer";
import { Form } from "components/Form";
import { Input } from "components/Input";
import { SubmitButton } from "components/SubmitButton";
import { useData } from "DataContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email should have correct format")
    .required("Email is a required field")
});

const formatPhoneNumber = e => {
  const result = parsePhoneNumberFromString(e.target.value);
  e.target.value = result ? result.formatInternational() : e.target.value;
};

const Step2 = () => {
  const history = useHistory();
  const { data, setValues } = useData();

  const { register, handleSubmit, errors, watch } = useForm({
    defaultValues: {
      email: data.email,
      hasPhone: data.hasPhone,
      phoneNumber: data.phoneNumber
    },
    mode: "onChange",
    resolver: yupResolver(schema)
  });

  const onSubmit = data => {
    history.push("/step3");
    setValues(data);
  };

  const hasPhone = watch("hasPhone");

  return (
    <MainContainer>
      <Typography component="h2" variant="h5">
        How contact with you?
      </Typography>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          ref={register}
          id="email"
          type="email"
          name="email"
          label="Email"
          required
          error={!!errors.email}
          helperText={errors.email && errors.email.message}
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultValue={data.hasPhone}
              defaultChecked={data.hasPhone}
              name="hasPhone"
              inputRef={register}
              color="primary"
            />
          }
          label="Do you have a phone number?"
        />
        {hasPhone && (
          <Input
            ref={register}
            id="phoneNumber"
            type="tel"
            label="Phone number"
            name="phoneNumber"
            onChange={e => formatPhoneNumber(e)}
          />
        )}
        <SubmitButton>Next</SubmitButton>
      </Form>
    </MainContainer>
  );
};

export default Step2;
