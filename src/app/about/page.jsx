"use client";
import Menu from "../components/header/menu/Menu.jsx";
import Topnav from "../components/header/topnav/Topnav";
import AboutSection from '../components/section/AboutSection';
import Counter from '../components/section/Counter';
import Partner from "../components/partner/Partner";
import Footer from "../components/footer/Footer";
import Service from "../components/service/Service"
import serviceData from "../data/service.json";
import { useEffect, useState } from "react";
import Loader from "../components/loader/Loader";
import Breadcrumb from "../components/section/Breadcrumb.jsx";


const About = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="overflow-x-hidden">
      <header id="header">
        <Topnav />
        <Menu />
      </header>
      <main className="content">
        {loading ? (
          <div className="flex justify-center items-center h-[500px]">
            <Loader />
          </div>
        ) : (
          <>
            <Breadcrumb
              link="About Us"
              img="/images/header.webp"
              title="About Us"
              desc="Testing breadcrumb visibility"
            />
            <AboutSection />
            <Counter classname="lg:pb-[50px] sm:pb-16 pb-10" />
            <Service data={serviceData} className="pb-10" />
          </>
        )}
      </main>

      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}
export default About