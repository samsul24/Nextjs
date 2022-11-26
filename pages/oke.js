import axios from "axios";
import React, { useState } from "react";

const Oke = () => {
  const [posts, setPosts] = useState([]);
  const apiEndPoint1 = "https://jsonplaceholder.typicode.com/posts";
  const apiEndPoint = "https://jsonplaceholder.typicode.com/posts?q=";
  let cancelToken;
  const handleSearchChange = async (e) => {
    const value = e.target.value;
    if (cancelToken) {
      cancelToken.cancel("Operations cancelled due to new request");
    }
    cancelToken = axios.CancelToken.source();
    let result;
    try {
      result = await axios.get(apiEndPoint + value, {
        cancelToken: cancelToken.token,
      });
      const { data: res } = await axios.get(apiEndPoint + value);
      setPosts(res);
    } catch (error) {
      console.log(error);
    }
    console.log({ result });
  };

  const handleUpdate = async (items) => {
    items.title = "Update title";
    await axios.put(apiEndPoint1 + "/" + items.id);
    const postsClone = [...posts];
    const index = postsClone.indexOf(items);
    postsClone[index] = { ...items };
    setPosts(postsClone);
    alert("berhasil update data");
  };

  const handeDelete = async (items) => {
    await axios.delete(apiEndPoint1 + "/" + items.id + items);
    setPosts(posts.filter((p) => p.id != items.id));
    alert("berhasil hapus data");
  };
  return (
    <div className="container mx-auto my-auto justify-center items-center">
      <div className="max-w-md mx-auto bg-white mt-28  rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <input
              onChange={handleSearchChange}
              className="w-96 h-9 border-solid border-2 "
              type="text"
              placeholder="Search"
            ></input>

            <table className="table-auto mt-20">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((items) => (
                  <tr key={items.id}>
                    <td>{items.title}</td>
                    <td>
                      <button
                        onClick={() => handleUpdate(items)}
                        className="rounded-lg bg-yellow-500 text-white p-2"
                      >
                        <h1>Update</h1>
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handeDelete(items)}
                        className="rounded-lg bg-red-500 text-white p-2"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Oke;
