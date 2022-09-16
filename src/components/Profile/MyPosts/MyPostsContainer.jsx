import {addPost} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        postData: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {dispatch(addPost(newPostText))}
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(MyPosts);
