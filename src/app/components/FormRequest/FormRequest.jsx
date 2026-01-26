"use client";
import { useState } from "react";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import "swiper/css/bundle";

const FormRequest = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.category) {
      newErrors.category = "Please select a category";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: "", email: "", category: "" });
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setLoading(false);
    }
  };
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
        <form
          onSubmit={handleSubmit}
          className="form md:mt-10 mt-6 flex max-lg:flex-col lg:items-center justify-between gap-8 pb-14 border-b border-line"
        >
          <div className="grid lg:grid-cols-3 gap-6 w-full">
            <div className="w-full">
              <input
                className={`body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100 ${
                  errors.name ? "border-2 border-red-500" : ""
                }`}
                placeholder="First Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="w-full">
              <input
                className={`body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100 ${
                  errors.email ? "border-2 border-red-500" : ""
                }`}
                placeholder="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="w-full select-arrow-one relative">
              <select
                className={`body3 md:py-[14px] py-3 px-5 bg-surface rounded-lg w-full bg-gray-100 ${
                  errors.category ? "border-2 border-red-500" : ""
                }`}
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                <option value="">Select Planning</option>
                <option value="Financial Planning">Financial Planning</option>
                <option value="Business Planning">Business Planning</option>
                <option value="Development Planning">
                  Development Planning
                </option>
              </select>
              <Icon.CaretDownIcon className="absolute top-1/2 -translate-y-1/2 right-5" />
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`button-main flex-shrink-0 rounded-full text-white ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-blue-500"
            }`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
        {success && (
          <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            Form submitted successfully!
          </div>
        )}
      </div>
    </div>
  );
};
export default FormRequest;
