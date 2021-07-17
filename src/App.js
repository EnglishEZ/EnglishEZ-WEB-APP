import "./App.css";
import Client from "./Components/Client/index";
import Header from './Components/Header/index';
import Functions from './Components/Functions/index';
import Intro from './Components/Intro/index';
import Footer from "./Components/Footer/index";
function App() {
  return (
    <div id="body">
      <Header />
      <Client />
      <Functions />
      <Intro />
      <Footer/>
    </div>
  );
}

export default App;
