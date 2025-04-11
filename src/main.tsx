import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Routes, Route} from "react-router";
import LoginPage from "./pages/LoginPage.tsx";
import SchedulerPage from "./pages/SchedulerPage.tsx";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<App />} />
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/schedule"} element={<SchedulerPage />} />
    </Routes>
  </BrowserRouter>
)
