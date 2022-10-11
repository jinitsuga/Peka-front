import "./App.css";
import RouteSwitch from "./Router/RouteSwitch";

function App() {
  return (
    <div className="App">
      <RouteSwitch loggedIn={false}></RouteSwitch>
    </div>
  );
}

export default App;
