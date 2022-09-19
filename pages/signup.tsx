import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Center,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";

import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

import { supabase } from "../utils/SupabaseClient";

import { useRouter } from "next/router";
import { useState } from "react";

export default function SignUp() {
  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/confirm-email");
    }
  };
  

  const handleSubmitWithGitHub = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn(
      {
        provider: "github",
      },
      {
        redirectTo: "http://localhost:3000/callback/",
      }
    );

    if (error) {
      alert(JSON.stringify(error));
    }
  };

  const handleSubmitWithGoogle = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn(
      {
        provider: "google",
      },
      {
        redirectTo: "http://localhost:3000/callback/",
      }
    );

    if (error) {
      alert(JSON.stringify(error));
    }
  };  

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Welcome!
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Sign up to get started 👏
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Stack spacing={-10}>
            <Center p={8}>
              <Button
                w={"full"}
                maxW={"md"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
                onClick={handleSubmitWithGoogle}
              >
                <Center>
                  <Text>Sign in with Google</Text>
                </Center>
              </Button>              
            </Center>
            <Center p={8}>
              <Button
                w={"full"}
                maxW={"md"}
                variant={"outline"}
                leftIcon={<BsGithub />}
                onClick={handleSubmitWithGitHub}
              >
                <Center>
                  <Text>Sign in with Github</Text>
                </Center>
              </Button>              
            </Center>            
            </Stack>

            <hr></hr>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                bgGradient="linear(to-r, red.400,pink.400)"
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSubmit}
              >
                Sign Up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"} >
                Already a user? <Link href="/signin" color={"blue.400"}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
