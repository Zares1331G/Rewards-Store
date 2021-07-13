import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import UserProvider from "./context/UserContext";
import "./styles.css";

export default function App() {
  return (
    <UserProvider>
      <Header />
      <Jumbotron />
    </UserProvider>
  );
}
