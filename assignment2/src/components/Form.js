import React, { useState } from "react";
import "./styles/Form.css"
function Form() {
    const [formData, setformData] = useState({ name: "", email: "", isMarried: "single" })
    const [errorData, setErrorData] = useState("")
    
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setformData((prevFormData) => ({...prevFormData, [name] : value}));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {name, email, isMarried} = formData;
        if(name.length < 5){
            setErrorData("Name too small");
        }
        else{
            let hasnum = /\d/;
            if(hasnum.test(name)){
                setErrorData("Name cannot contain number");
            }
            else{
                if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                    setErrorData("")
                    alert(`Data successfully submitted: Name: ${name}, Email: ${email}, Marraige Status: ${isMarried} `);
                }
                else{
                    setErrorData("Invalid email address");
                }
            }
        }
    }

    return (
        <>
            < div className="container">
                <div className="form">
                    <form onSubmit={handleSubmit} id="form">
                        <input type="text" name="name" id="name" value={formData.name} placeholder="Enter name" onChange={handleChange}></input>
                        <input type="email" name="email" id="name" value={formData.email} placeholder="Enter Email" onChange={handleChange}></input>
                        <label htmlFor="marraige">select marraige status: </label>
                            <select value={formData.isMarried} onChange={handleChange} name="isMarried" id="marraige">
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                            </select>
                        <br></br><button type="submit" id="submit">Submit</button>
                        <div className="err">
                        {errorData}
                    </div>
                    </form>
                    
                </div>
                
            </div>
        </>

    )
}

export default Form;