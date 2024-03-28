import "./App.css";
import DemoComponent from "./components/DemoComponent";

const App = () => {
  return (
    <div>
      <p>hello</p>
      <DemoComponent title="title"></DemoComponent>
      <DemoComponent>
        <p>mon super texte trop bien</p>
      </DemoComponent>
    </div>
  );
};

export default App;
