import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Center,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { supabase } from "../utils/SupabaseClient";

import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });

    if (error) {
      alert(JSON.stringify(error));
    } else {
      router.push("/dashboard");
    }
  };

  const handleSignInWithGithub = async (e: React.FormEvent) => {
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

  const handleSignInWithGoogle = async (e: React.FormEvent) => {
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
          <Heading fontSize={"4xl"}>Sign In To Your Account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features 😎
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={-10}>
            <Center p={8}>
              <Button
                w={"full"}
                maxW={"md"}
                variant={"outline"}
                leftIcon={<FcGoogle />}
                onClick={handleSignInWithGoogle}
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
                onClick={handleSignInWithGithub}
              >
                <Center>
                  <Text>Sign in with Github</Text>
                </Center>
              </Button>
            </Center>
          </Stack>

          <hr></hr>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleSignIn}
              >
                Sign in
              </Button>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link color={"blue.400"}>Forgot password?</Link>
                <Link href="/signup"color={"blue.400"}>No account yet?</Link>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
