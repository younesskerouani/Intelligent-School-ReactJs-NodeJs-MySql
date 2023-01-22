import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/table/Table";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";

const Single = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
 
  const users = useSelector((state)=>state.userReducer.users);

  const [data, setData] = useState(users.data);
  const [USER, setUSER] = useState({});

    useEffect(()=>{
      const SingleUser = data.filter((item) => item.id == id);
      setUSER(SingleUser[0]);
    },[id])

    console.log(USER);
   const role = USER.roles;
   console.log(role);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="SINGLEUS">
          <div className="left">

           <Link to={`/users/edit/${id}`} style={{ textDecoration: "none" }}>
            <div className="editButton">Edit</div>
            </Link>

            <h1 className="title">Information</h1>
            <div className="item">
             
          {
            USER.photo ?
            <img src={process.env.REACT_APP_PUBLIC_IMAGE+"users/"+USER.photo} alt="" className="itemImg" />
            :
            <img className="itemImg" src="https://tse4.mm.bing.net/th?id=OIP.nvmSisyWAfMlSRx8g_L3zAAAAA&pid=Api&P=0" alt="avatar" /> 
          }
            

              <div className="details">
                <h1 className="itemTitle">{USER.fullname}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{USER.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{USER.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                   {USER.adresse}
                  </span>
                </div>
                <div className="detailItem">
                  {USER.roles?.map((role)=> 
                  <>
                  <span className="itemKey">Profil:</span>
                  <span className="itemValue">{role.name}</span>
                  </>
                  )}
                  
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Activity ( Last 6 Months)" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
