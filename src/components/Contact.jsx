import React, { useRef, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  });

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const formDone = (e) => {
    e.preventDefault();
    e.target.submit();

    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };
  return (
    <div
      name="contact"
      className=" w-full min-h-screen bg-[#0a192f]  flex justify-center items-center p-4 lg:pt-16"
    >
      <form
        action={`https://getform.io/f/${import.meta.env.VITE_ENDPOINT}`}
        method="POST"
        onSubmit={formDone}
        className=" max-w-[600px] w-full flex flex-col"
      >
        <div data-aos="zoom-in" className=" pb-8 text-gray-300">
          <p className=" text-4xl font-bold inline border-b-4 border-blue-600">
            Contact
          </p>
          <p className=" py-4">
            Submit the form below or shoot me an email- ajoypaul8875@gmail.com
          </p>
        </div>
        <input
          data-aos="fade-right"
          className=" bg-[#ccd6f6] p-2 rounded-md text-black outline-none"
          type="text"
          name="name"
          placeholder="Name"
          required={true}
          ref={nameRef}
        />
        <input
          data-aos="fade-left"
          className=" bg-[#ccd6f6] my-6 p-2 rounded-md text-black outline-none"
          type="email"
          name="email"
          placeholder="Email"
          required={true}
          ref={emailRef}
        />
        <textarea
          data-aos="zoom-in"
          className=" p-2 bg-[#ccd6f6] rounded-md text-black outline-none"
          name="message"
          placeholder="Message"
          required={true}
          rows={10}
          ref={messageRef}
        ></textarea>
        <button
          type="submit"
          className=" text-white border-2 rounded-md hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center justify-center duration-300"
        >
          Let's collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;
