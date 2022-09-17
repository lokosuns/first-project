import * as React from "react";
import {connect} from "react-redux";
import {follow, requestUsers, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getUsers,
    getUsersPageCount
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {requestUsers, currentPage, pageSize} = this.props

        requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {requestUsers, pageSize} = this.props
        requestUsers(pageNumber, pageSize)
    }

    render() {
        const {
            isLoading,
            usersPageCount,
            pageSize,
            currentPage,
            users,
            unfollow,
            follow,
            followingInProgress
        } = this.props
        return (
            <>
                {isLoading ?
                    <Preloader/>
                    :
                    <Users
                        usersPageCount={usersPageCount}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChanged={this.onPageChanged}
                        users={users}
                        unfollow={unfollow}
                        follow={follow}
                        followingInProgress={followingInProgress}
                    />
                }
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        usersPageCount: getUsersPageCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        requestUsers
    })
)(UsersContainer)
