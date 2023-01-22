import "./widgetLg.css";
import { useDispatch , useSelector } from "react-redux";
import { useState , useEffect } from "react";
import { format } from "timeago.js";
import { getAllCours } from "../../../ApiRedux/actions/CoursActions";
import * as CoursApi from '../../../ApiRedux/api/CoursRequest';


export default function WidgetLg() {

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

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Cours</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Enseignant</th>
          <th className="widgetLgTh">Cours</th>
          <th className="widgetLgTh">Date</th>
        </tr>
       
        {cours.map((cour)=> (

            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img
                  src={ process.env.REACT_APP_PUBLIC_IMAGE+ "users/"+ cour.prof_photo}
                  alt=""
                  className="widgetLgImg"
                />
                <span className="widgetLgName">{cour.prof_fullname}</span>
              </td>
              <td className="widgetLgCour">{cour.titre}</td>
              <td className="widgetLgDate">{format(cour.createdAt)}</td>
              
            </tr>
            )

          )}
     

      </table>
    </div>
  );
}
