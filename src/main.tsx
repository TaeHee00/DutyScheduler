import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Routes, Route} from "react-router";
import LoginPage from "./pages/LoginPage.tsx";
import SchedulerPage from "./pages/SchedulerPage.tsx";
import GlobalStyle from "./styles/global.ts";
import StatisticsPage from "./pages/StatisticsPage.tsx";
import MembersPage from "./pages/MembersPage.tsx";
import ChangePage from "./pages/ChangePage.tsx";
import {ProtectedRoute} from "./components/ProtectedRoute.tsx";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import GroupsPage from "./pages/GroupsPage.tsx";
import {ModalProvider} from "@lasbe/react-modal";
import {ToastContainer} from "react-toastify";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <>
    <QueryClientProvider client={queryClient}>
      <ModalProvider>
        <GlobalStyle/>
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<App/>}/>
            <Route path={"/login"} element={<LoginPage/>}/>
            <Route
              path={"/schedule"}
              element={
                <ProtectedRoute>
                  <SchedulerPage/>
                </ProtectedRoute>
              }
            />
            <Route
              path={"/statistics"}
              element={
                <ProtectedRoute>
                  <StatisticsPage/>
                </ProtectedRoute>
              }
            />
            <Route
              path={"/groups"}
              element={
                <ProtectedRoute>
                  <GroupsPage/>
                </ProtectedRoute>
              }
            />
            <Route
              path={"/members"}
              element={
                <ProtectedRoute>
                  <MembersPage/>
                </ProtectedRoute>
              }
            />
            <Route
              path={"/changes"}
              element={
                <ProtectedRoute>
                  <ChangePage/>
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </ModalProvider>
    </QueryClientProvider>
  </>
)
