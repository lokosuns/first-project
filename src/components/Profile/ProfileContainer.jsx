import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

// Декоратор для замены HOC withRouter, т.к. в react-route-dom 6 его уже нет.
// В дальнейшем при замене классовой компоненты на функциональную, нужно будет использовать только хуки.
function withRouter(Component) {
    function ComponentWithRouterProps(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        )
    }

    return ComponentWithRouterProps;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = ''
        }
        this.props.getUserProfile(userId)
    }


    render() {



        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));