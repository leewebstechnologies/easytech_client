"use client";
import BlogItem from "./blogItem/BlogItem";
import { useState, useEffect } from "react";
import {API_BASE_URL} from "@/config/config";
// import ClipLoader from "react-spinners/ClipLoader";


const Blog = () => {
   const [blog, setBlog] = useState([]);
    const [loading, setLoading] = useState(true);
    // console.log(slider);
  
    useEffect(() => {
      const fetchItem = async () => {
        try {
          const response = await fetch(`${API_BASE_URL}/allblogs`)
          const data = await response.json();
          setBlog(data);
        } catch (error) {
          console.error('Error fetching data', error);
        } finally {
          setLoading(false);
        }
      };
      fetchItem();
    }, []);
  return (
    <div className="list-blog three-col lg:mt-[100px] sm:mt-16 mt-10 pb-[100px]">
      <div className="container">
        <h3 className="heading3 text-center">Latest News</h3>
        <div className="list grid lg:grid-cols-3 sm:grid-cols-2 gap-8 md:mt-10 mt-6">
          {blog.slice(0, 3).map((item) => (
            <BlogItem data={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Blog;
