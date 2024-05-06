import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Students from "./pages/Students";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen w-screen">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/students" element={<Students />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
