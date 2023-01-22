import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { getAllArticles } from "../../../ApiRedux/actions/ArticleAction";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import * as ArticleApi from '../../../ApiRedux/api/ArticleRequest';
import * as EventApi from '../../../ApiRedux/api/eventsRequest';
import * as ForumApi from '../../../ApiRedux/api/ForumRequest';
import * as CoursApi from '../../../ApiRedux/api/CoursRequest';
import { getAllCours } from "../../../ApiRedux/actions/CoursActions";


export default function FeaturedInfo() {
  const [ articles , setArticles] = useState([]);
  const [events,setEvents] = useState([]);
  const [forums, setForums] = useState([]);
  const [ cours , setCours] = useState([]);
  const user = useSelector((state)=>state.authReducer.authData);

  useEffect(()=> {
      const getArticles =async()=>{
        const {data} = await ArticleApi.getAllArticles();
        setArticles(data.filter((item) => item.id_user == user?.id))
      }
      const getEvents =async()=>{
        const {data} = await EventApi.getAllEvents();
        setEvents(data);
      }
      const getForums =async()=>{
        const {data} = await ForumApi.getAllForums();
        setForums(data);
      }
      const getCours =async()=>{
        const {data} = await CoursApi.getAllCours();
        setCours(data);
      }

      getCours();
      getEvents();
      getArticles();
      getForums();

    },[articles])

  

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Articles</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{articles.length}</span>

        </div>
        <span className="featuredSub">  Current Articles</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Forums</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{forums.length}</span>

        </div>
        <span className="featuredSub">Current Forums</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Events</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{events.length}</span>

        </div>
        <span className="featuredSub">Current Events</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cours</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">{cours.length}</span>

        </div>
        <span className="featuredSub">Current Cours </span>
      </div>
    </div>
  );
}
