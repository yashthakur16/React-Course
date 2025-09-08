import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Heading from "../components/heading";
import Time from "../components/time";

function App() {
  return (
    <div className="container">
      <Heading></Heading>
      <Time></Time>
    </div>
  );
}

export default App;
