

import React from 'react';

import {  AiOutlineLogin } from "react-icons/ai"
import { BiBookmark } from "react-icons/bi"
import { BsMoon } from "react-icons/bs"
import { REQUEST } from '../api';


import { AuthContext } from '../context/AuthContext';

export default function AuthProvider({children}) {
  const [token, setToken] = React.useState(null);
  const [state, setState] = React.useState("");
  const [user, setUser] = React.useState(null);
  const [users, setUsers] = React.useState(null)

  const getToken = React.useCallback(() => {
    const tokenData = localStorage.getItem('access')

    if(tokenData) {
      setToken(tokenData)
    }else {
      setToken(null)
    }
  }, []);

  const getUser = React.useCallback(() => {
    const request = REQUEST.CURRENT_USER();

    request
      .then(res => {
        const data = res.data

        setUser(data)
      })
  }, [])

  const getAllUsers = React.useCallback(() => {
    const request = REQUEST.GET_ALL_USERS()

    request
       .then(res => {
          const data = res.data

          setUsers(data)
       })
  }, [])


  React.useEffect(() => {
    getToken(); 
    getUser();
    getAllUsers()
  }, 
    [
      getToken, 
      state,  
      getUser, 
      getAllUsers
    ]
  );

  const logOut = React.useCallback(() => {
    setState(null);
    setState("Log out!!!")
    localStorage.clear()
  }, []);

  const OptionList = React.useCallback(() => {
    return [
      {
        id: 1,
        caption: "Сохраненное",
        icon: BiBookmark
      },
      {
        id: 2,
        caption: "Переключить тему",
        icon: BsMoon
      },
      {
        id: 3,
        caption: "Выйти",
        icon: AiOutlineLogin,
        event: () => logOut()
      },
    ]
  }, [logOut])

  const values = React.useMemo(() => ({
    token,
    setState,
    logOut,
    OptionList,
    user,
    users
  }),
   [
    token, 
    setState,
    logOut, 
    OptionList, 
    user,
    users
   ]
  )

  return (
    <AuthContext.Provider value={values}>
        {children}
    </AuthContext.Provider>
  );

};