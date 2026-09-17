import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import TechnologiesSection from "./components/technologies/TechnologiesSection";
import type { ITechnology } from "./types/technology";


function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const res = await fetch("/technologies.json");
        const data = await res.json();
        setTechnologies(data);
      } catch (error) {
        console.log(error, "error fetching technologies");
      }finally {
      setIsLoading(false);
    }
    };
    fetchTechnologies();
  }, []);


  return (
    <>
      <Nav />
      <Banner />

      {isLoading ? (
        <div className="flex justify-center items-center min-h-[300px]">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      ) : (
        <TechnologiesSection technologies={technologies} />
      )}

      <Footer />
    </>
  );
}

export default App;
