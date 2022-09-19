import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { supabase } from "../utils/SupabaseClient";
import { User } from "@supabase/supabase-js";

const Dashboard = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>();

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

  return <div>dashboard</div>;
};

export default Dashboard;
