import GroceryItem from './GroceryItem'

function App() {
  function itemAddToCart(item) {
    alert(`${item} added to cart!`);
  }

    return (
    <div>
      <GroceryItem
        name="Eggs"
        onClick={() => itemAddToCart('Eggs')}
      />

      <GroceryItem
        name="Banana"
        onClick={() => itemAddToCart('Banana')}
      />

      <GroceryItem
        name="Strawberry"
        onClick={() => itemAddToCart('Strawberry')}
      />

      <GroceryItem
        name="Bread"
        onClick={() => itemAddToCart('Bread')}
      />
    </div>
  );
}

export default App;