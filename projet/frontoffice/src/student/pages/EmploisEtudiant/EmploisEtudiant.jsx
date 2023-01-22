import "./EmploisEtudiant.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import * as EmploisApi from '../../../ApiRedux/api/EmploisRequest';
import { getAllEmplois } from "../../../ApiRedux/actions/CoursActions";
import { format } from "timeago.js";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import FileDownload from 'js-file-download';


export default function EmploisEtudiant() {
  const user = useSelector((state)=>state.authReducer.authData);
  const [ emplois , setEmplois] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=> {
    const getEmplois =async()=>{
      const {data} = await EmploisApi.getAllEmplois();

      setEmplois(data.filter((item) => item.role == "etudiant"))

    }
    getEmplois();

  },[emplois])

  console.log(emplois);

  const handleDownload = async(id) => {
    const empl = emplois.filter((item) => item.id == id)
    const {data} = await EmploisApi.downloadEmplois(empl[0].file);
    FileDownload(data , "emplois.pdf");

  };


  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    
    {
      field: "Emplois",
      headerName: "Emplois",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="productListItem"> 
            Emplois du Temps Etudiant
          </div>
        );
      },
    },
    {
      field: "updatedAt",
      headerName: "Date",
      width: 220,
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
              onClick={(e) => handleDownload(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="CoursListStudent">

      <DataGrid
        rows={emplois}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
