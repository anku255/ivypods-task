import React from "react";
import PropTypes from "prop-types";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { Stack, Button, Box, Heading } from "@chakra-ui/core";
import {
  CustomInput,
  PhoneNumberInput,
  RadioButtonGroup,
  RadioButton,
  CheckboxGroup,
  Checkbox,
  CustomSelect,
  DOBField,
  PlacesSelect
} from "../../components/Form";

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required"),
  mobile: Yup.string().required("Required"),
  gender: Yup.string().required("Required!"),
  languages: Yup.array()
    .min(1, "Pick at least 1 language")
    .of(
      Yup.object().shape({
        label: Yup.string().required(),
        value: Yup.string().required()
      })
    )
    .nullable(),
  dob: Yup.object()
    .shape({
      day: Yup.string().required(),
      month: Yup.string().required(),
      year: Yup.string().required()
    })
    .required("Required"),
  address: Yup.object()
    .shape({
      label: Yup.string().required(),
      value: Yup.string().required()
    })
    .required("Required")
});

const languageOptions = [
  { value: "English", label: "English" },
  { value: "French", label: "French" },
  { value: "Japanese", label: "Japanese" }
];

const dobOptions = {
  days: [{ label: "1", value: "01" }, { label: "2", value: "2" }],
  months: [{ label: "Jan", value: "01" }, { label: "Feb", value: "02" }],
  years: [{ label: "2018", value: "2018" }, { label: "2007", value: "2007" }]
};

const initialValues = {
  name: "ank",
  mobile: "987",
  gender: "male",
  hobbies: [],
  languages: [{ label: "English", value: "English" }],
  dob: {
    day: { label: "1", value: "1" },
    month: { label: "Feb", value: "Feb" },
    year: { label: "2017", value: "2017" }
  },
  address: { label: "RAnchi", value: "RAnchi" }
};

const UserForm = ({ handleSubmit }) => {
  return (
    <Box
      maxWidth={1000}
      ml="auto"
      mr="auto"
      borderWidth="1px"
      p={6}
      pt={2}
      pb={2}
      rounded="lg"
      overflow="hidden"
    >
      <Heading mb={4} as="h1" size="xl" textAlign="center">
        Registration Form
      </Heading>
      <Formik
        initialValues={initialValues}
        validationSchema={UserSchema}
        onSubmit={(values, { setSubmitting }) => {
          const payload = {
            ...values,
            languages: values.languages.map(t => t.value),
            dob: `${values.dob.day.value}/${values.dob.month.value}/${values.dob.year.value}`,
            address: values.address.value
          };

          console.log("payload", payload);

          setTimeout(() => {
            handleSubmit(payload);
            setSubmitting(false);
          }, 1000);
        }}
        render={({
          isSubmitting,
          values,
          touched,
          errors,
          setFieldValue,
          setFieldTouched
        }) => (
          <Form>
            <Stack spacing={3}>
              <Field
                required
                name="name"
                label="Name"
                placeholder="John Doe"
                component={CustomInput}
              />
              <Field
                required
                name="mobile"
                label="Mobile No"
                component={PhoneNumberInput}
              />
              <RadioButtonGroup
                id="gender"
                label="Gender"
                value={values.gender}
                error={errors.gender}
                touched={touched.gender}
                required
              >
                <Field
                  component={RadioButton}
                  name="gender"
                  id="male"
                  label="Male"
                />
                <Field
                  component={RadioButton}
                  name="gender"
                  id="female"
                  label="Female"
                />
                <Field
                  component={RadioButton}
                  name="gender"
                  id="other"
                  label="Other"
                />
              </RadioButtonGroup>
              <CheckboxGroup
                id="hobbies"
                label="Hobbies"
                value={values.hobbies}
                error={errors.hobbies}
                touched={touched.hobbies}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
              >
                <Field
                  component={Checkbox}
                  name="hobbies"
                  id="writing"
                  label="Writing"
                />
                <Field
                  component={Checkbox}
                  name="hobbies"
                  id="cooking"
                  label="Cooking"
                />
                <Field
                  component={Checkbox}
                  name="hobbies"
                  id="painting"
                  label="Painting"
                />
              </CheckboxGroup>
              <CustomSelect
                isMulti
                name="languages"
                label="Select Languages"
                options={languageOptions}
                value={values.languages}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.languages}
                touched={touched.languages}
                required
              />
              <DOBField
                name="dob"
                label="Date of Birth"
                options={dobOptions}
                value={values.dob}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.dob}
                touched={touched.dob}
                required
              />
              <PlacesSelect
                name="address"
                label="Address"
                value={values.address}
                onChange={setFieldValue}
                onBlur={setFieldTouched}
                error={errors.address}
                touched={touched.address}
                required
              />
            </Stack>

            <Button
              mt={4}
              variantColor="teal"
              isLoading={isSubmitting}
              type="submit"
            >
              Submit
            </Button>
            <div>{JSON.stringify(values, null, 2)}</div>
          </Form>
        )}
      />
    </Box>
  );
};

export default UserForm;

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};
