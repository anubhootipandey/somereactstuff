import "./App.css";
import Card from "./components/Card";

function App() {
  // let myObj = {
  //   username: "anu",
  //   age: 20
  // }
  // let newArr = [1, 2, 3]

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      {/* <Card channel="chaiaurcode" myObj={myObj} newArr={newArr} /> */}
      <Card username="Anu" btnText="visit me" />
      <Card />
    </>
  );
}

export default App;
