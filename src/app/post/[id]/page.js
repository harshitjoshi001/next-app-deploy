import styles from "../../../styles/post.module.css";

const PostDetail = async ({ params }) => {
  const { id } = params;

  const data = await fetch(
    `https://672870c2270bd0b9755571d5.mockapi.io/api/v1/users/${id}`,
    {
      next: { revalidate: 2 },
    }
  );
  const postDetails = await data.json();

  const { userId, body, title, likes, dislikes, views } = postDetails;

  return (
    <div className={styles.postMain}>
      <div className={styles.postContainer}>
        <h2> User Id: {userId}</h2>
        <h4>Title : {title}</h4>
        <h4>likes : {likes}</h4>
        <h4>dislikes : {dislikes}</h4>
        <h4>Views : {views}</h4>
        <h4>Description : {body}</h4>
      </div>
    </div>
  );
};

export default PostDetail;
