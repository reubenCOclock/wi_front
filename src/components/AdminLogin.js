import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useHistory} from "react-router-dom";


const AdminLogin=()=>{
    let history=useHistory();
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const [errorMsg,setErrorMsg]=useState("");
    return(<> 
    {errorMsg ? <div class="text-center text-danger"> {errorMsg }</div> :<span> </span>}
     <form onSubmit={async(event)=>{
         event.preventDefault();
         if(password!="" && email!=""){
             const getResponse=await axios.post("http://127.0.0.1:8000/api/admin_login",{
                 email:email,
                 password:password
             })

             if(getResponse.data=="bad credentials"){
                 setErrorMsg("bad credentials");
             }

             else{
                 console.log(getResponse.data.token)
                 sessionStorage.setItem("token",getResponse.data.token)
                 history.push("/admin/page")
             }
         }
     }}class="w-50 m-auto"> 
         <div class="form-group">
            <label for="exampleInputPassword1">email</label>
            <input onChange={(event)=>{
                setEmail(event.target.value)
            }} type="email" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">password </label>
            <input onChange={(event)=>{
                setPassword(event.target.value)
            }} type="password" class="form-control" id="exampleInputPassword1"/>
        </div> 
        <div class="d-flex justify-content-center"> 
        <button type="submit" class="btn btn-primary w-25"> Envoyer</button>
        </div>
        

    </form>
    </>)
}

export default AdminLogin;
