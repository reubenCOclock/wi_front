import React,{useState,useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const ModifyContacts=()=>{

    let {id}=useParams();
    const [contactInfo,setContactInfo]=useState("");
    const adminToken=sessionStorage.getItem("token");

    const [isLoading,setIsLoading]=useState(true)
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
    const [emailValid,setEmailValid]=useState(true)
    const [errors,setErrors]=useState(false);
    const [validationMsg,setValidationMsg]=useState("");

    const getData=async()=>{
        setIsLoading(false);
        

        const getUserData=await axios.get("http://127.0.0.1:8000/api/admin/contactInfo/"+id,{headers:{Authorization:"Bearer "+adminToken}});
        console.log("get user data");
        console.log(getUserData);
        setContactInfo(getUserData.data[0]);

        setFirstName(getUserData.data[0].firstname);
        setLastName(getUserData.data[0].lastname);
        setEmail(getUserData.data[0].email);
        setCity(getUserData.data[0].city);
        setTelephone(getUserData.data[0].telephone);
        setAddress(getUserData.data[0].address);
        setZipCode(getUserData.data[0].zipcode)
        setComment(getUserData.data[0].comment)
    }

    useEffect(()=>{
        getData()
    },[])

    if(!isLoading){
        return(<> 
      
<form onSubmit={async(event)=>{
    event.preventDefault();
    console.log("the form has been submitted");

    let getResponse=await axios.post("http://127.0.0.1:8000/api/admin/updateContact/"+contactInfo.id,{
        firstname:firstname,
        lastname:lastname,
        address:address,
        telephone:telephone,
        comment:comment,

    })

    console.log("get response");
    console.log(getResponse);
}}>
     
    <div class="form-group">
         <label for="exampleInputPassword1"> firstname </label>
         <input onChange={async(event)=>{
             setFirstName(event.target.value);
             console.log(event.target.value)

             
         }} type="text" class="form-control" id="exampleInputPassword1" value={firstname}/>
   </div>

   <div class="form-group">
         <label for="exampleInputPassword1"> lastname </label>
         <input onChange={async(event)=>{
             setLastName(event.target.value);
             console.log(event.target.value)

             
         }} type="text" class="form-control" id="exampleInputPassword1" value={lastname}/>
   </div>

   <div class="form-group">
         <label for="exampleInputPassword1"> Telephone </label>
         <input onChange={async(event)=>{
             setTelephone(event.target.value)
             
         }} type="text" class="form-control" id="exampleInputPassword1" value={telephone}/>
   </div>

   <div class="form-group">
         <label for="exampleInputPassword1"> Address </label>
         <input onChange={async(event)=>{
             console.log("get value");
             console.log(event.target.value);
             setAddress(event.target.value);
            
             
         }} type="text" class="form-control" id="exampleInputPassword1" value={address}/>
   </div>

   <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea onChange={async(event)=>{
                setComment(event.target.value);
                console.log(event.target.value)
                
            }} class="form-control" id="exampleFormControlTextarea1" rows="5" value={comment}></textarea>
        </div>
    
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
           

        </>)
    }

    else{
        return(<div> The page is loading</div>)
    }
}

export default ModifyContacts