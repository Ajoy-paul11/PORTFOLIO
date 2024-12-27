import React, { useEffect } from "react";
import bookstore from "../Assets/bookstore.png";
import blogapp from "../Assets/blogapp.png";
import REST from "../Assets/REST.png";
import reviewBook from "../Assets/reviewBook.png";
import quizOnline from "../Assets/quizOnline.png";
import tmdb from "../Assets/tmdb.png";
import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init();
  });

  return (
    <div
      name="projects"
      className=" bg-[#0a192f] w-full md:min-h-screen text-gray-300 lg:pb-8"
    >
      <div className=" max-w-[1000px] mx-auto w-full h-full flex flex-col justify-center p-4 lg:px-24">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className=" pt-20 lg:py-8"
        >
          <p className=" text-4xl font-bold inline border-b-4 border-blue-600">
            Projects
          </p>
          <p className=" py-6">Check out some of my recent projects</p>
        </div>
        {/* Card container */}
        <div className=" w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-4  ">
          {/* Card Item */}
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            style={{
              backgroundImage: `url(${bookstore})`,
            }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-xl text-white font-bold tracking-wider">
                BookStore Application
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://book-store-project-jjg2.onrender.com"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/Book-Store-Project"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${blogapp})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                Blog App
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://blog-app-roan-three.vercel.app"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/Blog-App"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${REST})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                REST API
              </span>
              <div className=" pt-8 text-center">
                <a href="https://rest-api-cc13.onrender.com" target="_blank">
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/REST-API"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${reviewBook})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                Books Review
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://bookreview-frontend.onrender.com"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/BookReview"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${quizOnline})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                Online Quiz Test
              </span>
              <div className=" pt-8 text-center">
                <a href="https://quiz-coding-test.netlify.app" target="_blank">
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/Online-Quiz"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1500"
            style={{ backgroundImage: `url(${tmdb})` }}
            className=" shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className=" opacity-0 group-hover:opacity-100">
              <span className=" text-2xl text-white font-bold tracking-wider">
                TMDB Movie
              </span>
              <div className=" pt-8 text-center">
                <a
                  href="https://tmdb-movie-backend.onrender.com"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Ajoy-paul11/TMDB-Movie-Backend"
                  target="_blank"
                >
                  <button className=" text-center rounded-lg bg-white px-4 py-2 m-2 text-gray-700 text-lg font-bold">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
