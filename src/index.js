import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { store } from "./app/GlobalComponents/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateAdd from "./features/addCreator/components/CreateAdd";
import Layout from "./app/GlobalComponents/Layout";
import Dashboard from "./features/DashBoard/components/Dashboard";
import TextAddForm from "./features/addCreator/components/TextAddForm";
import MediaAddForm from "./features/addCreator/components/MediaAddForm";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Dashboard />
              </Layout>
            }
          />
          <Route
            path="/create-add"
            element={
              <Layout>
                <CreateAdd />
              </Layout>
            }
          />
          <Route
            path="/textAddForm"
            element={
              <Layout>
                <TextAddForm />
              </Layout>
            }
          />
          <Route
            path="/mediaAddForm"
            element={
              <Layout>
                <MediaAddForm />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
