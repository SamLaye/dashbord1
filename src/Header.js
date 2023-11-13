// import { useState } from "react";
// import sunglassCool from './imgs/sunglasses_cool.png'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"


const Header = (props) => {

    const lists = props.lists
    

    return ( 
        <header className=" py-3 mb-5" id="header">
            <div className="container d-flex justify-content-between ">
                <div className="d-flex">
                    <span className="me-5 my-auto bg-primary rounded-circle"> 
                        logo
                    </span>
                    <div className="d-flex">
                        {lists.map((list) => (
                            <div className="d-flex">
                                <li className="text-capitalize mx-2 my-auto" key={Math.floor(Math.random * 1000)}>{list}</li>
                            </div>
                        ))}
                    </div>
                    </div>    
                <div className="d-flex">
                    <input className="form-control" type="text" placeholder="Search" />
                    <button className="btn btn-primary ms-2">4</button>
                </div>
            </div>
        </header>
     );
}
 
export default Header;