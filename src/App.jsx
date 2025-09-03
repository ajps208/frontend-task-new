import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./Modules/Dashboard/Pages/Dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Auth from "./Modules/Auth/Pages/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/auth"/>} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
