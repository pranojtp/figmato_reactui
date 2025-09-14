
// import './App.css'
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import FilesPage from "./pages/FilesPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/files" element={<FilesPage/>}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer position="top-center" autoClose={1500} hideProgressBar={false} theme="dark"/>
    </div>
  );
}

export default App;
