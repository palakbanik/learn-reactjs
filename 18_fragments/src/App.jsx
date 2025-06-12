import FoodItems from "./components/FoodItems";

const App = () => {
  const foodItems = ["Dal", "Green Vegetable", "Fruits", "Salad", "Milk"];
  foodItems.push("Banana", "Meat");
  //   const foodItems = [];

  return (
    <>
      <h1>Healthy Food's Name</h1>

      <FoodItems items={foodItems} />
    </>
  );
};
export default App;
