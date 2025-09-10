import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "../components/Heading";
import Form from "../components/form";
import Task from "../components/task";
import Message from "../components/WelcomeMessage";
import { ToDoItemsprovider } from "./store/to-do-items";

function App() {
  return (
    <>
      <ToDoItemsprovider>
        <Heading></Heading>
        <Form></Form>
        <Message></Message>
        <Task></Task>
      </ToDoItemsprovider>
    </>
  );
}

export default App;
