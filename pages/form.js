import { ChakraProvider, Container } from "@chakra-ui/react";
import { Global } from "@emotion/react";
import { Form } from "../components";

export default function Home() {
  function onSubmit(values, setLoading) {
    console.log(values);
  }
  return (
    <ChakraProvider>
      <Global
        styles={{ body: { backgroundColor: "var(--chakra-colors-gray-50)" } }}
      />
      <Container shadow="md" mt={12} padding={4} rounded="lg" bg="white">
        <Form
          fields={[
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
          ]}
          onSubmit={onSubmit}
        />
      </Container>
    </ChakraProvider>
  );
}
