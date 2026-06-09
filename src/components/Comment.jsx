export const Comment = ({ obj }) => {
  return (
    <article className="comment-card">
      <div className="comment-header">
        <strong>{obj.author}</strong>
        <span>{obj.created_date}</span>
      </div>

      <p>{obj.content}</p>
    </article>
  );
};
