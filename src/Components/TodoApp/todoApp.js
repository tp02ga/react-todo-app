import Footer from "../Footer/footer";
import Header from "../Header/header";

const TodoApp = () => {
  const firstName = "John";

  
  return (
    <div>
      <Header />
      <div>
        <h1>Hello World</h1>
        <h3>My name is {firstName + " Doe"}</h3>
      </div>
      <Footer />
    </div>
  );
};

export default TodoApp;
