import {connect} from "react-redux";
import {Navbar} from "./Navbar";


let mapStateToProps = (state) => {
    return {
        friendsData: state.sidebarPage.friendsData
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer
