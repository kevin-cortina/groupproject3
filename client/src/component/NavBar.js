import React from "react"
// import BioModals from './unsuedComps/BioModals'
// import LoginModal from "./unsuedComps/LoginModals"
import logo from '../assets/pictures/logo2.png';
import LoginModal from "./LoginModals";

function NavBar(){
    return(
        <div className="row">
    <div id="test" className="col s3">
      <img className="profile-photo" src={logo} alt={"logo"}/>
    </div>

    <div id="test" className="col s2 push-s6 valign-wrapper">
        <div className="row">
          <div className="col s3">
          <button type="button" id="logout" className="btn blue darken-2 modal-trigger">Logout</button>
          </div>
          <div className="col s2">
          <button type="button" className="btn green darken-4 modal-trigger" id = "bio_btn">Login</button>
          </div>
        </div>

    </div>
  </div>
    )
}
export default NavBar




