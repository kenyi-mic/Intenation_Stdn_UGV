import React, {useState} from 'react'

function Contact(){

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")


    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleEmailChange(e){
        setEmail(e.target.value);
    }

    function handleMessageChange(e){
        setMessage(e.target.value);
    }

    function handleSubmit(e){
        alert("Submitted successful.")
        e.preventDefault()
    }

    return (
        <div className=" flex flex-col box-sizzing-border-box container m-7 bg-urple-500">
      <form onSubmit={handleSubmit} className=" w-12 " >
           <fieldset>
               <legend className="text-black">Contact Us</legend>
               <legend>Name:</legend>
               <input className="outline-none bg-gray-500 "command type="text" name={name} value={name} onChange={handleNameChange}/>
               <br/>
               <legend>Email:</legend>
               <input className="outline-none bg-gray-500 " type="text" name={email} value={email} onChange={handleEmailChange}/>
               <br/>
               <legend>Message:</legend>
               <textarea className="outline-none bg-gray-500 " type="text" name={message} value={message} onChange={handleMessageChange}/>

           </fieldset>
           <input className="text-grey-500 bg-pink-800  p-3 m-2" type="submit" value="Submit"/>
       </form>
        </div>
       
    )
}

export default Contact;