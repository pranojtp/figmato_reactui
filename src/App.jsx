
// import './App.css'
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import FilesPage from "./pages/FilesPage";

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
    </div>
  );
}

export default App;
