import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { AuthContextProvider } from "./context/Authcontext";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import Accounts from "./pages/Accounts";

function App() {
  return (
    <>
    <AuthContextProvider>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Accounts />} />
      </Routes>
    </AuthContextProvider>
 
    </>
  );
};

export default App;
