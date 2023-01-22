import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate ,useLocation} from "react-router-dom";
import { EventInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import User from "./pages/Edituser/User";
import Evenements from "./pages/event/Evenements";
import Forums from "./pages/forums/Forums";
import EventEdit from "./pages/EditEvent/EventEdit";
import ForumEdit from "./pages/EditForum/ForumEdit";
import { useSelector } from "react-redux";
import RequireAuth from "./components/RequireAuth";
import Layout from "./pages/Layout"
import Error404 from "./pages/Error404/Error404";
import NewForum from "./pages/newForum/NewForum";
import NewEvent from "./pages/newEvent/NewEvent";
import Agendas from "./pages/Agendas/Agendas";
import Messagerie from "./pages/messagerie/Messagerie";
import NewEmplois from "./pages/newEmplois/NewEmplois";
import SingleArticle from "./pages/SingleArticle/SinglePost";

export default  function App() {
  const { darkMode } = useContext(DarkModeContext);
  const user = useSelector((state)=>state.authReducer.authData);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          {/* route public */}
           <Route path="login" element={user ? <Navigate to='/' /> : <Login /> } />
           <Route path="Error404" element={<Error404/>}/>

 
          {/* route prive admin */}
            <Route element={<RequireAuth allowedRoles={["ROLE_ADMIN"]} />}>
            
                  <Route path="/"  element={<Home />} />
                    <Route path="users">
                      <Route index element={<List Article={false}/>} />
                      <Route path=":userId" element={<Single/>} />
                      <Route
                        path="new"
                        element={<New inputs={userInputs} title="Add New User" />}
                        />
                      <Route path="edit/:userId" element={<User/>}/>
                    </Route>
                    <Route path="articles">
                      <Route index element={<List  Article={true}/>} />
                      <Route path=":articleId" element={<SingleArticle/>} />
                    </Route>
                    <Route path="evenements" >
                      <Route index element={<Evenements/>}/>
                      <Route
                            path="new"
                            element={<NewEvent/>}
                          />
                          <Route path="edit/:id" element={<EventEdit/>}/>
                    </Route>

                    <Route path="forums">
                          <Route index element={<Forums/>}/>
                          <Route
                            path="new"
                            element={<NewForum/>}
                          />
                          <Route path="edit/:id" element={<ForumEdit/>}/>
                      </Route>


                      <Route path="agendas">
                        <Route index element={<Agendas/>} />
                        <Route
                            path="new/:profil"
                            element={<NewEmplois/>}
                          />
                      </Route> 

                      <Route path="messagerie" element={<Messagerie/>}/>
                      <Route path="profil" element={<Single />}/>
              
            </Route>

          </Route> 
       </Routes>
      </BrowserRouter>
    </div>
  );
}

