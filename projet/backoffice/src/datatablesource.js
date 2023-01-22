
//article columns
export const articleColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "id_user",
    headerName: "User",
    width: 230,
   
    renderCell:(params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={process.env.REACT_APP_PUBLIC_IMAGE + "users/" + params.row.user_photo} alt="avatar" />
          {params.row.user_fullname}
        </div>
      );
    },
  },
  {
    field: "titre",
    headerName: "Article",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];


export const articleRows =[
  {
    id: 1,
    username: "youness kerouani",
    img: "https://tse3.mm.bing.net/th?id=OIP.XNkSUo8Ss-bfpwSmF1ezVwHaIo&pid=Api&P=0",
    status: "validé",
    article: "WebDevelloppenement"
  },
  {
    id: 2,
    username: "ahmed elSeddiki",
    img: "https://tse3.mm.bing.net/th?id=OIP.RuKeI3zaZ5sd5IJP-lfplgHaJQ&pid=Api&P=0",
    article: "Cyber security Article",
    status: "rejected"
  },
  {
    id: 3,
    username: "karim jebbar",
    img: "https://tse4.mm.bing.net/th?id=OIP.ET4Dv1WI8jX4oAM5w8uwYQHaHa&pid=Api&P=0",
    article: "Genie indutriel now a day",
    status: "pending"
  },
  {
    id: 4,
    username: "chaimaa Toufiq",
    img: "https://tse3.mm.bing.net/th?id=OIP.thtagGZ5kS846hSs2Pl9XAHaJ1&pid=Api&P=0",
    article: "Genie de procedee article",
    status: "validé"
  },
  {
    id: 5,
    username: "samia Jalal",
    img: "https://tse1.mm.bing.net/th?id=OIP.QeNOl0LqR0eTA0aXGNefUwHaLH&pid=Api&P=0",
    article: "L'informatique d'aujourd'hui",
    status: "rejected"
  },
  {
    id: 6,
    username: "Linda Melisandre",
    img: "https://tse2.mm.bing.net/th?id=OIP.7iUQvuperWyRrf15HndQvwHaEK&pid=Api&P=0",
    article: "Software engeenering career",
    status: "validé"
  },
  {
    id: 7,
    username: "Tom Clifford",
    img: "https://tse2.mm.bing.net/th?id=OIP.jCz55sDeBlVl-lrbctGApAHaJ4&pid=Api&P=0",
    article: "Electric ressources",
    status: "rejected"
  },
  {
    id: 8,
    username: "Abdellatif El Aoufi",
    img: "https://tse3.mm.bing.net/th?id=OIP.4EHN-CFquNU6KSbQRxeEIwHaLJ&pid=Api&P=0",
    article: "nature et reciclage",
    status: "validé"
  },
  {
    id: 9,
    username: "Aziz Berrada",
    img: "https://tse2.mm.bing.net/th?id=OIP.bqndB_XfnPZ16yRe7MHZyQHaJ3&pid=Api&P=0",
    article: "Sports and health",
    status: "pending"
  },
  {
    id: 10,
    username: "Abdellah Ibn Al-Hasan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    article: "Argumentation perdoeoeo",
    status: "validé"
    
  },
];