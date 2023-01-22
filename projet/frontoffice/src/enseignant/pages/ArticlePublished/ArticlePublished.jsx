import "./ArticleList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import * as ArticleApi from '../../../ApiRedux/api/ArticleRequest';
import { getAllArticles } from "../../../ApiRedux/actions/ArticleAction";


export default function ArticlePublished() {
  const user = useSelector((state)=>state.authReducer.authData);
  const [ articles , setArticles] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=> {
    const getArticles =async()=>{
      const {data} = await ArticleApi.getAllArticles();
      dispatch(getAllArticles());

      setArticles(data.filter((item) => item.status == "published"))

    }
    getArticles();

  },[articles])

  console.log(articles);

  const Button = ({ type }) => {
    return <button className={"StatusButtonArt " + type}>{type}</button>;
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "id_user",
      headerName: "Etudiant",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={process.env.REACT_APP_PUBLIC_IMAGE + "users/" + params.row.user_photo} alt="" />
            {params.row.user_fullname}
          </div>
        );
      },
    },
    {
      field: "titre",
      headerName: "Article",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <Button type={params.row.status} />
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={`/Articles-eleve/${params.row.id}`} style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className="ArtList">
  
      <DataGrid
        rows={articles}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
