import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setform] = useState({
    title: "",
    description: "",
  });
  return <div></div>;
};

export default EditBlog;
