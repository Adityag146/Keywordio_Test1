import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Grid from "@mui/material/Grid";
import AdTable from "../src/app/GlobalComponents/Table";
import Header from "../src/app/GlobalComponents/Header";
import TextAddForm from "../src/features/addCreator/components/TextAddForm";
import MediaAddForm from "../src/features/addCreator/components/MediaAddForm";
import Layout from "../src/app/GlobalComponents/Layout";
import SubmitPopUp from "./app/GlobalComponents/SubmitPopUp";
import CreateAdd from "./features/addCreator/components/CreateAdd";
import Dashboard from "./features/DashBoard/components/Dashboard";
function App() {
  return (
    <div className="App" style={{ margin: "20px" }}>
      <Layout />
    </div>
  );
}

export default App;
