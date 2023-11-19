import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useState } from "react";

import PickerIcon from "./PickerIcon";

const DateFields = ({ onDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formatedDate = `${date.$D}-${months[date.$M]}-${date.$y}`;
    // const formatedDate = {
    //   day: date.$D,
    //   month: months[date.$M],
    //   year: date.$y,
    // };
    onDateChange(formatedDate);
  };

  // console.log(selectedDate);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
      <DatePicker
        sx={{
          "& .MuiButtonBase-root": {
            padding: "0",
            marginRight: "4px",
          },
          "& .MuiInputBase-root": {
            display: "flex",
            width: "120px",
            height: "49px",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: "0",

            borderRadius: "30px",
            border: "1px solid #000",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              height: "100%",
              border: "none",
            },
            "& input": {
              padding: "0",
              paddingLeft: "24px",
              color: "#1E1E2D",
              fontFamily: "DM-Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "120%",
            },
            "& input::placeholder": {
              color: "#949494",
              fontFamily: "DM-Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "120%",
            },
          },
        }}
        onChange={handleDateChange}
        slotProps={{
          textField: {
            variant: "outlined",
            placeholder: "Day",
          },
        }}
        slots={{
          openPickerIcon: PickerIcon,
        }}
        label={null}
        views={["day"]}
        maxDate={dayjs()}
      />
      <DatePicker
        sx={{
          "& .MuiButtonBase-root": {
            padding: "0",
            marginRight: "4px",
          },
          "& .MuiInputBase-root": {
            display: "flex",
            width: "170px",
            height: "49px",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: "0",

            borderRadius: "30px",
            border: "1px solid #000",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              height: "100%",
              border: "none",
            },
            "& input": {
              padding: "0",
              paddingLeft: "24px",
              color: "#1E1E2D",
              fontFamily: "DM-Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "120%",
            },
            "& input::placeholder": {
              color: "#949494",
              fontFamily: "DM-Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "120%",
            },
          },
        }}
        value={selectedDate}
        onChange={handleDateChange}
        slotProps={{
          textField: {
            variant: "outlined",
            placeholder: "Month",
          },
        }}
        slots={{
          openPickerIcon: PickerIcon,
        }}
        label={null}
        views={["month"]}
        maxDate={dayjs()}
      />
      <DatePicker
        sx={{
          "& .MuiButtonBase-root": {
            padding: "0",
            marginRight: "4px",
          },
          "& .MuiInputBase-root": {
            display: "flex",
            width: "120px",
            height: "49px",
            justifyContent: "space-between",
            alignItems: "center",
            flexShrink: "0",

            borderRadius: "30px",
            border: "1px solid #000",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              height: "100%",
              border: "none",
            },
            "& input": {
              padding: "0",
              paddingLeft: "24px",
              color: "#1E1E2D",
              fontFamily: "DM-Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "120%",
            },
            "& input::placeholder": {
              color: "#949494",
              fontFamily: "DM-Sans",
              fontSize: "16px",
              fontStyle: "normal",
              fontWeight: "400",
              lineHeight: "120%",
            },
          },
        }}
        value={selectedDate}
        onChange={handleDateChange}
        slotProps={{
          textField: {
            variant: "outlined",
            placeholder: "Year",
          },
        }}
        slots={{
          openPickerIcon: PickerIcon,
        }}
        label={null}
        views={["year"]}
        maxDate={dayjs()}
      />
    </LocalizationProvider>
  );
};

export default DateFields;
