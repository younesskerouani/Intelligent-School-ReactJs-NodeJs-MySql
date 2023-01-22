import FeaturedInfoProf from "../../components/FeaturedInfoProf/FeaturedInfoProf";
import WidgetLgStudent from "../../components/WidgetLgStudent/WidgetLgStudent";
import "./HomeProf.css";

export default function HomeProf() {
  return (
    <div className="home">
      <FeaturedInfoProf/>
      <div className="homeWidgets">
        <WidgetLgStudent/> 
      </div>
    </div>
  );
}