import { useState } from "react";

function Form(addContact) {
    const [form, setForm] = useState({ fullname:"", phone:""})
    
    const onChangeInput = (e) => {
        setForm ({...form, [e.target.name]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();

        addContact([form])

        console.log(form);
    };

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
            <div>
                <input name="fullname" placeholder="Full name" onChange={onChangeInput}></input>
            </div>

            <div>
                <input name="phone" placeholder="phone no"  onChange={onChangeInput}></input>
            </div>
            <div>
                <button>Add</button>
            </div>
            </form>
        </div>
    )
}

export default Form;