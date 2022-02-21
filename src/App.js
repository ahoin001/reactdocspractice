import "./App.css";
import ButtonContainer from "./components/ButtonContainer";
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonContainer buttonText="I'm A Button Component!" />
        <Profile/>
      </header>
    </div>
  );
}

export default App;
