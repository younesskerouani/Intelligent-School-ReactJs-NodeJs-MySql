import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { articleColumns, articleRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import * as ArticleApi from '../../ContextApi/api/ArticleRequest';
import { getAllArticles,deleteArticle } from "../../ContextApi/actions/ArticleAction";
import { useDispatch , useSelector } from "react-redux";
import { updateArticle } from "../../ContextApi/actions/ArticleAction";

const DataArticle = () => {
  const [ articles , setArticles] = useState([]);
  const dispatch = useDispatch();
  const [users,setUsers] = useState(null);


  useEffect(()=> {
    const getArticles =async()=>{
      const {data} = await ArticleApi.getAllArticles();
      dispatch(getAllArticles());
      setArticles(data);
    }
    getArticles();

  },[articles]);

console.log(articles);

  const handleDelete = (id) => {
    dispatch(deleteArticle(id))
  };

  const handlePublish = (id) => {
      const article = articles.filter((item) => item.id == id)
      article[0].status = "published";
      const art = article[0];
      dispatch(updateArticle(id , art));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
        
          <div className="cellAction">
            
          
            <Link to={`/articles/${params.row.id}`} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            {params.row.status === "accepted" && <div className="PubButton" onClick={() => handlePublish(params.row.id)}>Publish</div>}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      
      <DataGrid
        className="datagrid"
        rows={articles}
        columns={articleColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DataArticle;
