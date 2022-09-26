import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AddUserForm from './components/AddUserForm';
import SeeAllUsers from './components/SeeAllUsers';
function App() {
   const [users, setUser] = useState([]);
  const addNewUser=(owner)=>{
   owner.id=Math.random().toString()
    setUser([...users,owner])
     console.log(owner)
   };
 
  //  const deleteUser =(id,deleteduser)=>{
  //    setUser(users.filter((owner)=>{
  //      if (owner.id!==id){
  //      return deleteduser;
  //   }
  //   return owner;
  //  }
      
  //   ));
  //  };
  //  const UserEdit=(id, updatedInfo)=>{
  //   setUser(
  //     users.map((owner) =>{
  //     if(owner.id===id){
  //       return updatedInfo;
  //     }
  //      return owner;
  //     })
  //    );
  //  };
  return (
    <Container>
      <Row style={{marginTop: "20px"}}>
        <Col md={4} >
          <h1>FORM</h1>
          <AddUserForm
           brandNew={addNewUser}
           />
        </Col>
        <Col md={8}>
          <SeeAllUsers 
          UserData={users}
           // deleteUser={deleteUser}
           //UserEdit={UserEdit}
           />
        </Col>
      </Row>
    </Container>
  );
};
export default App;
































































// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, {useState} from 'react';
// import { Container, Row, Col } from "react-bootstrap";
// import AddUserForm from './components/AddUserForm';
// import SeeAllUsers from './components/SeeAllUsers';
// function App() {
//   const [users, setUser] = useState([
//   //   { name: "Winifred ", email: " wini@gmail.com ", gen: " 21", id: "563823709" },
//   //   { name: " Jemimah", email: " jemimah@gmail.com ", gen: "20 ", id:"62tyug2y2t9" },
//   //   { name: " Julius", email: "juli@gmail.com ", gen: "21 ", id:"3627e8239001" },
//   ]);
//    const addNewUser=(owner)=>{
//      owner.id=Math.random().toString()
//      setUser([...users,owner])
//      console.log(users,owner)
//    };
 
//   const deleteUser =(id,deleteduser)=>{
//     setUser(users.filter((owner)=>{
//       if (owner.id!==id){
//       return deleteduser;
//     }
//       return owner;
//   }
      
//     ));
//   };
//   const UserEdit=(id, updatedInfo)=>{
//     setUser(
//       users.map((owner) =>{
//       if(owner.id===id){
//         return updatedInfo;
//       }
//         return owner;
//       })
//     );
//   };
//   return (
//     <Container>
//       <Row style={{marginTop: "20px"}}>
//         <Col md={4} >
//           <h1>FORM</h1>
//           <AddUserForm brandNew={addNewUser}/>
//         </Col>
//         <Col md={8}>
//           <SeeAllUsers UserData={users}
//            deleteUser={deleteUser}
//            UserEdit={UserEdit}
//            />
//         </Col>
//       </Row>
//     </Container>
//   );
// };
// export default App;
