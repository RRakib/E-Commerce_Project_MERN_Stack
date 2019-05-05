const initState = {

}

// UserReducers
const userReducers = (state = initState , action) => {
    switch(action.type){
        case "LOGIN":
            state = {
                userType : action.userType
            }
            return state
        default:
            return state
    }
}

// Exports
export default userReducers