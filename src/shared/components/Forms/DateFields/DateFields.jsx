import styles from "./dateFields.module.scss";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useState } from "react";

import PickerIcon from "./PickerIcon";

const DateFields = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // console.log(selectedDate);
  return (
    <LocalizationProvider
      // className={styles.dateField}
      dateAdapter={AdapterDayjs}
      adapterLocale="en"
    >
      <DatePicker
        sx={{
          "& .MuiInputBase-root": {
            height: "49px",
            // color: "red",
          },

          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              display: "flex",
              // width: "120px",
              height: "49px",
              // padding: "0px 24px",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: "0",

              borderRadius: "30px",
              border: "1px solid #000",
            },
            "& input": {
              // padding: "0",
              // paddingTop: "auto",
              // paddingBottom: "auto",
              // color: "red",
              color: "#1E1E2D",
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
          },
        }}
        slots={{
          openPickerIcon: PickerIcon,
        }}
        label={"Day"}
        views={["day"]}
        maxDate={dayjs()}
      />
      <DatePicker
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              display: "flex",
              // width: "120px",
              height: "49px",
              padding: "0px 24px",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: "0",

              borderRadius: "30px",
              border: "1px solid #000",
            },
            "& input": {
              fontSize: "16px",
              color: "#888888",
              padding: "0",
            },
          },
        }}
        value={selectedDate}
        onChange={handleDateChange}
        slotProps={{
          textField: { variant: "outlined" },
        }}
        slots={{
          openPickerIcon: PickerIcon,
        }}
        label={"Month"}
        views={["month"]}
        maxDate={dayjs()}
      />
      <DatePicker
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              display: "flex",
              // width: "120px",
              height: "49px",
              padding: "0px 24px",
              justifyContent: "space-between",
              alignItems: "center",
              flexShrink: "0",

              borderRadius: "30px",
              border: "1px solid #000",
            },
            "& input": {
              fontSize: "16px",
              color: "#888888",
              padding: "0",
            },
          },
        }}
        // MuiFormControl-root
        value={selectedDate}
        onChange={handleDateChange}
        slotProps={{ textField: { variant: "outlined" } }}
        slots={{
          openPickerIcon: PickerIcon,
        }}
        label={"Year"}
        views={["year"]}
        maxDate={dayjs()}
      />
    </LocalizationProvider>
  );
};

export default DateFields;
