import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input
} from "@chakra-ui/core";

const CustomInput = ({ field, form: { touched, errors }, ...props }) => (
  <FormControl isInvalid={errors[field.name] && touched[field.name]}>
    <FormLabel htmlFor={field.name}>{props.label}</FormLabel>
    <Input type="text" {...field} {...props} />
    <FormErrorMessage>{errors[field.name]}</FormErrorMessage>
  </FormControl>
);

export default CustomInput;
