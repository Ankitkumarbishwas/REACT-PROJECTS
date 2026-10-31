// 2.Create separate components named `Navbar`, `Home`, and `Footer` in different files. Export and import them into `App.jsx` to display a complete webpage.

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App(){
  return(
    <div>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App;