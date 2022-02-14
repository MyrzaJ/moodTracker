import axios from "axios"
import {AUTH_SUCCESS} from './actionTypes'

export function auth(email, password, isLogin) {
return async dispatch => {
         const authData ={
            email,
            password,
            returnSecureToken: true
        }

        let url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCC98MMcuJevCAHvp2RGULa34y6ShC32Lw'

        if (isLogin) {
            url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCC98MMcuJevCAHvp2RGULa34y6ShC32Lw'
        }


const response = await axios.post(url,authData)
const data = response.data
const expirationDate = new Date(new Date().getTime()  + data.expiresIn * 1000)

localStorage.setItem('token', data.idToken)
localStorage.setItem('userId', data.localId)
localStorage.setItem('expirationDate', data.expirationDate)

dispatch(authsuccess(data.idToken))
dispatch (authLogout(data.expiresIn))
}
}
export function authLogout(time){
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, time * 1000 )
    }
}

export function logout () {
    
localStorage.removeItem('token')
localStorage.removeItem('userId')
localStorage.removeItem('expirationDate')

    return {
        type: AUTH_SUCCESS
        
    }
}

export function authsuccess (token) {
    return{
       type: AUTH_SUCCESS ,
       token
    }
}