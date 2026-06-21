import React from "react";
import { PostForm, Container } from "../components";
import appwriteService from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";

function EditPost() {
  const [post, setPost] = React.useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((posts) => {
        if (posts) setPost(posts);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return (
    <div className="py-10">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  );
}

export default EditPost;
