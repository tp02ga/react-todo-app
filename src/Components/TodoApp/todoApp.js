import { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";

const TodoApp = () => {
  const firstName = "John";

  // private String name = "Trevor";
  // public String getName () {return name;}
  // public void setName (String name) { this.name = name; }
  const [name, setName] = useState("Trevor");

  useEffect(() => {
    console.log("Hello, my name is", name);
  });

  return (
    <div>
      <Header />
      <div>
        <h1>Hello World</h1>
        <div>
          <label
            htmlFor="name"
            style={{
              marginRight: "1rem",
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <h3>My name is {firstName + " Doe"}</h3>
      </div>
      <Footer />
    </div>
  );
};

function addItem() {
  console.log("Adding item to Todo list");
}

export { addItem };
export default TodoApp;
