import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getsinglepost, Updatepost } from "../../Api/api";
import { toast } from "react-toastify";
const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setform] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const fetchsinglepost = async () => {
      try {
        const res = await getsinglepost(id);
        console.log(res.data);

        if (res.success) {
          setform({
            title: res.data.title,
            description: res.data.description,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchsinglepost();
  }, [id]);

  function handlechange(e) {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await Updatepost(id, form);
      if (res.success) {
        toast.success("post updated");
        navigate("/allposts");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handlechange}
          placeholder="Title"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handlechange}
          placeholder="Description"
        ></textarea>

        <button type="submit">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
