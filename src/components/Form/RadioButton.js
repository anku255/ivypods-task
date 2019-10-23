import React from "react";
import PropTypes from "prop-types";
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

RadioButton.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};

const RadioButtonGroup = ({ error, touched, label, children, required }) => {
  return (
    <FormControl mb={2} isRequired={required} isInvalid={error && touched}>
      <FormLabel as="legend">{label}</FormLabel>
      <Flex>{children}</Flex>
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};

RadioButtonGroup.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string
};

export { RadioButton, RadioButtonGroup };
