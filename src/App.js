import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect} from 'react';
import { Container, Row, Col } from "react-bootstrap";
import AddUserForm from './components/AddUserForm';
import SeeAllUsers from './components/SeeAllUsers';
import { collection, query,onSnapshot,orderBy} from "firebase/firestore";
import {db} from './Firebase/Config';
import { addUser } from './Action/UserAction';
import {useDispatch} from 'react-redux'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const readData=async ()=>{
      const q = query(collection(db, "Users-timestamp"),orderBy("timestamp","desc"));
       onSnapshot(q, (querySnapshot) => {
      const users = [];
       querySnapshot.forEach((doc) => {
      users.push(doc.data());
  });
  dispatch(addUser(users));
  console.log(users);
});
     }
   
readData();
  },[dispatch])


   //const [users, setUser] = useState([]);
  // const addNewUser=(owner)=>{
  //  owner.id=Math.random().toString()
  //   setUser([...users,owner])
  //    console.log(owner)
  //  };
 
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
          // brandNew={addNewUser}
           />
        </Col>
        <Col md={8}>
          <SeeAllUsers 
         // UserData={users}
           // deleteUser={deleteUser}
           //UserEdit={UserEdit}
           />
        </Col>
      </Row>
    </Container>
  );
};
export default App;

































































