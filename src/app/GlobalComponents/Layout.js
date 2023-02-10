import React from "react";
import CreateAdd from "../../features/addCreator/components/CreateAdd";
import Dashboard from "../../features/DashBoard/components/Dashboard";
import Header from "./Header";
export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
