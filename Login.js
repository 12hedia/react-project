import logo from './logo.svg';
import './App.css';
import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';

function Login() {
let history = useHistory();
  return (

    <body>
 
        <form id='container'  >
          <input class="inputclass" type="text" placeholder="اســـــــــــم المستخـــــــدم" required />
          <input class="inputclass" type="password" placeholder="كلمـــــــــة العبـــــــــــور" required />
          <br /><br />
        <button id='submit'  onClick={() => history.push('/event')} > تسجيــــل الدخــــول </button><br></br><br />

          <Link to="/event" id='newcompte' > انشـــــــــــــــاء حســـــاب </Link>

        </form>
        <div id='div3' ></div>
        <div class='a1' id='div2'><p>  مرحبـــــــــــا بـــــكم </p> </div>
        <div class='a1' id='div1'> <p> الجمهورية التونسية <br />وزارة الشؤون الثقافية <br /> المندوبية الجهوية للشؤون الثقافية بصفاقس <br /> دار الثقافة ساقية الزيت</p>
        </div>
        <div id='logogov'></div>

        <p id='footercopy'>	&copy; ENET'COM Junior Entreprise </p>
   
     



    </body>

  );
}

export default Login;