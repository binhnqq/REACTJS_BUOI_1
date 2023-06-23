
import './App.css';
 import  Carousel  from "./Components/Carousels/Carousel";
import Content from "./Components/Contents/Content";
import Header from "./Components/Header/Header";
function App() {
  return (
    <div className="App">
      <Header/>
      <Carousel/>
     <Content/> 
    </div>
  );
}

export default App;
