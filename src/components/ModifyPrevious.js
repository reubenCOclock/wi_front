import React,{useState,useEffect} from "react";
import axios from "axios";

const ModifyPrevious=()=>{
    const [contact,setContact]=useState("");
    const [currentEmail,setCurrentEmail]=useState("");
    const [email,setEmail]=useState("");
    const [telephone,setTelephone]=useState("");
    const [firstname,setFirstName]=useState("");
    const [lastname,setLastName]=useState("");
    const [city,setCity]=useState("");
    const [comment,setComment]=useState("");
    const [zipcode,setZipCode]=useState("");
    const [address,setAddress]=useState("");
    const [errorMsg,setErrorMsg]=useState("");

   

   
    return(<> 
      <div class="d-flex justify-content-center flex-column align-items-center"> 
      {errorMsg ? <div class="text-danger"> {errorMsg} </div> :<span></span>}
      <label for="email"> Saisir Votre Email</label>
        <input onChange={(event)=>{
            setCurrentEmail(event.target.value)
        }} type="text" name="email" placeholder="viuellez saisir votre email"/>
        <br/>
        <button onClick={async(event)=>{
            event.preventDefault();
            const findContact=await axios.post("http://127.0.0.1:8000/api/member/findByEmail",{email:currentEmail});
            console.log("get contact");
            console.log(findContact.data);
            setContact(findContact.data);

            setEmail(findContact.data.email);
            setFirstName(findContact.data.firstname);
            setLastName(findContact.data.lastname);
            setCity(findContact.data.city);
            setTelephone(findContact.data.telephone);
            setComment(findContact.data.comment);
            setZipCode(findContact.data.zipcode);
            setAddress(findContact.data.address);

        }} type="button" class="btn btn-primary"> Valider</button>
      </div>

      <br/>

      {contact!="" ? <form onSubmit={async(event)=>{
    event.preventDefault();
    
   

    
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
         <label for="exampleInputPassword1"> zipcode </label>
         <input onChange={async(event)=>{
             console.log("get value");
             console.log(event.target.value);
             setZipCode(event.target.value);
            
             
         }} type="text" class="form-control" id="exampleInputPassword1" value={zipcode}/>
   </div>

   <div class="form-group">
         <label for="exampleInputPassword1"> city </label>
         <input onChange={async(event)=>{
             console.log("get value");
             console.log(event.target.value);
             setCity(event.target.value);
            
             
         }} type="text" class="form-control" id="exampleInputPassword1" value={city}/>
   </div>

   <div class="form-group">
            <label for="exampleFormControlTextarea1">Message</label>
            <textarea onChange={async(event)=>{
                setComment(event.target.value);
                console.log(event.target.value)
                
            }} class="form-control" id="exampleFormControlTextarea1" rows="5" value={comment}></textarea>
        </div>
    
  <button onClick={async(event)=>{
      event.preventDefault();
      console.log("get contact id");
      console.log(contact.id)
      console.log("form submitted");
    if(email.includes("@")&& telephone.length==10){
        const getResponse=await axios.post("http://127.0.0.1:8000/api/modify_contact/"+contact.id,{
            firstname:firstname,
            lastname:lastname,
            email:email,
            telephone:telephone,
            city:city,
            zipcode:zipcode,
            address:address,
            comment:comment
  
  
        }) 

        console.log("get response");
        console.log(getResponse);
    } 

    else{
        setErrorMsg("numero de telephone doit etre 10 chiffres et l\'email doit etre sur le bon format")
    }
     
  }} type="submit" class="btn btn-primary">Submit</button>
</form> :<span> </span>}
        
    </>)
}

export default ModifyPrevious;