import { useState } from "react";
import { ChakraProvider, Container, Textarea, Heading } from "@chakra-ui/react";
import { Global, jsx } from "@emotion/react";
import { Form } from "../components";
const initialFields = [
  {
    name: "name",
    label: "Name",
    validation: { required: "Name is required!" },
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validation: { required: "Email is required!" },
  },
  {
    name: "account",
    label: "Account type",
    type: "select",
    options: ["Teacher", "Student", "Parents"],
    validation: { required: "Account type is required!" },
  },
];

export default function Home() {
  const [fields, setFields] = useState(initialFields);
  function onSubmit(values, setLoading) {
    console.log(values);
  }

  return (
    <ChakraProvider>
      <Global
        styles={{ body: { backgroundColor: "var(--chakra-colors-gray-50)" } }}
      />

      <Container shadow="md" mt={12} padding={4} rounded="lg" bg="white">
        <Form fields={fields} onSubmit={onSubmit} />
      </Container>
      <Container shadow="md" mt={12} padding={4} rounded="lg" bg="white">
        <Heading as="h5" size="sm" py={4}>
          Above Form was generated from this array below.
        </Heading>

        <Textarea
          rows={20}
          value={JSON.stringify(fields, null, 2)}
          readOnly
        ></Textarea>
        <p className="py-4">
          It has validation as well. It uses react-hook-form for validation.
        </p>
        <a
          className="underline text-blue-700"
          href="https://github.com/gauravpan/react-components"
        >
          Github
        </a>
      </Container>
    </ChakraProvider>
  );
}
