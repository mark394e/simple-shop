import Basket from "./components/Basket";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <ProductList></ProductList>
      <Basket></Basket>
    </div>
  );
}

export default App;
