import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import BoardPage from "./pages/BoardPage/BoardPage";
import AnalyticsPage from "./pages/AnalyticsPage/AnalyticsPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/board" element={<BoardPage/>} />
        <Route path="/analytics" element={<AnalyticsPage/>} />
      </Routes>
    </BrowserRouter>
    // <h1>asdfasdfasd</h1>
  )
}

export default App
