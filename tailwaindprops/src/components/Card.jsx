import React from "react";

const Card = ({
  username = " Happy",
  post = "Junior Developer",
  src = "../public/vite.svg",
}) => {
  return (
    <>
      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img
          className="w-24 h-24  md:rounded-none rounded-full mx-auto"
          src={src}
          alt=""
          width="384"
          height="512"
        ></img>
        <div className="pt-6 md:p-8 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale on large
              teams. It s easy to customize, adapts to any design, and the build
              size is tin\y.”
            </p>
          </blockquote>
          {username}
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
            <div className="text-slate-700 dark:text-slate-500"> {post}</div>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default Card;
