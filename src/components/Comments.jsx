import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Comment } from "./Comment";
import axios from "axios";

export const Comments = ({ sandwichId }) => {
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches/${sandwichId}?_embed=comments`,
      );
      // console.log(response);
      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    const body = {
      author: "New User",
      comment: addComment,
      created_date: "09/06/2026",
      sandwichId,
    };
    console.log("add comment =>> " + addComment);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/comments`,
        body,
      );
      // Loading state
      console.log(response);
      getData();
      setAddComment("");
    } catch (error) {
      console.log(error);
      navigate("/error");
      //handling comments error post
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAddComment((prev) => value);
  };

  return (
    <>
      <form className="comment-form">
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
          className="avatar"
        />

        <div className="comment-input-wrapper">
          <textarea
            placeholder="Add a comment..."
            rows="3"
            value={addComment}
            name="comment"
            onChange={handleChange}
          />

          <div className="comment-actions">
            <button
              type="submit"
              className="send-btn"
              name="send"
              onClick={handleAddComment}
            >
              Send
            </button>
          </div>
        </div>
      </form>

      <div className="comments-list">
        {comments.map((comment) => {
          return <Comment key={comment.id} obj={comment} getData={getData} />;
        })}
      </div>
    </>
  );
};
