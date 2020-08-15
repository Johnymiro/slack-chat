import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PageLayout from "./Layout";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <PageLayout>{children}</PageLayout>
      <Footer />
    </>
  );
}
