import Topnav from "./components/header/topnav/Topnav"
import Menu from "./components/header/menu/Menu"
import Slider from "./components/slider/Slider"
import Service from "./components/service/Service"
import serviceData from "./data/service.json";
import blogData from "./data/blog.json";
import PaymentGatewayTwo from "./components/PaymentGateway/PaymentGatewayTwo";
import FormRequest from "./components/FormRequest/FormRequest";
import Testimonial from './components/testimonial/Testimonial';
import Blog from './components/blog/Blog';
import Partner from './components/partner/Partner';
import Footer from './components/footer/Footer';
import CaseStudy from "./components/CaseStudy/CaseStudy";
import PaymentGateway from "./components/PaymentGateway/PaymentGateway";


const Homepage = () => {
  return (
    <div className='overflow-x-hidden'>
      <header id="header">
        <Topnav />
        <Menu />
      </header>
      <main className="content">
        <Slider />
        <Service data={serviceData} />
        <PaymentGateway />
        <CaseStudy />
        <PaymentGatewayTwo />
        <FormRequest />
        <Testimonial />
        <Blog data={blogData} />
      </main> 
      <Partner className="lg:mt-[100px] sm:mt-16 mt-10" />
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  )
}

export default Homepage