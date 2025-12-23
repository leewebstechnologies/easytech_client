"use client";
import Menu from "../components/header/menu/Menu";
import Topnav from "../components/header/topnav/Topnav";
import Breadcrumb from '../components/section/Breadcrumb';
import Partner from "../components/partner/Partner";
import Footer from "../components/footer/Footer";
import blogData from "../data/blog.json";
import Image from "next/image";
import BlogList from '../components/section/BlogList';

const Blog = () => {
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <Topnav />
        <Menu />
      </header>
      <main className="content">
        <Breadcrumb
          link="Blog"
          img="/images/header.webp"
          title="Blog"
          desc="Discover valuable insights and expert advice on budgeting, saving, and smart financial planning through our comprehensive blog articles."
        />
        <BlogList data={blogData} />
      </main>

      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
export default Blog