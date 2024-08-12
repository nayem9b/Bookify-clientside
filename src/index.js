import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import UserContext from "./Components/Context/UserContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MessengerCustomerChat from "react-messenger-customer-chat";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MessengerCustomerChat pageId="300738343129478" appId="3616949075283071" />
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <App />
      </UserContext>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
