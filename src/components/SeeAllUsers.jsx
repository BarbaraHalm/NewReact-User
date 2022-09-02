import React from 'react'
import User from "./User";
import {Row} from "react-bootstrap";
function SeeAllUsers(props) {
    return ( 
        <div>
        <h1>USER</h1>
        <Row md={3}>
            {props.UserData.map((item)=>{
             return (
             <User
             key={item.id}
             UserData={item}
             deleteUser={props.deleteUser}
             UserEdit={props.UserEdit}
             />
             );
            })}
        </Row>
        </div>
     );
}
export default SeeAllUsers;