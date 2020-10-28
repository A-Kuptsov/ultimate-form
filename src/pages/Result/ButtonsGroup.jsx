import { Grid } from "@material-ui/core";
import { SubmitButton } from "components/SubmitButton";

export default function ButtonGroup({ onSubmit, history }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={6}>
        <SubmitButton onClick={onSubmit}>Submit</SubmitButton>
      </Grid>
      <Grid item xs={6}>
        <SubmitButton onClick={() => history.push("/")} color="secondary">
          Start over
        </SubmitButton>
      </Grid>
    </Grid>
  );
}
