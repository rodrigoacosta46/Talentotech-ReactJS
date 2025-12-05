import Navbar from "../components/Navbar/Navbar.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router";
import { AppContextProvider } from "../Context/AppContext.jsx";

export default function AuthUserLayout() {
  return (
    <AppContextProvider>
      <Navbar />
        <main className="flex-grow-1">
          <Outlet />
        </main>
      <Footer />
    </AppContextProvider>
  )
}
