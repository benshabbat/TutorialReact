import Header from "./components/Header";
import Food from "./components/Food";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Button from "./components/button/Button";
import UserGreeting from "./components/UserGreeting";
function App() {
  return (
    <>
      {/* <Button /> */}
      <UserGreeting isLoggedIn={true} username="Benshabbat"/>
      {/* <Card /> */}
      {/* <Header/>
      <Food/>
      <Footer/> */}
    </>
  );
}

export default App;
