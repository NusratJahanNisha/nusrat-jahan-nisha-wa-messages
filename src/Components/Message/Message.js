import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';
import Navbar from '../Navbar/Navbar';


// -------------------SEND MESSAGE PAGE---------------


const Message = () => {
    const { register, handleSubmit, errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
        console.log(data);
        const newMessage = { ...data }
        // http://localhost:8000/message
        fetch("https://mysterious-fjord-21720.herokuapp.com/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMessage)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Your message is send successfully.")
            })
    }

    return (
        <div style={{ height: "100vh" }}>
            <Navbar></Navbar>

            <form style={{ background: "white", borderRadius: "15px", padding: "40px" }} className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                 <input name="name" style={{ margin: '3px', marginLeft: "40px", width: '300px', height: '40px', border: "white", padding: "15px", boxShadow: "3px 3px 3px 3px lightGrey" }} ref={register({ required: true })} placeholder="Type your name" defaultValue={loggedInUser.name} />
                {errors.name && <span className="error" style={{ color: "red", margin: "5px" }}> Name is required</span>}

                <input name="email" style={{ margin: '3px', marginLeft: "40px", width: '300px', height: '40px', border: "white", padding: "15px", boxShadow: "3px 3px 3px 3px lightGrey" }} ref={register({ required: true })} placeholder="Type your email" defaultValue={loggedInUser.email} />
                {errors.email && <span className="error" style={{ color: "red", margin: "5px" }}> Email is required</span>} 

                <input name="message" style={{ margin: '3px', marginLeft: "40px", width: '300px', height: '40px', border: "white", padding: "15px", boxShadow: "3px 3px 3px 3px lightGrey" }} ref={register({ required: true })} placeholder="Type your message" />
                {errors.message && <span className="error" style={{ color: "red", margin: "5px" }}> Message is required</span>}
                <input style={{ marginLeft: "40px", marginTop: '10px', width: '100px', height: '40px', color: "white", backgroundColor: "green" }} type="submit" /> <br />
            </form>
        </div>
    );
};

export default Message;