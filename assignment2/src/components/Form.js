import React, { useState } from "react";
import "./styles/Form.css"
function Form() {
    const [formData, setformData] = useState({ name: "", email: "", isMarried: "single", password: "" })
    const [errorData, setErrorData] = useState("") // to show error message to user.
    
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setformData((prevFormData) => ({...prevFormData, [name] : value}));
    }

    const validateName = (name) =>{
        let hasnum = /\d/;
        if(hasnum.test(name)){
            setErrorData("Name cannot contain any number");
            return false;
        }
        else{
            return true;
        }
    }

    const validateEmail = (email) =>{
       if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
        return true;
       }
       else{
        setErrorData("Invalid Email");
       }
    }
    const validatePassword = (pass) =>{
            const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if(regularExpression.test(pass)){
                return true;
            }
            else{
                setErrorData("Password must contain 6 or more characters with numbers, letters and special characters");
                return false;
            }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const {name, email, isMarried, password} = formData;
        if(validateName(name) && validateEmail(email) && validatePassword(password)){
            setErrorData("");
            alert(`Data submitted Name: ${name}, Email: ${email}, Marraige status: ${isMarried}`);
        }
        
    }

    return (
        <>
            < div className="container">
                <div className="form">
                    <form onSubmit={handleSubmit} id="form">
                        <input type="text" name="name" id="name" value={formData.name} placeholder="Enter name" onChange={handleChange}></input>
                        <input type="email" name="email" id="email" value={formData.email} placeholder="Enter Email" onChange={handleChange}></input>
                        <input type="password" name="password" id="pass" value={formData.password} placeholder="Enter Password" onChange={handleChange}></input>
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