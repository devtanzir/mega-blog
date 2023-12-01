import { useState, useEffect } from "react";
import { Container, Loader, PostCard } from "../components";
import appwriteService from "../appwrite/config";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {}, []);

  appwriteService.getPosts([])
  .then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  })
  .finally(() => setLoading(false));
  return ! loading ? (
    <div className="py-8 w-full">
      <Container>
        <div className="flex flex-wrap"></div>
        {posts.map((post) => (
          <div key={post.$id} className="p-2 w-1/4">
            <PostCard {...post} />
          </div>
        ))}
      </Container>
    </div>
  ): <Loader/>;
};

export default AllPost;
