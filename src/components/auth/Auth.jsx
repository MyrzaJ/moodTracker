import React, { Component } from 'react'
import './auth.css'
import Button from '@mui/material/Button';
import Input from '../UI/input/Input';
import axios from 'axios'
import { connect } from 'react-redux';
import { auth } from '../store/actions/auth';
function validateEmail (email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase());
  };


 class Auth extends Component {



state = {
    isFormValide: false,
    formControls:{
        email: {
value: '',
type: 'email',
label:'Email',
errorMessage: 'Введите корректный email',
valid: false,
touched: false,
validation: {
    required:true,
    email:true
}
        },
        password: {
            value: '',
            type: 'password',
            label:'Пароль',
            errorMessage: 'Введите корректный пароль',
            valid: false,
            touched: false,
            validation:{
                required:true,
               minLength: 6
            }
        }
    }
}



loginHandler = () => {
 this.props.auth(
    this.state.formControls.email.value,
    this.state.formControls.password.value,
true
 )
   

// try{
// const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCC98MMcuJevCAHvp2RGULa34y6ShC32Lw',authData)
// console.log(response.data)
// }catch(e){
// console.log(e);
// }

}

    regisHandler =  () => {
        this.props.auth(
            this.state.formControls.email.value,
            this.state.formControls.password.value,
            false
        )
   
    }


  
    sumbitHandler = e => {
        e.preventDefault()
    }


    validateControl (value, validation) {
if(!validation) {
    return true
}
let isValid = true

if(validation.required){
isValid = value.trim( )!== ' ' && isValid
}
if(validation.email){
    isValid = validateEmail(value) && isValid
}
if(validation.minLength) {
  isValid = value.length >= validation.minLength && isValid
}
return isValid
    }

    onChangeHandler =(e, controlName) => {
        // console.log(`${controlName}:`,e.target.value)
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}

        control.value = e.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] =control

      let isFormValide = true

      Object.keys(formControls).forEach(name=> {
          isFormValide =formControls[name].valid && isFormValide
      })


        this.setState({
formControls, isFormValide
        })
    }


renderInputs () {
   return Object.keys(this.state.formControls).map((controlName, index)=> {
  const control = this.state.formControls[controlName]
return(
    <Input
    key={controlName + index }
    type={control.type}
    value={control.value}
    valid={control.valid}
    touched={control.touched}
    label={control.label}
    shouldValidate={!!control.validation}
    errorMessage={control.errorMessage}
    onChange={e => this.onChangeHandler(e, controlName)}
    />
    
)
})

}

  render(){
    return (
        <div className='Auth'>
    <div className='signup'>
    {/* <h2 className='avtor'>Авторизация</h2> */}
    </div>
    <form className='form1' onSubmit={this.sumbitHandler}>
    {this.renderInputs()}
    <Button
     variant="contained" color="success"
     onClick={this.loginHandler}
     disabled={!this.state.isFormValide}
     >
     Войти
    </Button>
    <Button 
    color="secondary"
      onClick={this.regisHandler}
      disabled={!this.state.isFormValide}
      >Зарегестрироваться</Button>
    </form>
        </div>
      )
  }
}


function mapDispatchToProps(dispatch) {
    return{
        auth: (email, password, isLogin)=> dispatch(auth(email,password, isLogin))
    }
}


export default connect(null, mapDispatchToProps) (Auth)

