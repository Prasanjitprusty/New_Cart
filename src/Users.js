import React from "react";
import './App.css';

function Users(props){
    const {data} = props;
    console.warn(props.data.name);
    return(
        <div className="App">
            <h1> User Component  </h1>
            <h4>{data.name}</h4>
            <h2>{data.age}</h2>
            
            
        </div>
    )
}
export default Users;