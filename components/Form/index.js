import React, { useState } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  VStack,
  Select,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export default function Form({ fields, onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  let formElements = [];

  function onSubmitButtonClick(values) {
    setLoading(true);
    onSubmit(values, setLoading);
  }

  fields.map((field) => {
    let {
      name = "",
      type = "text",
      label = "",
      validation = {},
      options = [],
    } = field;

    if (type === "select" || options[0]) {
      formElements.push(
        <FormControl isInvalid={errors[name]}>
          <FormLabel>{label} </FormLabel>
          <Select
            placeholder={`select ${name}`}
            {...register(name, validation)}
          >
            {options?.map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{errors[name]?.message} </FormErrorMessage>
        </FormControl>
      );
      return;
    }

    formElements.push(
      <FormControl isInvalid={errors[name]}>
        <FormLabel>{label} </FormLabel>
        <Input
          type={type}
          name={name}
          {...register(name, validation)}
          autoComplete="off"
        />
        <FormErrorMessage>{errors[name]?.message} </FormErrorMessage>
      </FormControl>
    );
  });

  return (
    <form onSubmit={handleSubmit(onSubmitButtonClick)}>
      <VStack spacing={4}>
        {formElements.map((Field, index) =>
          React.cloneElement(Field, { key: `input-${index}` })
        )}
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={loading}
          loadingText="Submitting"
          alignSelf="start"
        >
          Submit
        </Button>
      </VStack>
    </form>
  );
}
