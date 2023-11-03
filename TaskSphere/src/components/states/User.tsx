import {useState} from 'react';

type AuthUser={
    email:string,
    name:string
}

export const User =()=>{
    const [user,setUser] =useState<null | AuthUser>(null);
    const handleLogIn =()=>{
        setUser({
            name:'Riya',
            email:'riya@gmail.com'
        })
    }
    const handleLogout =()=>{
        setUser(null)
    }

    return (
        <div>
            <button onClick={handleLogIn}></button>
            <button onClick={handleLogout}></button>
            <div>user name is {user?.name}</div>
            <div>user email is{user?.email} </div>
        </div>
    )
}