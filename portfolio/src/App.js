import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <section id='Homepage'>
        <Navbar/>
      </section>
      <section>parallax</section>
      <section id='Services'>Services</section>
      <section>parallax</section>
      <section id='Portfolio'>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id='Contact'>contact</section>
      <section id='About'>About</section>
    </div>
  );
}

// const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];

export default App;
