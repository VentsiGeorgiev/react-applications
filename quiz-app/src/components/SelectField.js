import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'

const SelectField = ({ label }) => {
  const [value, setValue] = useState('')

  const handleChange = () => {

  }
  return (
    <Box mt={3} width="100%" >

      <FormControl fullWidth="true" size="small">
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          <MenuItem>Options1</MenuItem>
          <MenuItem>Options2</MenuItem>
          <MenuItem>Options3</MenuItem>
        </Select>
      </FormControl>

    </Box>
  )
}

export default SelectField
