import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import './App.css';
import CurrentProject from './CurrentProject';
import Header from './Header';

function App() {

  const [blogs, SetBlogs] = useState([
    {title: "Cyberpunk 2077", image: "{sunglassCool}", casting: 4, dueDate: "03.05.19", id: 1},
    {title: "Phantom of th Opera", image: "{sunglassCool}", casting: 7, dueDate: "21.07.19", id: 2},
    {title: "Commercial for Lay's", image: "{sunglassCool}", casting: 5, dueDate: "28.10.19", id: 3}
])

  const lists = ["actors", "projects", "castings", "payouts", "Team"]

  return (
    <div className="App">
        <Header lists = {lists}/>
        <div className='container'>
          <h1 className='text-start'>Projects</h1>
          <div className='mb-4'>
            <h2 className='text-muted text-capitalize fs-6 text-start'> current projects </h2>
            <CurrentProject blogs = {blogs}/>
          </div>
          <div className='mt-4'>
            <h2 className='text-muted text-capitalize fs-6 text-start'> completed projects </h2>
            <CurrentProject blogs = {blogs}/>
          </div>
        </div> 
        <br/><br/><br/> 
    </div>
  );
}

export default App;
