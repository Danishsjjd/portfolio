import React from "react"
import ReactDOM from "react-dom/client"
import { Toaster } from "react-hot-toast"
import { BrowserRouter } from "react-router-dom"

import App from "./App"
import "./assets/style/tailwind.css"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Toaster position="bottom-right" />
    </BrowserRouter>
  </React.StrictMode>
)
