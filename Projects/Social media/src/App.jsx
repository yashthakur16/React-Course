import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import PostList from "../components/PostList";
import { useState } from "react";
import PostDataProvider from "../store/post-data";

function App() {
  let [tab, setTab] = useState("home");

  let handleTabChange = (newTab) => {
    setTab(newTab);
  };
  return (
    <PostDataProvider>
      <div className="content-container">
        <SideBar handleTabChange={handleTabChange} tab={tab} />
        <div className="content">
          <Header />
          {tab === "home" ? <PostList /> : <Form />}
          <Footer />
        </div>
      </div>
    </PostDataProvider>
  );
}

export default App;
