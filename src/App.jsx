import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./Modules/Login/Pages/Login";
import Signup from "./Modules/Signup/Pages/Signup";
import Dashboard from "./Modules/Dashboard/Pages/Dashboard";
import ProtectedRoute from "./Routes/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
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
