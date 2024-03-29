import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/core";
import PlacesAutocomplete from "react-places-autocomplete";
import Select from "react-select";

function getSelectOptions(suggestions) {
  return suggestions.map(({ description }) => ({
    label: description,
    value: description
  }));
}

const customStyles = {
  container: provided => ({
    ...provided,
    borderColor: "#e53e3e",
    boxShadow: "0 0 0 1px #e53e3e",
    borderRadius: "0.25rem"
  })
};

export default class PlacesSelect extends React.Component {
  state = { inputValue: "" };

  handleChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    const {
      error,
      touched,
      value,
      label,
      name,
      onChange,
      onBlur,
      required
    } = this.props;
    return (
      <FormControl isRequired={required} isInvalid={!!error && touched}>
        <FormLabel as="legend">{label}</FormLabel>
        <PlacesAutocomplete
          value={this.state.inputValue}
          onChange={this.handleChange}
        >
          {({ getInputProps, suggestions, loading }) => (
            <Select
              styles={!!error && touched ? customStyles : undefined}
              placeholder="Type your city name..."
              isClearable
              isLoading={loading}
              onInputChange={value =>
                getInputProps().onChange({ target: { value } })
              }
              value={value}
              onChange={value => onChange(name, value)}
              onBlur={() => onBlur(name, true)}
              options={getSelectOptions(suggestions)}
            />
          )}
        </PlacesAutocomplete>
        <FormErrorMessage>{error && "Required"}</FormErrorMessage>
      </FormControl>
    );
  }
}

PlacesAutocomplete.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.array
};
