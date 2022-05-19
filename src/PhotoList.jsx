import { useState, useEffect } from "react";
import React from "react";

import axios from "axios";
import "./PhotoList.css";

const PhotoList = () => {
  const [posts, setPosts] = useState([]);
  const numberPage = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const loadPosts = async (page) => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`
    );
    setPosts(response.data);
  };

  useEffect(() => {
    loadPosts(1);
  }, []);

  const NextPage = (page) => {
    loadPosts(page);
  };

  return (
    <>
      <div className="PhotoList">
        {posts.map((item) => {
          return (
            <div className="PhotoList__card" key={item.id}>
              <img
                className="PhotoList__img"
                src={item.url}
                alt={item.thumbnaiURL}
              />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className="btn-number">
        {numberPage.map((page) => {
          return (
            <button
              onClick={() => {
                NextPage(page);
              }}
            >
              {page}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default PhotoList;
