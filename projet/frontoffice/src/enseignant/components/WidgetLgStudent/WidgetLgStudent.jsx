import "./WidgetLgStudent.css";
import { useState , useEffect } from "react";
import * as ArticleApi from '../../../ApiRedux/api/ArticleRequest';
import { format } from "timeago.js";


export default function WidgetLgStudent() {
  const [ articles , setArticles] = useState([]);

  useEffect(()=> {
    const getArticles =async()=>{
      const {data} = await ArticleApi.getAllArticles();
      setArticles(data.filter((item) => item.status == "published"))
    }
   
    getArticles();
  
  },[articles])

  console.log(articles);

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Articles Published</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Etudiant</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Status</th>
        </tr>

      {articles.map((article)=> (

        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src={ process.env.REACT_APP_PUBLIC_IMAGE+ "users/"+ article.user_photo}
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">{article.user_fullname}</span>
          </td>
          <td className="widgetLgDate">{format(article.createdAt)}</td>
          <td className="widgetLgStatus">
            <Button type={article.status} />
          </td>
        </tr>

      )
      )}
        
        
        
      </table>
    </div>
  );
}
