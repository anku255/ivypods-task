import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Radio,
  Box,
  Flex
} from "@chakra-ui/core";

const RadioButton = ({ field, id, label, ...props }) => {
  return (
    <Box pr={4}>
      <Radio {...field} {...props} id={id} value={id}>
        {label}
      </Radio>
    </Box>
  );
};

const RadioButtonGroup = ({ error, touched, label, children }) => {
  return (
    <FormControl mb={2} isInvalid={error && touched}>
      <FormLabel as="legend">{label}</FormLabel>
      <Flex>{children}</Flex>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

export { RadioButton, RadioButtonGroup };
