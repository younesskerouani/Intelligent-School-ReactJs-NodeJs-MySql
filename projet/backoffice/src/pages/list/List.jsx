import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import DataArticle from "../../components/datatable/DataArticle"

const List = ({Article}) => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
       {
        Article ? <DataArticle/>
        : <Datatable/>
      }
        
      </div>
    </div>
  )
}

export default List