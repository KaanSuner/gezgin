import {useState, useEffect} from "react";

import List from "./List";
import Form from "./Form";

function Contacts(){

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log(contacts);
    },[contacts])

    return (
        <div className="container">
            <List/>
            <Form addContact={setContacts}/>
        </div>
    );
}

export default Contacts;