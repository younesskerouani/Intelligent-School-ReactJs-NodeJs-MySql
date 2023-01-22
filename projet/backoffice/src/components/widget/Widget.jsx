import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AssignmentIcon from '@mui/icons-material/Assignment';
import FestivalIcon from '@mui/icons-material/Festival';
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";

const Widget = ({ type , genre }) => {
  let data;

  //temporary
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "Users",
        isMoney: false,
        link: "See all users",
        amount: genre.length,
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "articles":
      data = {
        title: "Articles",
        isMoney: false,
        link: "View all Articles",
        amount: genre.length,
        icon: (
          <AssignmentIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "evenements":
      data = {
        title: "Evenements",
        isMoney: false,
        link: "View all Events",
        amount: genre.length,
        icon: (
          <FestivalIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "forums":
      data = {
        title: "Forums",
        isMoney: false,
        link: "See Forums",
        amount: genre.length,
        icon: (
          <PsychologyOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
           {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
