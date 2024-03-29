import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  InputLeftAddon,
  InputGroup
} from "@chakra-ui/core";

function isValidPhoneNumber(number) {
  const isEmpty = number.length === 0;
  const hasLenghtGreaterThanTen = number.length > 10;
  const isNumeric = !isNaN(number);

  return isEmpty ? true : hasLenghtGreaterThanTen ? false : isNumeric;
}

const PhoneNumberInput = ({
  field,
  form: { touched, errors, setFieldValue },
  required,
  ...props
}) => (
  <FormControl
    isRequired={required}
    isInvalid={errors[field.name] && touched[field.name]}
  >
    <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
    <InputGroup>
      <InputLeftAddon children="+91" />
      <Input
        type="phone"
        {...field}
        {...props}
        onChange={({ target: { value } }) => {
          if (isValidPhoneNumber(value)) setFieldValue(field.name, value);
        }}
      />
    </InputGroup>
    <FormErrorMessage mt={0}>{errors[field.name]}</FormErrorMessage>
  </FormControl>
);

PhoneNumberInput.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string
};
export default PhoneNumberInput;
