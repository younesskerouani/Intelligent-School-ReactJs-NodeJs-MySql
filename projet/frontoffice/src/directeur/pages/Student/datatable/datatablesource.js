
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
