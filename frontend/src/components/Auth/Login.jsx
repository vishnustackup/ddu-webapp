import { useContext, useState } from "react";
import { LoginUser } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthProvider } from "../../context/AuthContext";
const Login = () => {
  const {setuser} = useContext(AuthProvider)
  const navigate = useNavigate();
  const [form, setform] = useState({
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
        setuser(res.user)
        toast.info("loggedin succesfully");
        setform(res.user);
        navigate("/allposts");
        console.log("logedin succesfully");
        setform({
          email: "",
          password: "",
        });
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
