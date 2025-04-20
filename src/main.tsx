import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Routes, Route} from "react-router";
import LoginPage from "./pages/LoginPage.tsx";
import SchedulerPage from "./pages/SchedulerPage.tsx";
import GlobalStyle from "./styles/global.ts";
import StatisticsPage from "./pages/StatisticsPage.tsx";
import MembersPage from "./pages/MembersPage.tsx";
import ChangePage from "./pages/ChangePage.tsx";

createRoot(document.getElementById('root')!).render(
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/schedule"} element={<SchedulerPage />} />
        <Route path={"/statistics"} element={<StatisticsPage />} />
        <Route path={"/members"} element={<MembersPage />} />
        <Route path={"/changes"} element={<ChangePage />} />
      </Routes>
    </BrowserRouter>
  </>
)
