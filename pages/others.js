/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Book from "../models/Book";
import mongoose from "mongoose";

const Others = ({ books }) => {
  //console.log(books);
  return (
      <div>
        <div>
          <section className="text-gray-600 body-font dark:bg-gray-900">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4 justify-center">
                {books.map((item) => (
                    <Link passHref={true} key={item._id} href={`/product/${item.slug}`}>
                      <div
                          className="w-60 p-2 bg-gray-700 rounded-xl backdrop-filter backdrop-blur-md bg-opacity-50 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl cursor-pointer m-1">
                        {/* Image */}
                        <a className="block relative rounded overflow-hidden">
                          <img
                              alt="ecommerce"
                              className="h-80 w-full object-cover rounded-xl transition-all duration-300 transform hover:scale-110"
                              src={item.img}
                          />
                        </a>
                        <div className="p-2">
                          {/* Heading */}
                          <h2 className="font-bold text-lg mb-2">{item.title}</h2>
                          {/* Description */}
                          <p className="text-sm text-gray-600">{item.author}</p>
                        </div>
                        {/* CTA */}
                        <div className="m-2">
                          <a
                              role="button"
                              href="#"
                              className="text-blue-600 bg-white px-3 py-1 rounded-md hover:bg-white"
                          >
                            ${item.price}
                          </a>
                        </div>
                      </div>
                    </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let books = await Book.find({category: "others"});
  return {
    props: {books: JSON.parse(JSON.stringify(books))}, // will be passed to the page component as props
  };
}

export default Others;
