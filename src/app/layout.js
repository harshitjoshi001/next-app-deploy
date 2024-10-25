"use client";

import "./globals.css";
import { createContext, useContext, useState } from "react";

export const PostsContext = createContext();

export default function RootLayout({ children }) {
  const [postData, setPostData] = useState([]);

  const revalidate = async () => {
    fetch("/api/revalidate?secret=SECRET_TOKEN", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.revalidated) {
          console.log(`Page revalidated successfully`);
        } else {
          console.log("Failed to revalidate the page");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <html lang="en">
      <PostsContext.Provider value={{ postData, setPostData }}>
        <body>
          <nav
            style={{
              backgroundColor: "Grey",
              height: "5vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              position: "sticky",
            }}
          >
            <h1 style={{ padding: "15px" }}>Namaste Blogging</h1>
            <button style={{ margin: "15px", padding: "10px" }}>
              Add Blogs
            </button>
          </nav>
          {children}
        </body>
      </PostsContext.Provider>
    </html>
  );
}

export const usePosts = () => useContext(PostsContext);
