import React, {useState} from "react";

export const Login = (props) => {
    const {setUserName} = props; 
    
    const [form, setForm] = useState({ userName: "", password:""});
    
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
        setUserName(form.userName);
    }
    
    return (
        <div className="login">
            <div className="logo">
                <div class="logo__icon">
                    <i></i>
                    <span></span>
                </div>
            </div>
            <form className="form">
                <h1 className="form__title">Welcome</h1>
                <p className="form__subtitle">to our website</p>
                <p className="form__text">Log in</p>
                <label for="">
                    User name
                    <input className="user__name" type="text" name="userName" value={form.userName} onChange={handleChange}/>
                </label>
                <label for="">
                    Password
                    <input className="password" type="password" name="password" value={form.password} onChange={handleChange}/>
                </label>
                <div className="btn" onClick={onSubmit}><button className="btn__login">Zaloguj</button></div>
            </form>
        </div>
  );
}