import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/landing/Hero";
import Navbar from "../components/landing/Navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
