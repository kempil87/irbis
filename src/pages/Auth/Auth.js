import React, {useState} from 'react';
import {Checkbox, CircularProgress, IconButton, InputAdornment, TextField} from "@mui/material";
import {Button, Spinner,} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {api} from "../../base/axios";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import {authSlice} from "../../redux/reducers/AuthSlice";
import {Link, useNavigate} from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [mail,setMail] = useState("")
  const [password,setPassword] = useState("")
  const [error, setError] = useState('')
  const [errorCheck, setErrorCheck] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loader, setLoader] = useState(false)
  const [cheked, setCheked] = useState(false)
  const {authToken} = authSlice.actions


  const authUser = () => {


    if (!cheked){
      setErrorCheck("Подтвердите соглашение")
    }
    else {
      if (!mail.match( /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)){
        setError("eMail некоректный")
      }
      else if ( password.length <6 ){
        setError("Пароль должен быть больше 6 символов")
      } else {
        setLoader(true)
        api.post("auth/login", {email: mail,password}).then((res) =>{
          // dispatch({type: "ADD_TOKEN", payload: res.data.token})
          dispatch(authToken(res.data.token))
          console.log(res.data)
          localStorage.setItem('token',res.data.token);
          localStorage.setItem('email',res.data.email);
          setLoader(false)
          navigate('/irbis')
        })
        .catch(() => {
          setError("Неверный логин или пароль")
        })
      }
    }
  }

  const handleChangeEmail = (e) => {
    setMail(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleCheked = () => {
    setCheked(!cheked)
    setErrorCheck('')
  }

  return (
    <div className='d-flex align-items-center justify-content-center h-100 flex-column'>
      <TextField
      placeholder='Почта'
      onChange={(e) => handleChangeEmail(e)}
      value={mail}
      type={'email'}
      id="outlined-basic" label="Почта" variant="outlined"

      />
      <TextField
        sx={{my:2,width:222}}
      placeholder='Пароль'
      onChange={(e) => handleChangePassword(e)}
      value={password}
      id="outlined-basic" label="Пароль" variant="outlined"
      type={showPassword? 'text' : 'password'}
        InputProps={{
          endAdornment:(
          <InputAdornment position="end">
            <IconButton  onClick={() => setShowPassword(!showPassword)} >
              {showPassword? <VisibilityOutlinedIcon/> : <VisibilityOffOutlinedIcon/>}
            </IconButton>
          </InputAdornment>)

        }}/>
      {error && (
        <div>{error}</div>
      )}
      <div className='d-flex'>
        <Checkbox onClick={handleCheked}/>
        <Button
          style={{backgroundColor:cheked ? '#1976d2' : '#d5d4d4',color:'#000',marginLeft:48,width:120,justifyContent:'center',display:'flex',alignItems:'center'}}
          onClick={authUser}>{loader ? <CircularProgress color={'secondary'} size={18}/> :'Войти'}</Button>
      </div>
      {errorCheck && (
        <div style={{fontSize:13,color:'#fa1212'}}>{errorCheck}</div>
      )}
      <Link style={{marginTop:12,textDecoration:'none'}} to='/registration'>Зарегестрироваться</Link>
      <h6 style={{fontSize:13,textAlign:'center',marginTop:10}} className='col-4'>Продолжая, вы соглашаетесь со сбором и обработкой персональных данных и пользовательским соглашением</h6>
    </div>
  );
};

export default Auth;