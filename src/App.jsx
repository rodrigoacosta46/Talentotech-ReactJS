import Home from "./Pages/Home.jsx";
import UserContextProvider from "./Context/UserContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import AuthUserLayout from "./Layouts/AuthUserLayout.jsx";
import LoginLayout from "./Layouts/LoginLayout.jsx";
import Store from "./Pages/Store.jsx";
import ProtectedRoute from "./utilities/ProtectedRoute.jsx";
import { HelmetProvider } from "react-helmet-async";
import About from "./Pages/About.jsx";

function App() {
  const auth = localStorage.getItem("authToken");

  return (
    <HelmetProvider>
      <Router>
        <UserContextProvider>
          <Routes>
            <Route path="/" element={<AuthUserLayout />}>
              <Route index element={<Home />} />
              <Route path="store" element={<Store />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route path="/login" element={
              <ProtectedRoute condition={auth} send="/">
                <LoginLayout />
              </ProtectedRoute>
            } />
          </Routes>
        </UserContextProvider>
      </Router>
    </HelmetProvider>
  );
}

export default App;
