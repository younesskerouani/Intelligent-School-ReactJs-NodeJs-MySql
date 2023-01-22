import "./CoursList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import * as CoursApi from '../../../ApiRedux/api/CoursRequest';
import { getAllCours,deleteCours } from "../../../ApiRedux/actions/CoursActions";
import { format } from "timeago.js";


export default function CoursList() {
  const user = useSelector((state)=>state.authReducer.authData);
  const [ cours , setCours] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=> {
    const getCours =async()=>{
      const {data} = await CoursApi.getAllCours();
      dispatch(getAllCours());

      setCours(data.filter((item) => item.id_prof == user.id));    

    }
    getCours();

  },[cours])

  console.log(cours);

  const handleDelete = (id) => {
    dispatch(deleteCours(id))
  };

  const Button = ({ type }) => {
    return <button className={"StatusButton " + type}>{type}</button>;
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "titre",
      headerName: "Cours",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem"> 
          {params.row.titre}
          </div>
        );
      },
    },
    {
      field: "createdAt",
      headerName: "Date",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            {format(params.row.createdAt)}
          </div>
        );
      },
    },
    
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <Link to="/cours/new">
        <button className="productAddButton">Add new Cours</button>
      </Link>
      
      <DataGrid
        rows={cours}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
