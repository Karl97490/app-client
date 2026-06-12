import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Comment = ({ obj, getData }) => {
  const [comment, setComment] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    setComment(obj.comment);
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;
    // console.log(value);
    setComment(value);
  };

  const toggleEditBtn = () => {
    console.log("Editing the comment... ");
    setIsEditing(true);
  };

  const handleEditComment = async () => {
    const body = {
      comment,
    };
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_SERVER_URL}/comments/${obj.id}`,
        body,
      );
      setIsEditing(false);
      // console.log("Send comment...");
      // console.log(response);
      getData();
    } catch (error) {
      console.log(error);
      navigate("/error");
      // handling edit comment error
    }
  };

  const handleDeleteComment = async () => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_SERVER_URL}/comments/${obj.id}`,
      );
      console.log(response);
      getData();
    } catch (error) {
      console.log(error);
      navigate("/error");
    }
  };

  return (
    <div className="chat chat-start gap-2">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/22263436?v=4"
            alt="User profile"
          />
        </div>
      </div>

      <div className="chat-header gap-2 font-semibold">
        <span>{obj.author}</span>
        <span className="opacity-70">{obj.created_date}</span>
      </div>
      <div className="indicator pr-5">
        {obj.id.length > 2 && (
          <>
            <button
              className="indicator-item bg-error text-[8px] rounded-full h-4 w-4 mt-1"
              onClick={handleDeleteComment}
            >
              ✘
            </button>
            <button
              className="indicator-item bg-info text-[8px] rounded-full h-4 w-4 mr-4 mt-1"
              onClick={undefined}
            >
              ✎
            </button>
          </>
        )}

        <div className="chat-bubble max-w-full">{obj.comment}</div>
      </div>
    </div>
  );
};

{
  /* <article className="comment-card">
  <img src="https://i.pravatar.cc/40?img=1" alt="John" className="avatar" />
  <div className="comment-content">
    <div className="comment-meta">
      <strong>{obj.author}</strong>
      <span>{obj.created_date}</span>
    </div>
    <textarea
      className={`comment-area ${isEditing ? "editing" : ""}`}
      name="comment"
      value={comment}
      rows={2}
      onChange={handleChange}
      readOnly={!isEditing}
    />
  </div>

  {obj.id.length > 2 && (
    <div className="btn-container">
      {!isEditing ? (
        <>
          <button id="edit-btn" onClick={toggleEditBtn}>
            Edit
          </button>
          <button id="dlt-btn" onClick={handleDeleteComment}>
            Delete
          </button>
        </>
      ) : (
        <button id="send-btn" onClick={handleEditComment}>
          Send
        </button>
      )}
    </div>
  )}
</article>; */
}
