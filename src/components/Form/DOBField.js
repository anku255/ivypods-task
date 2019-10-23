import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Grid,
  Box
} from "@chakra-ui/core";
import Select from "react-select";

const customStyles = {
  container: provided => ({
    ...provided,
    borderColor: "#e53e3e",
    boxShadow: "0 0 0 1px #e53e3e",
    borderRadius: "0.25rem"
  })
};

const DOBField = ({
  error,
  touched,
  options,
  value,
  label,
  name,
  onChange,
  onBlur
}) => (
  <FormControl mb={2} isInvalid={!!error && touched}>
    <FormLabel as="legend">{label}</FormLabel>
    <Grid templateColumns="repeat(3, 1fr)" gap={6}>
      <Box w="100%">
        <Select
          styles={!!error && touched && !value.day ? customStyles : undefined}
          placeholder="Day"
          options={options.days}
          onChange={value => onChange(`${name}.day`, value)}
          onBlur={() => onBlur(`${name}.day`, true)}
          value={value.day}
        />
      </Box>
      <Box w="100%">
        <Select
          styles={!!error && touched && value.day ? customStyles : undefined}
          isDisabled={!value.day}
          placeholder="Month"
          options={options.months}
          onChange={value => onChange(`${name}.month`, value)}
          onBlur={() => onBlur(`${name}.month`, true)}
          value={value.month}
        />
      </Box>
      <Box w="100%">
        <Select
          styles={
            !!error && touched && value.day && value.month
              ? customStyles
              : undefined
          }
          isDisabled={!value.day || !value.month}
          placeholder="Year"
          options={options.years}
          onChange={value => onChange(`${name}.year`, value)}
          onBlur={() => onBlur(`${name}.year`, true)}
          value={value.year}
        />
      </Box>
    </Grid>

    <FormErrorMessage>{error && "Required"}</FormErrorMessage>
  </FormControl>
);

export default DOBField;
