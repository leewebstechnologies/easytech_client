"use client";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import "swiper/css/bundle";
const FormRequest = () => {
  return (
    <div className="form-request-block lg:mt-[100px] sm:mt-16 mt-10">
      <div className="container">
        <div className="heading flex max-xl:flex-col xl:items-center gap-4 justify-between">
          <div className="heading3">Request a free call back.</div>
          <div className="body3 text-secondary">
            Get personalized financial advice to help reach your financial
            goals.
          </div>
        </div>
        <form className="form md:mt-10 mt-6 flex max-lg:flex-col lg:items-center justify-between gap-8 pb-14 border-b border-line">
          <div className="grid lg:grid-cols-3 gap-6 w-full">
            <div className="w-full">
              <input
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100"
                placeholder="First Name"
                name="name"
                type="text"
              />
            </div>
            <div className="w-full">
              <input
                className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100"
                placeholder="Email"
                name="email"
                type="email"
              />
            </div>
            <div className="w-full select-arrow-one relative">
              <select className="body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100" name="category">
                <option value="">Select Planning</option>
                <option value="Financial Planning">Financial Planning</option>
                <option value="Business Planning">Business Planning</option>
                <option value="Development Planning">Development Planning</option>
              </select>
              <Icon.CaretDownIcon className="absolute top-1/2 -translate-y-1/2 right-5" />
            </div>
          </div>
          <button className="button-main flex-shrink-0 bg-black hover:bg-blue-500 text-white rounded-full">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default FormRequest;
