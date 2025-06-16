import { useEffect, useState } from "react";
import Main from "./components/Main";
import Tab from "./components/Tab"; // Fix: Ensure the case matches the file name
import Footer from "./components/Footer";

function App() {
  // State variables to manage data and loading state
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Function to toggle the modal visibility
  const handleToggleModal = () => {
    setShowModal(!showModal);
  };
  // Fetch data from the API
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      const today = new Date().toDateString().replace(/\s/g, "-");
      const localKey = `NASA-${today}`;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        console.log("Data fetched from localStorage:", apiData);
        return null;
      }
      localStorage.clear();
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        console.log("Data fetched from API:", apiData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchAPIData();
  }, []);
  return (
    <>
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (
        <Tab
          data={data}
          handleToggleModal={handleToggleModal}
          showModal={showModal}
        />
      )}

      {data && <Footer data={data} handleToggleModal={handleToggleModal} />}
    </>
  );
}

export default App;
