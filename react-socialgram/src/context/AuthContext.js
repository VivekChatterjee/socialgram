import { createContext, useEffect, useReducer } from "react"
import AuthReducer from "./AuthReducer"


const INITIAL_STATE = {
    user: {
        _id: "63b9796c68e26000083a7240",
        username: "raju",
        email: "raju@gmail.com",
        profilePicture: "person/1.jpeg",
        coverPicture: "",
        followers: [],
        followings: [],
        isAdmin: false,
    },
    isFetching: false,
    error: false
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
    return (
        <AuthContext.Provider value={
            {
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }
        }>
            {children}
        </AuthContext.Provider>
    );
};