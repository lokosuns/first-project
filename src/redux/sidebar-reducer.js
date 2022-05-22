let initialState = {
            friendsData: [
                {
                    id: 1,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU',
                    name: 'Alex'
                },
                {
                    id: 2,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU',
                    name: 'Max'
                },
                {
                    id: 3,
                    avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU',
                    name: 'Lola'
                },
            ],
        };


export const sidebarReducer = (state=initialState, action) => {
    return state;
}