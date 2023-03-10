import React, { createContext, useCallback, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { ToastContainer } from "react-bootstrap";
const ToastContext = createContext({});

const ToastProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);

  const addToast = useCallback(({ message, title, type }) => {
    const id = uuidv4();
    const toast = {
      id,
      message,
      title,
      type,
      time: Date.now()
    };
    setMessages((state) => [...state, toast]);
    console.log("add toast", message, title, type);
  }, []);

  const removeToast = useCallback((id) => {
    setMessages((state) => state.filter((message) => message.id !== id));
    // console.log("remove toast - ", id);
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer messages={messages} />
      {children}
    </ToastContext.Provider>
  );
};

function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be uses within a ToastProvider");
  }
  return context;
}

export { ToastProvider, useToast };
