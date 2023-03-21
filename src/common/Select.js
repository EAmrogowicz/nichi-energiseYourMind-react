// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function SelectSmall({ label, value, id, menuValue }) {
  // how is best to pass menuItem values and text?
  const handleChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='select-small'>Age</InputLabel>
      <Select
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}>
        <MenuItem value=''>
          <em>None</em>
        </MenuItem>
        <MenuItem value={menuValue[0]}>{menuValue[0]}</MenuItem>
      </Select>
    </FormControl>
  );
}
