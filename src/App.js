import "./App.css";
import { Button } from "react-bootstrap";

function simulateReq() {
  return new Promise((resolve) => setTimeout(resolve, 3000));
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button as="input" type="reset" value="Reset" />
      </header>
    </div>
  );
}

export default App;
