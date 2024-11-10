import React from "react";
import Post from "./Post";

const PostFeed = () => {
  const posts = [
    {
      id: 1,
      username: "user1",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrgV17cSDJEUDX8Trnt1Swm1PtSa7W8ZON6g&s",
      caption: "Sunny day!",
    },
    {
      id: 2,
      username: "user2",
      imageUrl:
        "https://as2.ftcdn.net/v2/jpg/04/30/06/67/1000_F_430066758_ZyGM5dsELCqo0Wdgd7fQDMaqLjILo6bE.jpg",
      caption: "Great vibes!",
    },
    {
      id: 3,
      username: "user3",
      imageUrl:
        "https://media.istockphoto.com/id/1325578537/photo/happy-indian-mother-having-fun-with-her-daughter-outdoor-family-and-love-concept-focus-on-mum.jpg?s=612x612&w=0&k=20&c=oSkEIgp2zOGO-ILqE4-MbsIUKZUhKNPNSzrFpSRAUxM=",
      caption: "Happy moments!",
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4 p-6 mt-16">
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostFeed;
