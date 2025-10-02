import { useSelector } from "react-redux";
import DisplayItems from "../src/Components/DisplayItems";
import FetchStatus from "../src/Components/FetchStatus";

function Home() {
  let fetchStatus = useSelector((state) => state.fetch.fetchDone);
  return (
    <>
      <main>
        <DisplayItems></DisplayItems>
      </main>
    </>
  );
}

export default Home;
