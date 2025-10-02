import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";
import { Outlet } from "react-router-dom";
import FetchStatus from "../src/Components/FetchStatus";
import FetchItems from "../src/Components/FetchItems";
import { useSelector } from "react-redux";

function App() {
  let fetchStatus = useSelector((state) => state.fetch.fetchDone);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      {fetchStatus ? <Outlet></Outlet> : <FetchStatus />}

      <Footer></Footer>
    </>
  );
}

export default App;
