import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en";
import dayjs from "dayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useState, useEffect } from "react";

import PickerIcon from "./PickerIcon";
const DateFields = ({ onDateChange, value }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [openDay, setOpenDay] = useState(false);
  const [openMonth, setOpenMonth] = useState(false);
  const [openYear, setOpenYear] = useState(false);

  useEffect(() => {
    setSelectedDate(
      value ? dayjs(`${value.month}-${value.day}-${value.year}`) : null
    );
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    const formatedDate = {
      day: date.$D,
      month: date.$M,
      year: date.$y,
    };
    onDateChange(formatedDate);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
      <DatePicker
        open={openDay}
        onOpen={() => setOpenDay(true)}
        onClose={() => setOpenDay(false)}
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
            placeholder: "Day",
            onClick: () => setOpenDay(true),
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
        open={openMonth}
        onOpen={() => setOpenMonth(true)}
        onClose={() => setOpenMonth(false)}
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
            onClick: () => setOpenMonth(true),
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
        open={openYear}
        onOpen={() => setOpenYear(true)}
        onClose={() => setOpenYear(false)}
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
            onClick: () => setOpenYear(true),
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
