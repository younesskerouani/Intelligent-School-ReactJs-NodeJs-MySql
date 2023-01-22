import Sidebar from "./student/components/sidebar/Sidebar";
import Topbar from "./student/components/topbar/Topbar";
import "./App.css";
import Home from "./student/pages/home/Home";
import Login from "./login/Login";
import Layout from "./student/pages/Layout";
import Error404 from "./Error404/Error404";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import ArticleList from "./student/pages/ArticleList/ArticleList";
import NewArticle from "./student/pages/newArticle/NewArticle";
import Emplois from "./student/pages/emplois/Emplois";
import { useSelector } from "react-redux";
import Forums from "./AllActivity/pages/forums/Forums";
import Evenements from "./AllActivity/pages/event/Evenements";
import Bulletin from "./student/pages/bulletin/Bulletin";
import Messagerie from "./AllActivity/messagerie/Messagerie";
import HomeDirecteur from "./directeur/pages/homeDirecteur/HomeDirecteur";
import DirecSidebar from "./directeur/components/DirecSidebar/DirecSidebar";
import TopbarDirecteur from "./directeur/components/topbar/TopbarDirecteur";
import PageEnseignant from "./directeur/pages/Enseignant/PageEnsei/PageEnseignant";
import PageStudent from "./directeur/pages/Student/PageStudent/PageStudent";
import DataArticle from "./directeur/pages/Student/datatable/DataArticle";
import TronbinoStudent from "./directeur/pages/Student/Tronbinoscope/TronbinoStudent";
import TronbinoEnseigant from "./directeur/pages/Enseignant/Tronbinoscope/TronbinoEnseignant";
import HomeProf from "./enseignant/pages/homeProf/HomeProf";
import TopbarProf from "./enseignant/components/TopbarProf/TopbarProf";
import EnseiSidebar from "./enseignant/components/sidebarProf/EnseiSidebar";
import ArticlePublished from "./enseignant/pages/ArticlePublished/ArticlePublished";
import CoursList from "./enseignant/pages/CoursList/CoursList";
import AddCours from "./enseignant/pages/cours/AddCours";
import CoursListStudent from "./student/pages/coursStudent/CoursListStudent";
import EmploisEnseignant from "./enseignant/pages/EmploisEnseignant/EmploisEnseignant";
import EmploisEtudiant from "./student/pages/EmploisEtudiant/EmploisEtudiant";
import SingleArticle from "./AllActivity/pages/SingleArticle/SingleArticle";
import SglArticleDirecteur from "./directeur/pages/SingleArticleDirecteur/SglArticleDirecteur";


function App() {
  
   const user = useSelector((state)=>state.authReducer.authData);
   console.log(user);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
          {/* route public */}
           <Route path="login" element={ <Login /> } />
           <Route path="Error404" element={<Error404/>}/>


         <Route exact path="/" element={user?.roles?.includes ("ROLE_DIRECTEUR") ? <>
                          <TopbarDirecteur />
                          <div className="container">
                            <DirecSidebar/>
                            <HomeDirecteur />
                          </div>
                </> :user?.roles?.includes ("ROLE_ETUDIANT") ? <>
                                <Topbar />
                                <div className="container">
                                  <Sidebar/>
                                  <Home/>
                                  </div>
                        </>:user?.roles?.includes ("ROLE_ENSEIGNANT") ?<>
                                <TopbarProf/>
                                <div className="container">
                                  <EnseiSidebar/>
                                  <HomeProf/>
                                  </div>
                        </>: <Login/> }  /> 

                  {/* route prive enseignant */}
          <Route element={<RequireAuth allowedRoles={["ROLE_ENSEIGNANT"]} />} >
        
             <Route path="Emplois-Enseignant" element={<>
                                    <TopbarProf />
                                    <div className="container">
                                      <EnseiSidebar />
                                      <EmploisEnseignant />
                                    </div>
                                  </>} /> 

              <Route path="Trombinoscope-eleves" element={<>
                                    <TopbarProf />
                                    <div className="container">
                                      <EnseiSidebar />
                                      <TronbinoStudent />
                                    </div>
                                  </>} /> 
            
                  <Route path="cours">
                      <Route index element={<>
                                        <TopbarProf />
                                        <div className="container">
                                          <EnseiSidebar />
                                          <CoursList />
                                        </div>
                                      </>} />    

                        <Route  path="new"  element={<>
                                <TopbarProf />
                                <div className="container">
                                  <EnseiSidebar/> <AddCours/>
                                  </div> </>  }/>                 
                          </Route>                

                  <Route path="Articles-eleve">
                         <Route index element={<>
                                  <TopbarProf />
                                  <div className="container">
                                    <EnseiSidebar />
                                    <ArticlePublished />
                                  </div>
                                    </>} /> 

                   <Route path=":articleId" element={<>
                                    <TopbarProf />
                                    <div className="container">
                                      <EnseiSidebar />
                                      <SingleArticle/>
                                    </div>
                                  </>} />  

                                          
                    </Route>                

                       <Route path="forums">
                            <Route index element={<>
                                    <TopbarProf />
                                          <div className="container">
                                          <EnseiSidebar />
                                            <Forums />
                                            </div>
                                          </>} />
                        </Route>  

                        <Route path="evenements">
                          <Route index element={<>
                                    <TopbarProf />
                                          <div className="container">
                                          <EnseiSidebar />
                                          <Evenements />
                                            </div>
                                        </>} />
                         </Route>  
                 
                   <Route path="messagerie">
                        <Route index element={<>
                                      <TopbarProf />
                                      <div className="container">
                                        <EnseiSidebar/>
                                        <Messagerie />
                                        </div>
                             </>} />
                      </Route>
            </Route>                      

             {/* route prive directeur */}
          <Route element={<RequireAuth allowedRoles={["ROLE_DIRECTEUR"]} />} >
           
                  <Route path="enseignant">
                        <Route index element={<>
                              <TopbarDirecteur />
                              <div className="container">
                                <DirecSidebar />
                                <PageEnseignant />
                              </div>
                            </>} /> 
                       <Route path="Trombinoscope" element={<>
                                <TopbarDirecteur />
                                <div className="container">
                                  <DirecSidebar />
                                  <TronbinoEnseigant />
                                </div>
                              </>} /> 

                       <Route path="Documents" element={<>
                                <TopbarDirecteur />
                                <div className="container">
                                  <DirecSidebar />
                                  <CoursListStudent />
                                </div>
                              </>} />       
                  </Route>           

                  <Route path="student">
                      <Route index  element={<>
                                <TopbarDirecteur />
                                <div className="container">
                                  <DirecSidebar />
                                  <PageStudent />
                                </div>
                              </>}
                              />
                       <Route path="Articles" >
                          <Route index element={<>
                                    <TopbarDirecteur />
                                    <div className="container">
                                      <DirecSidebar />
                                      <DataArticle />
                                    </div>
                                  </>} /> 

                           <Route path=":articleId" element={<>
                                    <TopbarDirecteur />
                                    <div className="container">
                                      <DirecSidebar />
                                      <SglArticleDirecteur/>
                                    </div>
                                  </>} />
                           </Route>   

                        <Route path="Trombinoscope" element={<>
                                <TopbarDirecteur />
                                <div className="container">
                                  <DirecSidebar />
                                  <TronbinoStudent />
                                </div>
                              </>} />         
                    </Route>   

                       <Route path="forums-directeur">
                            <Route index element={<>
                                    <TopbarDirecteur />
                                          <div className="container">
                                          <DirecSidebar />
                                            <Forums />
                                            </div>
                                          </>} />
                        </Route>  

                        <Route path="evenements-directeur">

                     <Route index element={<>
                              <TopbarDirecteur />
                                    <div className="container">
                                    <DirecSidebar />
                                     <Evenements />
                                      </div>
                                  </>} />
                         </Route>  
                     
                     <Route path="messagerie-directeur">
                        <Route index element={<>
                                      <TopbarDirecteur />
                                      <div className="container">
                                        <DirecSidebar/>
                                        <Messagerie />
                                        </div>
                             </>} />
                      </Route>
          </Route>

          

            {/* route prive etudiant */}
            <Route element={<RequireAuth allowedRoles={["ROLE_ETUDIANT"]} />}>

                 <Route path="emplois">
                   <Route index element={<>
                                <Topbar />
                                <div className="container">
                                  <Sidebar/>
                                  <Emplois />
                                  </div>
                                </>} /> 
                 <Route path="Emplois-Etudiant" element={<>
                                    <Topbar/>
                                    <div className="container">
                                      <Sidebar/>
                                      <EmploisEtudiant/>
                                    </div>
                                  </>} />            
                 </Route> 

                 <Route path="cours-student">
                   <Route index element={<>
                                <Topbar />
                                <div className="container">
                                  <Sidebar/>
                                  <CoursListStudent />
                                  </div>
                                </>} /> 
                 </Route>     

                  <Route path="bulletin">
                    <Route index element={<>
                                  <Topbar />
                                  <div className="container">
                                    <Sidebar/>
                                    <Bulletin />
                                    </div>
                                  </>} /> 
                 </Route>       

                <Route path="articles">

                  <Route index element={<>
                                <Topbar />
                                <div className="container">
                                  <Sidebar/>
                                  <ArticleList />
                                  </div>
                                </>} /> 

                    <Route  path="new"  element={<>
                                <Topbar />
                                <div className="container">
                                  <Sidebar/> <NewArticle/>
                                  </div> </>  }/>

                    <Route path=":articleId" element={<>
                                    <Topbar />
                                    <div className="container">
                                      <Sidebar />
                                      <SingleArticle/>
                                    </div>
                                  </>} />                 

                  </Route>    
             


                <Route path="forums-student">

                    <Route index element={<>
                                  <Topbar />
                                  <div className="container">
                                    <Sidebar/>
                                    <Forums />
                                    </div>
                                  </>} />
                </Route>  

                <Route path="evenements-student">

                    <Route index element={<>
                                  <Topbar />
                                  <div className="container">
                                    <Sidebar/>
                                    <Evenements />
                                    </div>
                                  </>} />
                </Route>    

                <Route path="messagerie-student">
                    <Route index element={<>
                                  <Topbar />
                                  <div className="container">
                                    <Sidebar/>
                                    <Messagerie />
                                    </div>
                                  </>} />
                </Route>    
           </Route>     

              

      </Route> 
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
