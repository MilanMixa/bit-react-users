import React, { useEffect, useState } from "react";

import { getUserList } from "../Data/data-users.js";
import { Avatar } from "../Avatar/Avatar";
import { UserInfo } from "../UserInfo/UserInfo";
import { GridButton } from "../GridButton/GridButton.jsx";
import { ListButton } from "../ListButton/ListButton.jsx";
import { Grid } from "../Grid/Grid.jsx";

import "./UserList.css";

const UserList = () => {
  const [selected, setSelected] = useState(true);
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    getUserList().then((users) => {
      setUsers(users);
      setFilteredUsers(users);
    });
  }, []);

  const onListClick = () => {
    setSelected(true);
  };

  const onGridClick = () => {
    setSelected(false);
  };

  const refreashPage = () => {
    setInputValue("");
    getUserList().then((users) => {
      setUsers(users);
      setFilteredUsers(users);
    });
  };

  const onTyping = (event) => {
    setInputValue(event.target.value);
    const filtered = users.filter((user) =>
      user.name.first.includes(event.target.value)
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="main-container">
      <div className="flex-div">
        <div className="search-div">
          <input type="text" placeholder="Search users" value={inputValue} onChange={onTyping}/>
          <button type="Submit" id="grid-button" onClick={refreashPage}>
            Refresh users <i className="fas fa-redo"></i>
          </button>
        </div>
        <div className="btn-container">
          <ListButton onClick={onListClick} />
          <GridButton onClick={onGridClick} />
        </div>
      </div>
      <div className="main-div">
        <div className="grid-flex">
          {filteredUsers.map((user, index) =>
            selected ? 
            (
              <div className="single-user" key={index}>
                <Avatar userLogo={user} />
                <UserInfo userData={user} />
              </div>
            ) 
            :
            (
              <div className="single-grid-user" key={index}>
                <Grid userGridData={user} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

// class UserList extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             users : [],
//             selected: true
//         }
//     }

//     onListClick = () => {
//         this.setState({selected: true})
//     };

//     onGridClick = () => {
//         this.setState({selected: false})
//     };

//     componentDidMount(){
//         getUserList()
//             .then(users =>{
//                 this.setState({users})
//             })
//     };

//     render(){
//         return (
//          <div className="main-container">
//                 <div className="btn-container">
//                 <ListButton onClick={this.onListClick} />
//                  <GridButton onClick={this.onGridClick}/>
//              </div>
//                 {
//                 this.state.users.map((user, index) => this.state.selected ?
//                     (
//                         <div className="single-user" key={index}>
//                                <Avatar userLogo={user}/>
//                                <UserInfo userData={user}/>
//                               </div>
//                     )
//                     :
//                     (
//                         <div className="single-grid-user" key={index}>
//                             <Grid userGridData={user}/>
//                         </div>
//                     )
//                 )
//                 }
//         </div>
//     )
// }
// };

export { UserList };
