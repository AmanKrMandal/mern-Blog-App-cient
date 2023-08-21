import React from "react";

const UsersListHeader = (users) => {
  return (
    <div className=" relative bg-indigo-800">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
          alt=""
        />
        <div
          className="absolute inset-0 bg-indigo-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Authors List - {users?.users?.length}
        </h1>
        <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
          Over the past few years, Blog has become one of the most popular
          social media platforms. The visual-first setup is easy to use, highly
          engaging, and still growing. As an author, Blog offers unique
          opportunities to interact with your fans and boost the size of your
          audience. In this article, we’ll look at how you can use Blog to
          reach your writing goals
        </p>
      </div>
    </div>
  );
};

export default UsersListHeader;
