// REDUNDANT atm
import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectSmall({ label, id, options }) {
  const [select, setSelect] = useState("");

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id={id}>{label}</InputLabel>
      <Select
        labelId={label}
        id={id}
        value={select}
        label={label}
        onChange={handleChange}>
        {options.map((option) => {
          return (
            <MenuItem value={option} key={option}>
              {option}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
