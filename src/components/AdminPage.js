import React,{useState,useEffect} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const AdminPage=()=>{
    const [contacts,setContacts]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const adminToken=sessionStorage.getItem("token");
    console.log("get admin token");
    console.log(adminToken);
    const getData=async()=>{
        setIsLoading(false);
        
        const getContacts=await axios.get("http://127.0.0.1:8000/api/admin/getContacts",{headers:{Authorization:"Bearer "+adminToken}});

        console.log("get contacts");
        console.log(getContacts);
        setContacts(getContacts.data);
        
    }
    useEffect(()=>{
        getData()
    },[])
    if(isLoading==false){
        console.log("get contacts");
        console.log(contacts);
        return(<> 
            <table class="table">
                <thead>
                    <th> Prenom</th>
                    <th> Nom</th>
                    <th> Adresse</th>
                    <th> Code Postal</th>
                    <th> Ville</th>
                    <th> Email</th>
                    <th> Telephone</th>
                    <th> Commentaire </th>
                    <th>Modifier</th>
                    <th> Supprimer</th>
                </thead> 
                <tbody> 
                {contacts.map((element)=>{
                    return(<tr> 
                        <td> {element.firstname} </td>
                        <td> {element.lastname}</td>
                        <td> {element.address}</td>
                        <td>{element.zipcode}</td>
                        <td> {element.city}</td>
                        <td> {element.email}</td> 
                        <td>{element.telephone} </td>
                        <td> {element.comment}</td> 
                        <td> <Link to={"/admin/modify/"+element.id}> Modifier </Link> </td>
                        <td> <button onClick={async()=>{
                            await axios.get("http://127.0.0.1:8000/api/admin/contact/delete/"+element.id);
                        }}> Supprimer</button></td>
                    </tr>)
                })}
                </tbody>
            </table>
        
        </>)
    }

    else{
        return (<div> Data Loading</div>);
    }
    
}

export default AdminPage;