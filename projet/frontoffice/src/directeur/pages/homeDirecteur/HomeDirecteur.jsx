
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import "./home.css";

export default function HomeDirecteur() {
  return (
    <div className="home">
      <FeaturedInfo />
      <div className="homeWidgets">
        <WidgetLg/>
      </div>
    </div>
  );
}
