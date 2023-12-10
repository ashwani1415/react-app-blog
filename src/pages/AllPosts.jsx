import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import Loading from "../components/Loading";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    appwriteService
      .getPosts([])
      .then((posts) => {
        if (posts) {
          setIsLoading(false);
          setPosts(posts.documents);
        }
      })
      .catch((error) => console.log("get post error all post", error));
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        {isLoading ? (
          <div>
            <div className="flex justify-center	items-center">
              <Loading />
            </div>
            <h1 className="text-2xl font-bold hover:text-gray-500 text-center">
              Loading
            </h1>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default AllPost;
