import { useEffect, useContext } from "react";
import AppContext from "./context/AppProvider.jsx";
import { User } from "./utils/User.js";
import UserModal from "./components/modal/UserModal.jsx";
import Header from "./components/Header.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const { user, setUser } = useContext(AppContext);
  return (
    <>
      {!user && <UserModal />}

      <Header />
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
