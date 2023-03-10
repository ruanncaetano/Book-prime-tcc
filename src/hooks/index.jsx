import React from "react";
import { ToastProvider } from "./toast/index";

const AppProvider = ({ children }) => {
  return <ToastProvider>{children}</ToastProvider>;
};

export default AppProvider;
