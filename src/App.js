import "./App.css";
import Header from "./components/Header";
import BasicInfo from "./components/BasicInfo";

import ProjectContainer from "./components/ProjectContainer";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BasicInfo />

      <ProjectContainer />
      <Footer />
    </div>
  );
}

export default App;
