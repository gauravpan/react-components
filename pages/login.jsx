import {
  Box,
  Heading,
  Text,
  Image,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function Login() {
  return (
    <>
      <Box d="flex" minH="100vh">
        <Box
          d={{ base: "none", md: "flex" }}
          flexDir="column"
          p="6"
          h="100vh"
          w="50%"
          bg="blue.500"
          color="white"
        >
          <NextLink href="/">
            {/* <Image cursor="pointer" boxSize="14" src="/betalogo.png" /> */}
            <Heading>faceboss</Heading>
          </NextLink>
          <Box
            flexGrow="1"
            d="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Box maxW="sm">
              <Heading py="6">
                Nepal's no.1 <br /> privacy publishing platform
              </Heading>
              <Text pb="6" color="gray.200">
                Currently, there are over 10 million users listed on our
                platform from all over nepal.
              </Text>
              <Button variant="outline" _hover={{ bg: "blue.400" }}>
                Learn More
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          w={{ base: "100%", md: "60%" }}
          d="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box w={{ base: "full", md: "xl" }} px={{ base: "8", md: "16" }}>
            <Heading py="2" color="blue.500">
              Welcome back
            </Heading>
            <Heading size="md" py="2" color="blue.400">
              Sign in to contine
            </Heading>
            <Box mt="10" p="10" bg="white" rounded="md" shadow="md">
              <form>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="email" mt="2">
                  <FormLabel>Password</FormLabel>
                  <Input type="password" />
                </FormControl>
                <Heading color="blue.500" size="xs" mt="6">
                  <Link>Forgot Password?</Link>
                </Heading>
                <Box
                  d="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  pt="6"
                >
                  <Box>
                    New user?
                    <Heading as="span" ml="2" color="blue.500" size="xs" mt="6">
                      <Link>Create account</Link>
                    </Heading>
                  </Box>
                  <Button colorScheme="blue">Sign In</Button>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
