import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import ProductList from "./Container/ProductList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;
