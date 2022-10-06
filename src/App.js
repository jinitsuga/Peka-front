import "./App.css";
import Login from "./Login/Login";
import RouteSwitch from "./Router/RouteSwitch";

function App() {
  return (
    <div className="App">
      <RouteSwitch loggedIn={false}></RouteSwitch>
    </div>
  );
}

export default App;
