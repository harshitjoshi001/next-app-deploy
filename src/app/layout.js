"use client";

import Modal from "@/components/Modal";
import "./globals.css";
import { createContext, useContext, useState } from "react";

export const PostsContext = createContext();

export default function RootLayout({ children }) {
  const [postData, setPostData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    body: "",
  });

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
            <button
              style={{ margin: "15px", padding: "10px" }}
              onClick={() => setIsOpen(true)}
            >
              Add Blogs
            </button>
          </nav>
          <Modal
            isOpen={isOpen}
            formData={formData}
            setFormData={setFormData}
            onClose={() => setIsOpen(false)}
            method={"POST"}
            endpoint={
              "https://672870c2270bd0b9755571d5.mockapi.io/api/v1/users"
            }
          />
          {children}
        </body>
      </PostsContext.Provider>
    </html>
  );
}

export const usePosts = () => useContext(PostsContext);
