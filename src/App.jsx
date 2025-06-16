import { useEffect } from "react";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    async function fetchAPIData() {
      try {
        const response = await fetch("");
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    }
  });
  return (
    <div>
      <Main />
      <Sidebar/>
      <Footer />
    </div>
  );
}

export default App;
