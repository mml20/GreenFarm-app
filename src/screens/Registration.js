import React from 'react';
import './css/Auth.css'
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import {Link} from 'react-router-dom';
import next_button from '../components/next_button.svg';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";

function Auth(){
    const firebaseConfig = {
  apiKey: "AIzaSyDsxe0dtYKVN0g_GJIHENK6NOVFYkgD6-Y",
  authDomain: "greenfarm-bf9d6.firebaseapp.com",
  projectId: "greenfarm-bf9d6",
  storageBucket: "greenfarm-bf9d6.appspot.com",
  messagingSenderId: "1022282893583",
  appId: "1:1022282893583:web:bdfbc702e654043d46167a"
};
    firebase.initializeApp(firebaseConfig);
    const auth = getAuth();
        return(
            <div className="auth_body">
                <div id="modal">
                    <i className="fa fa-times" aria-hidden="true" onClick={() => {let modal = document.getElementById('modal'); let form = document.getElementById('auth_form'); modal.style.display = 'none'; form.style.filter = 'none'}}></i>
                    <h4>На введенную почту отправлено письмо восстановления пароля. Измените пароль и войдите снова.</h4>
                </div>
                <div id="auth_form">
                    <h1>Вход</h1>
                    <div>
                        <p>Логин</p>
                        <input type="text" id="email_input"/>
                        <p>Пароль</p>
                        <input type="password" id="password_input" onKeyPress={() => {let email = document.getElementById('email_input').value; let error_field = document.getElementById('error_field'); let password = document.getElementById('password_input').value; signInWithEmailAndPassword(auth, email, password).then((userCredential) => {const user = userCredential.user; console.log(user); window.location.href = '/panel/dashboard';}).catch((error) => { error_field.style.display = 'block'; const errorCode = error.code; const errorMessage = error.message;})}}/>
                        <br/>
                    </div>
                    <button  onClick={() => {let email = document.getElementById('email_input').value; let error_field = document.getElementById('error_field'); let password = document.getElementById('password_input').value; signInWithEmailAndPassword(auth, email, password).then((userCredential) => {const user = userCredential.user; console.log(user); window.location.href = '/panel/dashboard';}).catch((error) => { error_field.style.display = 'block'; const errorCode = error.code; const errorMessage = error.message;})}} className="button_next"><img alt=""  style={{pointerEvents: 'none'}}  src={next_button} className="button_img"></img></button>
                    <h4 id="error_field"><i className="fa fa-exclamation-circle" aria-hidden="true"></i> Неправильно указан логин и/или пароль</h4>
                    <span onClick={() => {let email = document.getElementById('email_input').value; let modal = document.getElementById('modal'); let form = document.getElementById('auth_form'); sendPasswordResetEmail(auth, email).then(() => {modal.style.display = 'block'; form.style.filter = 'blur(5px)'}).catch((error) => {const errorCode = error.code; const errorMessage = error.message;});}}>Забыли пароль?</span><span> | </span><span onClick={() => {window.location.href = '/registration';}}>Создать новый аккаунт</span>
                </div>
            </div>
)}

export default Auth;
