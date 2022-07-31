import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {api} from "../../base/axios";
import {IconButton, InputAdornment, TextField} from "@mui/material";
import {Button} from "react-bootstrap";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const Registration = () => {
  const history = useNavigate();
  const navigate = useNavigate();
  const [mail, setMail] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const [errorMail, setErrorMail] = useState('')
  const [errorPassword, setErrorPassword] = useState('')
  const [errorPassword2, setErrorPassword2] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [showPassword2, setShowPassword2] = useState(false)


  const handleChangeEmail = (e) => {
    setMail(e.target.value)
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleChangePassword2 = (e) => {
    setPassword2(e.target.value)
  }
  const registerUser = () => {

    if (password !== password2) {
      setErrorPassword2("Пароли не совпадают")
      return
    }

    if (!mail.match( /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/)) {
      setErrorMail("eMail некоректный")
    } else if (password.length < 6) {
      setErrorPassword("Пароль должен быть больше 6 символов")
    } else {
      api.post("auth/register", {email: mail, password}).then((res) => {
        setErrorMail(null)
        setErrorPassword(null)
        history('/');
      }).catch(() => {
        setErrorMail("Такой аккаунт уже существует")
      })
    }
  }
  return (
    <div className='d-flex align-items-center justify-content-center h-100 flex-column'>
      <TextField
        placeholder='Почта'
        onChange={(e) => handleChangeEmail(e)}
        value={mail}
        type={'email'}
        label="Почта" variant="outlined"

      />
      {errorMail && (
        <div style={{fontSize:13,color:'#fa1212'}}>{errorMail}</div>
      )}
      <TextField
        sx={{my:2,width:222}}
        placeholder='Пароль'
        onChange={(e) => handleChangePassword(e)}
        value={password}
        label="Пароль" variant="outlined"
        type={showPassword? 'text' : 'password'}
        InputProps={{
          endAdornment:(
            <InputAdornment position="end">
              <IconButton  onClick={() => setShowPassword(!showPassword)} >
                {showPassword? <VisibilityOutlinedIcon/> : <VisibilityOffOutlinedIcon/>}
              </IconButton>
            </InputAdornment>)
        }}
      />
      {errorPassword && (
        <div style={{fontSize:13,color:'#fa1212'}}>{errorPassword}</div>
      )}
      <TextField
        placeholder='Повторите пароль'
        onChange={(e) => handleChangePassword2(e)}
        value={password2}
        sx={{width:222}}
        label="Повторите пароль"
        variant="outlined"
        type={showPassword2? 'text' : 'password'}
        InputProps={{
          endAdornment:(
            <InputAdornment position="end">
              <IconButton  onClick={() => setShowPassword2(!showPassword2)} >
                {showPassword2? <VisibilityOutlinedIcon/> : <VisibilityOffOutlinedIcon/>}
              </IconButton>
            </InputAdornment>)

        }}
      />
      {errorPassword2 && (
        <div style={{fontSize:13,color:'#fa1212'}}>{errorPassword2}</div>
      )}
      <Button
        style={{marginTop:8}}
        onClick={registerUser}
      >Зарегестрироваться</Button>

      <Link style={{marginTop:8}} to='/login'>Есть аккаунт</Link>
    </div>
  );
};

export default Registration;