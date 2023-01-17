import React, {useRef} from "react";
import {firestore} from './firebase';
import {addDoc, collection} from '@firebase/firestore'

const Contact = () => {
  const messageRef = useRef();
  const ref = collection (firebase, "messages")
  const handleSend = async(e) => {
    e.preventDefault();
    console.log("log", messageRef.current.value);
    let data = {
      message:messageRef.current.value,
    }
    try {
      addDoc(ref, data);
    } catch (e) {
      console.log("error", e)
    }
  }


    return (
      <>
      <h2>Contact</h2>
      <form onSubmit={handleSend}>
        <label>Enter Message</label>
        <input type="text" ref={messageRef}/>
        <button type="submit">Send</button>
      </form>
      </>
    );
  };
  
  export default Contact;