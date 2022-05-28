import { Button, TextField } from "@mui/material"
import { Box } from "@mui/system"
import SelectField from "../components/SelectField"
import TextFieldComp from "../components/TextFieldComp";

function Settings() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (

    <form onSubmit={handleSubmit}>
      <SelectField label="Category" />
      <SelectField label="Difficulty" />
      <SelectField label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button
          fullWidth="true"
          variant="contained"
          type="submit">
          Get Stared
        </Button>
      </Box>
    </form>

  )
}

export default Settings
