import React from 'react'
import Success from '../components/Success'
import SignIn from './signin'

const NewPasswordSuccess = () => {
  return (
    <div>
        <Success
         heading="Password Reset Successfully"
         text="Sign in with your new password:"
         />
         <SignIn />
    </div>
  )
}

export default NewPasswordSuccess