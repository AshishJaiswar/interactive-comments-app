import type { NextPage } from "next";
import Image from "next/image";

const PostComment: NextPage = () => {
  return (
    <div className="grid-rows-commnet__container-row mt-2 grid grid-cols-commnet__container-col rounded bg-white p-2 sm:flex">
      <div className="order-1 my-auto h-7 w-7 sm:-order-none sm:my-0 sm:w-14">
        <Image
          src={`/avatars/image-juliusomo.webp`}
          alt="Picture of the author"
          width="64px"
          height="64px"
        />
      </div>
      <textarea
        className="col-span-3 mb-2 rounded-lg border border-solid border-light-grey px-4 py-2 outline-none hover:border-greyish-blue focus:border-greyish-blue sm:mx-3 sm:w-full"
        name="commnet__body"
        id="c_body"
        cols={30}
        rows={3}
        placeholder="Add a comment..."
        required
        maxLength={500}
      ></textarea>
      <button className="order-1 col-start-3 col-end-4 h-9 w-16 rounded-md bg-moderate-blue text-xs text-white hover:opacity-90 active:ring-4 active:ring-light-greyish-blue sm:-order-none sm:w-28 sm:text-sm">
        SEND
      </button>
    </div>
  );
};

export default PostComment;
