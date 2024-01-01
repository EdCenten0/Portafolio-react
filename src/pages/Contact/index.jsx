import React from "react";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import MainPanel from "../../components/MainPanel";
import SecondaryPanel from "../../components/SecondaryPanel";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    console.log(errors);
    const docRef = addDoc(collection(db, "contactData"), data);
    reset();
    alert("Message sent!");
  });

  return (
    <>
      <MainPanel>
        <div className=" w-full">
          <h3 className=" text-xl font-bold py-4">Contact me by:</h3>

          <form action="" className="flex gap-6 flex-col" onSubmit={onSubmit}>
            <div className="flex w-full justify-between">
              <div className="flex flex-col  w-96">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="border border-gray-300 rounded-md p-2 text-teal-900"
                  {...register("name", {
                    required: { value: true, message: "Name is required" },
                    minLength: { value: 3, message: "Min length is 3" },
                    maxLength: { value: 40, message: "Max length is 40" },
                  })}
                />
                {errors.name && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </div>
              <div className="flex flex-col  w-96">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-gray-300 rounded-md p-2 text-teal-900"
                  {...register("email", {
                    required: { value: true, message: "Email is required" },
                    pattern: {
                      value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="border border-gray-300 rounded-md p-2 text-teal-900"
                {...register("message", {
                  required: { value: true, message: "Message is required" },
                  minLength: { value: 10, message: "Min length is 10" },
                  maxLength: { value: 500, message: "Max length is 500" },
                })}
              ></textarea>
              {errors.message && (
                <span className="text-red-500">{errors.message.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="bg-slate-700 text-white rounded-md p-2 mt-2"
            >
              Submit
            </button>
          </form>

          {/* <ul>
            <li className="py-2">
              <a href="" className=" text-lg underline text-slate-700">
                Email
              </a>
            </li>
            <li className="py-2">
              <a href="">Discord</a>
            </li>
            <li className="py-2">
              <a href="">Instagram</a>
            </li>
          </ul> */}
        </div>
        <div></div>
      </MainPanel>
    </>
  );
};

export default Contact;
