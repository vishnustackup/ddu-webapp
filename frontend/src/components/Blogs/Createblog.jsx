import { useState } from "react";
import { createpost } from "../../Api/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { useEffect } from "react";

const FormBox = styled.div`
  display: flex;
  text-align: center;
  width: 50%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
const Createblog = () => {
  const navigate = useNavigate();
  const [form, setform] = useState({
    title: "",
    description: "",
  });

  useEffect(()=>{
   const da= inputref.current.focus()
   console.log(da);
   
  })
  const handlechange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createpost(form);

      if (res.success) {
        toast.success("post created");
        setform({ title: "", description: "" });
        navigate("/allposts");
      } else {
        toast.warning(res.msg);
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <FormBox>
      <Form action="" onSubmit={handlesubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handlechange}
          placeholder="title"
          ref={inputref}
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handlechange}
          placeholder="description"
        ></textarea>

        <button type="submit">submit</button>
      </Form>
    </FormBox>
  );
};

export default Createblog;
