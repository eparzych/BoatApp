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
    <form>
      <input type="text" name="userName" value={form.userName} onChange={handleChange}/>
      <input type="password" name="password" value={form.password} onChange={handleChange}/>
      <button onClick={onSubmit}>Zaloguj</button>
    </form>
  );
}