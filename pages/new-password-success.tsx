import React from 'react'
import Success from '../components/Success'
import SignIn from './signin'

import { useRouter } from "next/router";

import { Button, Center } from "@chakra-ui/react";

const NewPasswordSuccess = () => {
  const router = useRouter();

  const sendToSignIn = async () => {
    router.push("/signin")
  }

  return (
    <div>
      <Success
        heading="Password Reset Successfully"
        text="Click to sign in with your new password!"
      />
      <Center>
        <Button
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={sendToSignIn}
        >
          Sign in
        </Button>
      </Center>
    </div>
  );
}

export default NewPasswordSuccess