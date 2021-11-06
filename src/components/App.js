import './App.css';
import { Fragment } from 'react';
import {Header} from "./Header/Header.jsx"
import { UserList } from "./UserList/UserList"
import { Footer } from "./Footer/Footer.jsx"
function App() {
   return (
    <Fragment>
      <Header />
      <UserList />
      <Footer />
    </Fragment>
   )
}
export default App;
