import React from "react"
import "./tronbinoscope.css";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getAllUsers } from "../../../../ApiRedux/actions/UsersAction";
import * as UserApi from '../../../../ApiRedux/api/UserRequest';
import styled from '@emotion/styled';


const Heading = styled.div`
    margin-left: 280px;
`

const TronbinoStudent = () => {
  const [users,setUsers] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=> {

    const getUsers =async()=>{
      const {data} = await UserApi.getAllUsers();
      setUsers(data?.filter((item) => item.roles[0].name == "etudiant"));
      console.log(data);
    }
    getUsers();

  },[])

  console.log(users);

  return (
    <div className='portailTrombino'>

    <div className='portailTr'>

        <Heading >
            <h1>Espace Etudiant </h1>
        </Heading>
        
        
        <section className='onlineTrombino'>
         
            {users.map((val) => (
            
                <div className='box'>
                    <div className='img'>
                        <img src={process.env.REACT_APP_PUBLIC_IMAGE+ "users/"+ val.photo} />
                    </div>
                    <h1>{val.fullname}</h1>
                   
                </div>
             
            ))}
        
        </section>
        
    </div>
</div>
  )
}

export default TronbinoStudent;
