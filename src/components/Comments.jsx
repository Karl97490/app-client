import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Comment } from "./Comment";
import axios from "axios";

export const Comments = ({ sandwichId }) => {
  const [comments, setComments] = useState([]);
  const [addComment, setAddComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isPosting, setIsPosting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/sandwiches/${sandwichId}?_embed=comments`,
      );
      setIsLoading(false);
      setComments(response.data.comments);
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  const handleAddComment = async (e) => {
    setIsPosting(true);
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
      setIsPosting(false);
      getData();
      setAddComment("");
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAddComment((prev) => value);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center mt-4">
          <div className="alert alert-info max-w-md">
            <span>Comments is loading...</span>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {comments.length ? (
            comments.map((comment) => {
              return (
                <Comment key={comment.id} obj={comment} getData={getData} />
              );
            })
          ) : (
            <div className="flex justify-center mt-4">
              <div className="alert max-w-md">
                <span>No comments for the moment.</span>
              </div>
            </div>
          )}
        </div>
      )}

      <div className="divider"></div>
      <form className="flex flex-col gap-3">
        <textarea
          className="textarea textarea-bordered w-full pt-3 "
          placeholder="Type your comment..."
          name="comment"
          value={addComment}
          onChange={handleChange}
        />

        <div className="flex justify-end">
          <button
            className="btn btn-primary  btn-sm"
            type="submit"
            name="send"
            onClick={handleAddComment}
            disabled={isPosting}
          >
            {isPosting ? (
              <span className="loading loading-spinner text-primary-content"></span>
            ) : (
              "Post comment"
            )}
          </button>
        </div>
      </form>
    </>
  );
};
