import React from "react";
import './App.css';

function Users(props){
    const {data} = props;
    console.warn(data.name);
    return(
        <div className="App">
            <h1> User Component  </h1>
            <h2>{data.name}</h2>
            <h2>{data.age}</h2>          
        </div>
    )
}
export default Users;