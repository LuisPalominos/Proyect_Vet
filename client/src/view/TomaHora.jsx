import React, {useState,useEffect} from 'react'
import {useParams,useNavigate} from "react-router-dom";
import axios from 'axios'
import { baseURL } from '../config';
import _ from "lodash";
import PageTemplate from '../template/PageTemplate'

const TomaHora = (props) => {
// ---------------------------------------------
// I) VARIABLES & HOOKS
// ---------------------------------------------
const navigate = useNavigate();
const [date,setDate]=useState("");
const [petname,setPetname]=useState("");
const [ownername,setOwnername]=useState("");
const [email,setEmail]=useState("");

const { id } = useParams();
const [errorMessages, setErrorMessages] = useState({});


// ---------------------------------------------
// II) HANDLERS & AUX FUNCTIONS
// ---------------------------------------------
const handleSubmit=(e)=>{
    e.preventDefault();
        addClient();
}

// const getOneClient =()=>{
//     axios.get(`${baseURL}/api/clients/${id}`)
//     .then(res => {
//         setDate(res.data.data.fullname);
//         setPetname(res.data.data.position);
//         setOwnername(res.data.data.position);
//         setEmail(res.data.data.position);
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// }
// const updateClient=()=>{
//     axios.put(`${baseURL}/api/clients/${id}`,{
//         fullname,
//         position
//     })
//         .then((response)=>{
//             navigate('/');
//         })
//         .catch((error) => {
//                 console.error(error);
//                 updateErrorMessages(error);
//             });
// }

const addClient=()=>{    
    axios.post(`${baseURL}/api/clients/`,{
        date,
        petname,
        ownername,
        email
    })
        .then((response)=>{
            navigate('/');
        })
        .catch((error) => {
                console.error(error);
                updateErrorMessages(error);
            });
}

// useEffect(() => {
//         getOneClient();
// }, [])

const handleClick=()=>{
    navigate('/');
};

const updateErrorMessages = (err) => {
    let errors = err.response.data.error;
    let errorMesagesToUpdate = _.mapValues(errors, (error) => {
        return error;
    });
    setErrorMessages(errorMesagesToUpdate);
};


// ---------------------------------------------
// III) JSX
// ---------------------------------------------
    return (
        <div>
            <PageTemplate>
                <div>
                    <h1 className='text-center my-5'>please put your info</h1>
                    <form className="container text-center" onSubmit={ handleSubmit }>
                        <div className="input-group mb-3 d-flex flex-column align-content-center">
                            <div className="m-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Date</span>
                                <input type="text" placeholder='YY/MM/DD' name='date' value={date} onChange={  (e) => setDate(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                                {_.has(errorMessages, "date") && (
                                <div className="text-danger small">{errorMessages.date}</div>)}
                            </div>
                            <div className="m-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Name of Pet</span>
                                <input type="text" name='petname' value={petname} onChange={  (e) => setPetname(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                                {_.has(errorMessages, "petname") && (
                                <div className="text-danger small">{errorMessages.petname}</div>)}
                            </div>
                            <div className="m-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Owner Pet</span>
                                <input type="text" name='ownername' value={ownername} onChange={  (e) => setOwnername(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                                {_.has(errorMessages, "ownername") && (
                                <div className="text-danger small">{errorMessages.ownername}</div>)}
                            </div>
                            <div className="m-3">
                                <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                <input type="email" name='email' value={email} onChange={  (e) => setEmail(e.target.value) } className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
                                {_.has(errorMessages, "email") && (
                                <div className="text-danger small">{errorMessages.email}</div>)}
                            </div>
                            <div className="d-flex justify-content-between m-3">
                                <button type="button" className="btn btn-primary" onClick={handleClick}>Cancel</button>
                                <button type="submit" className="btn btn-primary">Add</button>
                            </div>
                        </div>
                    </form>
                </div>
            </PageTemplate>
        </div>
    )
}

export default TomaHora