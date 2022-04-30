import data from "./data.json";
import "./UserList.css";

function UserList() {
  let res = data.map(function (item) {
    return (
      <div className="personsName" key={item._id}>
        <h3>{item.name.first}</h3>
        <h4>{item.name.last}</h4>
      </div>
    );
  });

  return <div className="container">{res}</div>;
}

export default UserList;
