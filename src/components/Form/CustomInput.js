import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input
} from "@chakra-ui/core";

const CustomInput = ({
  field,
  form: { touched, errors },
  required,
  ...props
}) => (
  <FormControl
    isRequired={required}
    isInvalid={errors[field.name] && touched[field.name]}
  >
    <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
    <Input type="text" {...field} {...props} />
    <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
  </FormControl>
);

CustomInput.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string
};

export default CustomInput;
