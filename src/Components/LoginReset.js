import React, {useState} from "react";
import { Nav } from './Nav.js';

export const LoginReset = (props) => {
    const { logout } = props; 
    
    const [form, setForm] = useState({ userName: "", oldPassword:"", newPassword: "", repetPassword: ""});
    
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
        logout();
    }
    
    return (
    <div className="container">
        <Nav />
        <div className="login login__reset">
            <div className="logo">
                <div className="logo__icon">
                    <i></i>
                    <span></span>
                </div>
            </div>
            <form className="form">
                <h1 className="form__title reset">Reset</h1>
                <label>
                    User name
                    <input className="user__name password__reset" type="text" name="userName" value={form.userName} onChange={handleChange}/>
                </label>
                <label>
                    Old Password
                    <input className="password password__reset" type="password" name="oldPassword" value={form.oldPassword} onChange={handleChange}/>
                </label>
                <label>
                    New Password
                    <input className="password password__reset" type="password" name="newPassword" value={form.newPassword} onChange={handleChange}/>
                </label>
                <label>
                    Repeat New Password
                    <input className="password password__reset" type="password" name="repetPassword" value={form.repetPassword} onChange={handleChange}/>
                </label>
                <div className="btn btn__reset" onClick={onSubmit}><button className="btn btn__submit">Reset</button></div>
            </form>
        </div>
    </div>
  );
}