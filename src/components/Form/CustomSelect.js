import React from "react";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/core";
import Select from "react-select";

const customStyles = {
  container: provided => ({
    ...provided,
    borderColor: "#e53e3e",
    boxShadow: "0 0 0 1px #e53e3e",
    borderRadius: "0.25rem"
  })
};

const CustomSelect = ({
  error,
  touched,
  options,
  value,
  label,
  name,
  onChange,
  onBlur,
  isMulti,
  required
}) => (
  <FormControl mb={2} isRequired={required} isInvalid={!!error && touched}>
    <FormLabel as="legend">{label}</FormLabel>
    <Select
      styles={!!error && touched ? customStyles : undefined}
      options={options}
      isMulti={isMulti}
      onChange={value => onChange(name, value)}
      onBlur={() => onBlur(name, true)}
      value={value}
    />
    <FormErrorMessage>{error}</FormErrorMessage>
  </FormControl>
);

export default CustomSelect;
