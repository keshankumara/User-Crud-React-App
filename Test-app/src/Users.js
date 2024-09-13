import { Box } from "@mui/material";
import UserForm from "./UserForm";
import UsersTable from "./UsersTable";
import Axios from "axios";
import { useEffect, useState } from "react";
import { flushSync } from "react-dom";

/*const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
  { id: 3, name: "John Smith" },
  { id: 4, name: "Jane Smith" },
]; */
//console.log("Testing Axios");
const Users = () => {
  const [users, setUsers] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    getUsers();
  } , []);

  const getUsers = () => {
    Axios.get('http://localhost:3001/api/users')
      .then(response => {
        console.log(response.data.response);
        setUsers(response.data?.response || []);
      })
      .catch(error => {
        console.log("Axios Error : ", error);
      })
    };



  const addUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name
    }

    Axios.post('http://localhost:3001/api/createuser', payload)
      .then(()=> {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch(error => {
        console.log("Axios Error : ", error);
      })
  };


  const updateUser = (data) => {
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name
    }

    Axios.post('http://localhost:3001/api/updateuser', payload)
      .then(()=> {
        getUsers();
        setSubmitted(false);
        isEdit(false);
      })
      .catch(error => {
        console.log("Axios Error : ", error);
      })

  };

  const deleteUser = (data) => {
  
    const payload = {
      id: data.id,
    }

    Axios.post('http://localhost:3001/api/deleteuser', payload)
      .then(()=> {
        getUsers();
      })
      .catch(error => {
        console.log("Axios Error : ", error);
      })
  };

  return (
    <Box 
      sx={{
        width: 'cals(100% - 100px)',
        margin: 'auto',
        marginTop:'100px',
      }}
    >
      <UserForm 
        addUser={addUser}
        updateUser={updateUser}
        submitted ={submitted}
        data={selectedUser}
        isEdit={isEdit}

      />
      <UsersTable 
        rows={users}
        selectedUser={data =>{
          setSelectedUser(data);
          setIsEdit(true);
        }}
        deleteUser={data => window.confirm("Are you sure you want to delete this user?") && deleteUser(data)

        }
      />
    </Box>
  );
} 

export default Users;