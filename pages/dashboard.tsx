/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../utils/SupabaseClient";
import { User } from "@supabase/supabase-js";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>();
  const [email, setEmail] = useState();

  useEffect(() => {
    const getProfile = () => {
      const profile = supabase.auth.user();

      if (profile) {
        setUser(profile);
      } else {
        router.push("/signin");
      }
    };

    getProfile();
  }, []);

  if (!user) {
    // Currently loading asynchronously User Supabase Information
    return null;
  }

  const handleSignOut = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase.auth.signOut();

    if (error) {
      alert("An error occured while signing out: " + JSON.stringify(error));
    }
    router.push("/");
  };

  return (
    <div>
      <h1>Welcome 👋</h1>
      <p>Your email is {user.email}</p>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;
