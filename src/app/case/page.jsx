"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import caseStudies from "@/app/data/case-study.json";
import Topnav from "@/app/components/header/topnav/Topnav";
import Menu from "@/app/components/header/menu/Menu";
import Footer from "@/app/components/footer/Footer";
import Breadcrumb from "@/app/components/section/Breadcrumb";

const Case = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Case Studies" },
    { id: "fintech", label: "Fintech Solutions" },
    { id: "investing", label: "Investment" },
    { id: "crypto", label: "Cryptocurrency" },
    { id: "blockchain", label: "Blockchain" },
    { id: "planning", label: "Financial Planning" },
  ];

  const filteredCases =
    selectedCategory === "all"
      ? caseStudies
      : caseStudies.filter((c) => c.category === selectedCategory);

  return (
    <div className="case-page overflow-x-hidden">
      <header id="header">
        <Topnav />
        <Menu />
      </header>
      <main className="content">
        <Breadcrumb
          link="Case Studies"
          img="/images/header.webp"
          title="Our Success Stories"
          desc="Explore real-world case studies showcasing how EasyTech transforms financial operations."
        />
      <section className="pt-20 pb-10 bg-gradient-to-b from-blue-50 to-white">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="heading2 mb-4">Success Stories</h1>
            <p className="body2 text-secondary max-w-2xl mx-auto">
              Discover how EasyTech empowers businesses and individuals to achieve their financial goals through innovative solutions and expert guidance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="text-center mb-8">
            <p className="body3 text-secondary">
              Showing {filteredCases.length} case studies
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredCases.map((caseItem) => (
              <div
                key={caseItem.id}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <Image
                    src={caseItem.img}
                    alt={caseItem.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold capitalize">
                      {caseItem.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col h-full">
                  <div className="text-xs text-blue-600 font-semibold uppercase mb-2">
                    {caseItem.subTitle}
                  </div>
                  <h3 className="heading5 mb-3 group-hover:text-blue-600 transition-colors">
                    {caseItem.title}
                  </h3>
                  <p className="body3 text-secondary mb-4 flex-grow">
                    {caseItem.desc}
                  </p>

                  {caseItem.details && (
                    <div className="mb-6 pt-4 border-t border-gray-200">
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <p className="text-gray-500 font-semibold mb-1">
                            Timeline
                          </p>
                          <p className="text-gray-700">
                            {caseItem.details.timeline}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-500 font-semibold mb-1">
                            Scale
                          </p>
                          <p className="text-gray-700">
                            {caseItem.details.clientSize}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <Link
                    href={`/case/${caseItem.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group/link"
                  >
                    <span>Read Full Case Study</span>
                    <Icon.ArrowUpRight
                      weight="bold"
                      className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading3 mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="body2 text-blue-100 mb-8">
              Join hundreds of satisfied clients who have transformed their financial operations with EasyTech. Let's discuss how we can help your organization achieve similar results.
            </p>
            <button className="button-main bg-white text-blue-900 hover:bg-blue-50">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
      </main>

      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
};

export default Case;