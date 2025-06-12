const App = () => {
  const foodItems = ["Dal", "Green Vegetable", "Fruits", "Salad", "Milk"];
  foodItems.push("Banana", "Meat");

  //   const foodItems = [];
  const emptyMessage =
    foodItems.length === 0 ? <h6>I'm still hungry.</h6> : null;

  return (
    <>
      <h1>Healthy Food's Name</h1>
      {emptyMessage}
      <ul className="list-group">
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
