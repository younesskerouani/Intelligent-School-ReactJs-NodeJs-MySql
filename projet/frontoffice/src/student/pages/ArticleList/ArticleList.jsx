import "./ArticleList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import PreviewIcon from '@mui/icons-material/Preview';
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import * as ArticleApi from '../../../ApiRedux/api/ArticleRequest';
import { getAllArticles,deleteArticle } from "../../../ApiRedux/actions/ArticleAction";


export default function ArticleList() {
  const user = useSelector((state)=>state.authReducer.authData);
  const [ articles , setArticles] = useState([]);
  const dispatch = useDispatch();

  useEffect(()=> {
    const getArticles =async()=>{
      const {data} = await ArticleApi.getAllArticles();
      dispatch(getAllArticles());

      setArticles(data.filter((item) => item.id_user == user.id))

    }
    getArticles();

  },[articles])

  console.log(articles);

  const handleDelete = (id) => {
    dispatch(deleteArticle(id))
  };

  const Button = ({ type }) => {
    return <button className={"StatusButton " + type}>{type}</button>;
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "article",
      headerName: "Article",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={process.env.REACT_APP_PUBLIC_IMAGE + "articles/" + params.row.photo} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "titre",
      headerName: "Titre",
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
          <>
          <Link to={`/articles/${params.row.id}`} style={{ textDecoration: "none" }}>
          <div className="viewArticleButton">View</div>
            </Link>
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
      <Link to="/articles/new">
        <button className="productAddButton">Create new Article</button>
      </Link>
      
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
