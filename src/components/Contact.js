import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {link,Route,UseHistory,Link} from "react-router-dom";

const Contact=()=>{
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [telephone,setTelephone]=useState("");
    const [address,setAddress]=useState("");
    const [zipcode,setZipCode]=useState("");
    const [city,setCity]=useState("");
    const [comment,setComment]=useState("");
    const [emailMsg,setEmailMsg]=useState("");
    const [errorMsg,setErrorMsg]=useState("")
    const [emailValid,setEmailValid]=useState(false)
    const [errors,setErrors]=useState(false);
    const [validationMsg,setValidationMsg]=useState("");

    return (<>
    <br/>
       {emailMsg ?  <div class="text-center text-warning"> {emailMsg }</div> :<span> </span>}
       {errorMsg ? <div class="text-center text-danger"> {errorMsg} </div> :<span> </span>}

       {validationMsg ? <div class="text-center text-success"> {validationMsg}</div> :<span></span>} 
       <div class="d-flex justify-content-center">  
                    <Link class="text-dark" to="/modify/previous"> modifier un formulaire precedant </Link>
       </div>
        <form onSubmit={async(event)=>{
            event.preventDefault();
            setEmailMsg("");
            if(firstname!="" && lastname!="" && email!="" &&zipcode!="" &&city!="" &&comment!="" &&address!="" && telephone!=""){
                if(emailValid){
                    if(telephone.length!=10){
                        setErrors(true);
                        setErrorMsg("le numero de telephone doit inclure au moins 10 chiffres");
                    } 

                    else{
                        setValidationMsg("merci, votre formulaire de contact a bien été énvoyé");

                        //let regEx=/ \n /g;

                        //let getArray=regEx[Symbol.split](comment);
                        const lines = comment.split(/\r\n|\r|\n/);

                        console.log("get lines");
                        console.log(lines.join(""));
                       

                       const getData=await axios.post("http://127.0.0.1:8000/api/member/register",{
                            
                                firstname:firstname,
                                lastname:lastname,
                                telephone:telephone,
                                email:email,
                                city:city,
                                address:address,
                                zipcode:zipcode,
                                comment:comment

                           }
                            
                            
                            
                        );

                        console.log("get response");
                        console.log(getData);
                    }
                }

                else{
                    setErrors(true);
                    setErrorMsg("le format de l'email n'est pas valide")
                }
            }
        }}class="m-auto w-75">
       
        <div class="form-group">
            <label for="exampleInputPassword1">Prenom </label>
            <input onChange={(event)=>{
                setFirstName(event.target.value)
            }} type="text" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Nom </label>
            <input onChange={(event)=>{
                setLastName(event.target.value)
            }} type="nom" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="form-group m-auto">
            <label for="exampleInputEmail1">Email </label>
            <input onChange={(event)=>{
                if(event.target.value.includes("@")){
                    setEmailMsg("Format email validé");
                    setErrors(false);
                    setEmailValid(true);
                    setEmail(event.target.value)
                }

                else{
                    setEmailMsg("format email non valide");
                    setErrors(true);
                }
            }} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
           
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">telephone </label>
            <input onChange={(event)=>{
                setTelephone(event.target.value)
            }} type="text" class="form-control" id="exampleInputPassword1"/>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">addresse </label>
            <input onChange={(event)=>{
                setAddress(event.target.value)
            }} type="text" class="form-control" id="exampleInputPassword1" />
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">code postal </label>
            <input onChange={(event)=>{
                setZipCode(event.target.value)
            }}type="text" class="form-control" id="exampleInputPassword1" />
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">ville </label>
            <input onChange={(event)=>{
                setCity(event.target.value)
            }
                
            } type="text" class="form-control" id="exampleInputPassword1" />
        </div>

        <div class="form-group">
            <label for="exampleFormControlTextarea1">Saisir Votre Message</label>
            <textarea onChange={(event)=>{
                
                setComment(event.target.value)
            }} class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
        </div>

        
        
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    
    </>)
}

export default Contact;