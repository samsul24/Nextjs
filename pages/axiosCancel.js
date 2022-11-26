import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const controller = new AbortController();
  const signal = controller.signal;

  let source = axios.CancelToken.source();
  axios.get(endpointUrl, { cancleToken: source.token }).them((res) => {});
  return (
    <div className="container mx-auto">
      <h1>Heloo Jumlah Data</h1>
    </div>
  );
};

export default Home;
// const [posts, setPosts] = useState([]);
// const apiEndPoint = "https://jsonplaceholder.typicode.com/posts/";
// useEffect(() => {
//   const getPost = async () => {
//     const { data: response } = await axios.get(apiEndPoint);

//     setPosts(response);
//   };
//   getPost();
// }, []);

// const addPost = async () => {
//   const items = { title: "New title", body: "new" };
//   await axios.post(apiEndPoint, items);
//   setPosts([items, ...posts]);
// };
