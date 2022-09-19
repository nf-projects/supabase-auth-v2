import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { supabase } from "../utils/SupabaseClient.js";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Test</h1>
      <h2>Hi</h2>
    </div>
  );
};

export default Home;
