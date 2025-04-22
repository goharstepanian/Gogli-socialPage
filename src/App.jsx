import { Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage/UsersPage.jsx";
import "./App.css";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Layout from "./components/Layout.jsx";
import ContactPage from "./pages/ContactPage/ContactPage.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contactUs" element={<ContactPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
