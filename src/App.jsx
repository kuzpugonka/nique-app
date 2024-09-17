import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import data from "./data/data.json";

function App() {

 

  return (
    <>
      <Header />
      <Main data={data} />
    <Footer />
      
    </>
  );
}

export default App;
