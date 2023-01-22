import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import { useState , useEffect } from "react";
import { useDispatch , useSelector } from "react-redux";
import { getAllUsers } from "../../ContextApi/actions/UsersAction";
import * as UserApi from '../../ContextApi/api/UserRequest';
import * as ForumApi from '../../ContextApi/api/ForumRequest';
import * as EventApi from '../../ContextApi/api/eventsRequest';
import * as ArticleApi from '../../ContextApi/api/ArticleRequest';

const Home = () => {
  const dispatch = useDispatch();
  const [users,setUsers] = useState([]);
  const [forums, setForums] = useState([]);
  const [events,setEvents] = useState([]);
  const [ articles , setArticles] = useState([]);

  useEffect(()=> {

    const getUsers =async()=>{
      const {data} = await UserApi.getAllUsers();
      setUsers(data);
    }
    const getForums =async()=>{
      const {data} = await ForumApi.getAllForums();
      setForums(data);
    }
    const getEvents =async()=>{
      const {data} = await EventApi.getAllEvents();
      setEvents(data);
    }
    const getArticles =async()=>{
      const {data} = await ArticleApi.getAllArticles();
      setArticles(data);
    }

    getArticles();
    getUsers();
    getForums();
    getEvents();

  },[])


  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" genre={users} />
          <Widget type="articles" genre = {articles} />
          <Widget type="evenements" genre={events}/>
          <Widget type="forums" genre={forums} />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Users Activity)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
