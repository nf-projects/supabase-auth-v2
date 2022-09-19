import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import FeatureA from "../components/landing/FeatureA";
import FeatureB from "../components/landing/FeatureB";
import FeatureC from "../components/landing/FeatureC";
import Footer from "../components/landing/Footer";
import Hero from "../components/landing/Hero";
import Navbar from "../components/landing/Navbar";
import ThreeTierPricing from "../components/landing/Pricing";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureA />
      <FeatureB />
      <FeatureC />
      <ThreeTierPricing />
      <Footer />
    </div>
  );
};

export default Home;
