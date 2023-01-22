import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { deleteUser,getAllUsers } from "../../ContextApi/actions/UsersAction";
import * as UserApi from '../../ContextApi/api/UserRequest';


const Datatable = () => {
  const user = useSelector((state)=>state.authReducer.authData);
  const [users,setUsers] = useState([]);
  const dispatch = useDispatch();
 

  // const imageAccess = "http://localhost:8088/static/users/";
 
  const handleDelete = (id) => {
    // setData(data.filter((item) => item.id !== id));
    dispatch(deleteUser(id))
  };

  useEffect(()=> {
    const getUsers =async()=>{
      const {data} = await UserApi.getAllUsers();
      setUsers(data?.filter((item) => item.id !== user.id));
      dispatch(getAllUsers());
      
    }
    getUsers();
  },[users])

  console.log(users);

  const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            {params.row.photo ? <img className="cellImg" src={process.env.REACT_APP_PUBLIC_IMAGE+ "users/" + params.row.photo} alt="avatar" /> :
                      <img className="cellImg" src="./images/deafultProfilPic.png" alt="avatar" /> }
            {params.row.fullname}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "phone",
      headerName: "Phone",
      width: 160,
    },
    {
      field: "roles",
      headerName: "Profile",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.roles[0].name}`}>
            {params.row.roles[0].name}
          </div>
        );
      },
    },
  ];
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/users/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];


  return (
    <div className="datatable">
      <div className="datatableTitle">
         Users List
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={users}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
