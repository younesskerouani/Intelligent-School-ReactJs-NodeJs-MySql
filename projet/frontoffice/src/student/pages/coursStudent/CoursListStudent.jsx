import "./CoursListStudent.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import * as CoursApi from '../../../ApiRedux/api/CoursRequest';
import { getAllCours } from "../../../ApiRedux/actions/CoursActions";
import { format } from "timeago.js";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FileDownload from 'js-file-download';


export default function CoursListStudent() {
  const user = useSelector((state)=>state.authReducer.authData);
  const [ cours , setCours] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=> {
    const getCours =async()=>{
      const {data} = await CoursApi.getAllCours();
      dispatch(getAllCours());

      setCours(data)

    }
    getCours();

  },[cours])

  console.log(cours);

  const handleDownload = async(id) => {
    const Scour = cours.filter((item) => item.id == id)
    console.log(Scour);
    const {data} = await CoursApi.downloadCours(Scour[0].file);
    FileDownload(data , Scour[0].file);

  };


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "id_user",
      headerName: "Enseignant",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={process.env.REACT_APP_PUBLIC_IMAGE + "users/" + params.row.prof_photo} alt="" />
            {params.row.prof_fullname}
          </div>
        );
      },
    },
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
      width: 250,
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
      headerName: "Download",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <CloudDownloadIcon
              className="DownloadBtn"
              onClick={() => handleDownload(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="CoursListStudent">

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
