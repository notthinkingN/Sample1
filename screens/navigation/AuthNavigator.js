import React, {createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = ({childern}) => {
    return(
        <AuthContext.Provider>
            {childern}
        </AuthContext.Provider>
    );
}