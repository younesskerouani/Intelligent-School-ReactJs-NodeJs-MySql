import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { articleColumns } from "./datatablesource";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import * as ArticleApi from '../../../../ApiRedux/api/ArticleRequest';
import { getAllArticles ,updateArticle } from "../../../../ApiRedux/actions/ArticleAction";
import { useDispatch , useSelector } from "react-redux";
import PreviewIcon from '@mui/icons-material/Preview';

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

  

  const handleApprove = (id) => {
    const article = articles.filter((item) => item.id == id)
    article[0].status = "accepted";
    const art = article[0];
    dispatch(updateArticle(id , art));
  };

  const handleReject= (id) => {
    const article = articles.filter((item) => item.id == id)
    article[0].status= "rejected";
    dispatch(updateArticle(id , article[0]));
    console.log(article);
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
        
          <div className="cellAction">
            <Link to={`/student/Articles/${params.row.id}`} style={{ textDecoration: "none" }}>
            <div className="viewButton">View</div>
            </Link>
              {params.row.status === "pending" && 
              <>
                <div
                  className="deleteButton"
                  onClick={() => handleReject(params.row.id)}
                >
                  reject
                </div>
                <div className="PubButton" 
                onClick={() => handleApprove(params.row.id)}>Accept</div></>} 
              
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
