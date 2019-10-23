import React from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Checkbox,
  Flex,
  Box
} from "@chakra-ui/core";

const CustomCheckbox = ({ field, id, label, ...props }) => {
  return (
    <Box pr={4}>
      <Checkbox {...field} {...props} id={id} value={id}>
        {label}
      </Checkbox>
    </Box>
  );
};

CustomCheckbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string
};

// Checkbox group
class CustomCheckboxGroup extends React.Component {
  handleChange = event => {
    const target = event.currentTarget;
    let valueArray = [...this.props.value] || [];

    if (target.checked) {
      valueArray.push(target.id);
    } else {
      valueArray.splice(valueArray.indexOf(target.id), 1);
    }

    this.props.onChange(this.props.id, valueArray);
  };

  handleBlur = () => {
    // take care of touched
    this.props.onBlur(this.props.id, true);
  };

  render() {
    const { value, error, touched, label, children } = this.props;
    return (
      <FormControl mb={2} isInvalid={error && touched}>
        <FormLabel as="legend">{label}</FormLabel>
        <Flex>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              field: {
                value: value.includes(child.props.id),
                onChange: this.handleChange,
                onBlur: this.handleBlur
              }
            });
          })}
        </Flex>
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
    );
  }
}

CustomCheckboxGroup.propTypes = {
  value: PropTypes.array,
  error: PropTypes.string,
  touched: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node
};

export { CustomCheckbox as Checkbox, CustomCheckboxGroup as CheckboxGroup };
