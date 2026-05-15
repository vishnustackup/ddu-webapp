import { useState } from "react";
import { LoginUser } from "../../Api/api";
const Login = () => {

  const [form, setform] = useState({   // let form ={email:"", password:""}
    email: "",
    password: "",
  });

  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await LoginUser(form);
      if (res.success) {
      console.log("logedin succesfully");
      setform ({
        email:"",
        password:""
      })
      } else {
        console.log("error");
        
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form action="" onSubmit={handlesubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={form.email}
          onChange={handlechange}
        />
        <input
          type="password"
          name="password"
          value={form.password}
          placeholder="password"
          onChange={handlechange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Login;
