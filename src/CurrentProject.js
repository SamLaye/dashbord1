// import { useState } from "react";
import sunglassCool from './imgs/sunglasses_cool.png'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

const CurrentProject = (props) => {

    const blogs = props.blogs


    

    return ( 
        <>
            <div className="row text-start">
                {blogs.map((blog) => (
                    <div className="col-3 p-1">    
                        <div className="blod-view border rounded bg-white p-3" key={blog.id}>
                            <div className="d-flex justify-content-between">
                                <div className="bg-success p-3 rounded"><img src={sunglassCool} className="img-fluid"/></div>
                                <div>{blog.title}</div>
                            </div>
                            <div>
                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-column">
                                    <span className="fw-bold">{blog.casting}</span>
                                    <span className="text-muted">Castings</span>
                                </div>
                                <div className="d-flex flex-column">
                                    <span className="fw-bold">{blog.dueDate}</span>
                                    <span className="text-muted">Due Date</span>
                                </div>
                            </div>
                        </div>
                    </div>    
                ))}
                <div className="col-3 p-1">
                     <div className="blod-view d-flex align-items-center border rounded bg-white  h-100 p-3">
                        <div className="d-flex flex-column mx-auto align-items-center ">
                            <span>+</span>
                            <span>New Project</span>
                        </div>
                     </div>
                </div>
            </div>
        </>
     );
}
 
export default CurrentProject;