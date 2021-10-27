import React, {useState} from "react";

export const Login = (props) => {
    const {setUserName} = props; 
    
    const [form, setForm] = useState({ username: "", password:""});
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    };


    const onSubmit = (e) => {
        e.preventDefault();
        
        fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify(form),            
            headers: {
                "Content-Type": "application/json"
            }
        })

        .then(response => {
            if (response.ok) {
                setUserName(form.username);
            }
        })
        .catch(error => {
          console.log(error);
        });
    }
  
    return (
        <div className="login">
            <div className="logo">
                <div className="logo__icon">
                    <i></i>
                    <span></span>
                </div>
            </div>
            <form className="form">
                <h1 className="form__title">Welcome</h1>
                <p className="form__subtitle">to our website</p>
                <p className="form__text">Log in</p>
                <label>
                    User name
                    <input className="user__name" type="text" name="username" value={form.username} onChange={handleChange}/>
                </label>
                <label>
                    Password
                    <input className="password" type="password" name="password" value={form.password} onChange={handleChange}/>
                </label>
                <div className="btn__login" onClick={onSubmit}><button className="btn btn__submit">Zaloguj</button></div>
            </form>
        </div>
  );
}
