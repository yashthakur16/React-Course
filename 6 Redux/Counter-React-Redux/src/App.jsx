import Heading from "./components/Heading";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import Card from "./components/Card";
import Controls from "./components/Controls";
import Privacy from "./components/Privacy";
import { useSelector } from "react-redux";

function App() {
  let isPrivate = useSelector((store) => store.privacy);
  return (
    <>
      <Card>
        <Heading></Heading>
        {isPrivate ? <DisplayCounter></DisplayCounter> : <Privacy></Privacy>}

        <Controls></Controls>
      </Card>
    </>
  );
}

export default App;
