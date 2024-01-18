import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import { yearOptions, monthOptions, dayOptions } from "../../data/options";

export default function InputBirthday({
  text,
  birthday,
  handleBirthdayChange,
}) {
  return (
    <FormControl isRequired>
      <FormLabel htmlFor="birthday">{text}</FormLabel>
      <div style={{ display: "flex", gap: "10px" }}>
        <Select
          id="birthdayYear"
          placeholder="년"
          variant="flushed"
          value={birthday.year}
          onChange={(e) => handleBirthdayChange("year", e.target.value)}
        >
          {yearOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </Select>
        <Select
          id="birthdayMonth"
          variant="flushed"
          placeholder="월"
          value={birthday.month}
          onChange={(e) => handleBirthdayChange("month", e.target.value)}
        >
          {monthOptions.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}{" "}
        </Select>
        <Select
          id="birthdayDay"
          placeholder="일"
          variant="flushed"
          value={birthday.day}
          onChange={(e) => handleBirthdayChange("day", e.target.value)}
        >
          {dayOptions.map((day) => (
            <option key={day} value={day}>
              {day}
            </option>
          ))}{" "}
        </Select>
      </div>
    </FormControl>
  );
}
