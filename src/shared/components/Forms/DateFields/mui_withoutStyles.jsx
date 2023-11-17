import InputBase from "@mui/material/InputBase";
import { withStyles } from "@mui/styles";

const CustomInputBase = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: "auto",
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the following to remove the default MUI styles
    '&[class*="MuiOutlinedInput-root"]': {
      borderRadius: "none",
    },
    "&:focus": {
      borderRadius: "none",
    },
  },
}))(InputBase);

// Использование в вашем компоненте
const YourComponent = () => {
  return (
    <CustomInputBase
    // ...other props
    />
  );
};
