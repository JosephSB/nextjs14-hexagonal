"use client"
import { config } from "@config/index";
import { AuthGetData } from "@modules/auth/application/getData.use-case";
import { AuthLogout } from "@modules/auth/application/logout.use-case";
import { AuthRepositoryImpl } from "@modules/auth/infraestructure/auth.repository.impl";
import { IUser } from "@modules/user/domain/user.interface";
import Cookies from "js-cookie";
import { createContext, useContext, useEffect, useState } from "react";
//import toast, { Toaster } from 'react-hot-toast';

const InitDataUser = {
    id: 0,
    birthDate: "",
    country: "",
    documentNumber: "",
    documentType: "",
    email: "",
    fullName: "",
    gender: "",
    profileImage: "",
    lastName: "",
    name: "",
    phone: "",
    roles: [],
    slug: "",
    status: ""
}

interface IAuth {
    auth: boolean,
    data: IUser
    loading: boolean
    Logout: () => Promise<void>,
    getData: () => Promise<void>,
} 

const AuthContext = createContext<IAuth>(
    {
        auth: false,
        data: InitDataUser,
        loading: true,
        Logout: () => {return new Promise(() => {});},
        getData: () => {return new Promise(() => {});},
    }  
);


interface Props{
    children: JSX.Element | JSX.Element []
}

const AuthContextProvider = ({ children }:Props) =>{
    const [loading, setLoading] = useState(true);
    const [isAuth, setIsAuth] = useState(false);
    const [dataUser, setDataUser] = useState<IUser>(InitDataUser);

    const Logout = async () => {
        const respository = AuthRepositoryImpl();
        await AuthLogout(respository);

        Cookies.remove(config.TOKEN_AUTH)
        setIsAuth(false)
        setDataUser(InitDataUser)
    }

    const getData = async () => {
        setLoading(true)

        const respository = AuthRepositoryImpl();
        const resp = await AuthGetData(respository);
        if(!resp) {
            Cookies.remove(config.TOKEN_AUTH)
            //mensaje logueo erroneo
            //toast.error("Lo sentimos, no fue posible iniciar sesión en este momento.")
            setLoading(false)
            return
        }
        setIsAuth(true)
        setDataUser(resp)
        setLoading(false)
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <AuthContext.Provider value={
            {
                auth: isAuth,
                data: dataUser,
                loading,
                Logout,
                getData
            }
        }>  
            {/*<Toaster
              position="bottom-right"
              reverseOrder={false}
    />*/}
            { children }
        </AuthContext.Provider>
    )
}

export { AuthContextProvider };

const ContextAuth = () => {
    return useContext(AuthContext);
}

export default ContextAuth;
