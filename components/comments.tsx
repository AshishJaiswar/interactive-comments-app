import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface Props {
  username: string;
  date: string;
  comment: string;
  avatar: string;
}

const Comments: NextPage = () => {
  return (
    <div className="flex h-commnet__container flex-col-reverse overflow-auto">
      <UserComment
        username="maxblagun"
        date="1 min"
        comment="I just tried the best new restaurant in town - their food is amazing!"
        avatar="/avatars/image-maxblagun.png"
      />
      <div className="mb-3 border-l-2 border-light-grey pl-3 sm:ml-9 sm:pl-9">
        <Reply
          username="juliusomo"
          date="2 days ago"
          comment="I need some book recommendations. What's the last great book you read?"
          avatar="/avatars/image-juliusomo.png"
        />
        <Reply
          username="ramsesmiron"
          date="2 days ago"
          comment="I'm working on a new art project, and I'm feeling so inspired."
          avatar="avatars\image-ramsesmiron.png"
        />
      </div>
      <UserComment
        username="maxblagun"
        date="2 days ago"
        comment=" Woah, your project looks awesome! How long have you been coding for?
          I'm still new, but think I want to dive into React as well soon.
          Perhaps you can give me insight on where i can learn React? Thanks"
        avatar="/avatars/image-maxblagun.png"
      />
      <UserComment
        username="amyrobson"
        date="3 days ago"
        comment="Has anyone else watched that new series on Netflix? It's so addictive!"
        avatar="/avatars/image-amyrobson.png"
      />
    </div>
  );
};

const UserComment: NextPage<Props> = (props) => {
  return (
    <div className="grid-rows-commnet__container-row mb-3 grid grid-cols-commnet__container-col rounded bg-white p-2 sm:flex">
      <div className="order-1 my-auto flex h-9 w-20 items-center justify-evenly rounded-lg bg-very-light-grey sm:-order-none sm:my-0 sm:h-24 sm:w-12 sm:flex-col">
        <button className="w-2/4 rounded font-medium text-light-greyish-blue transition-all hover:text-moderate-blue active:ring-4 active:ring-light-greyish-blue">
          +
        </button>
        <span className="px-2 font-medium text-moderate-blue">2</span>
        <button className="w-2/4 rounded font-medium text-light-greyish-blue transition-all hover:text-moderate-blue active:ring-4 active:ring-light-greyish-blue">
          -
        </button>
      </div>
      <div className="col-span-3 mb-2 sm:mx-3 sm:w-full">
        <div className="flex">
          <div className="h-7 w-7">
            <Image
              src={props.avatar}
              alt="Picture of the author"
              width="64px"
              height="64px"
            />
          </div>
          <span className="pl-2 font-medium text-dark-blue">
            {props.username}
          </span>
          <span className="pl-2 text-greyish-blue">{props.date}</span>
        </div>
        <p className="pt-3 text-greyish-blue">{props.comment}</p>
      </div>

      <button className="order-1 col-start-3 col-end-4 h-9 w-20 text-right font-medium text-moderate-blue hover:opacity-90 sm:-order-none sm:w-28">
        <Image
          src={`/icons/icon-reply.svg`}
          alt="<-"
          width="12px"
          height="12px"
        />{" "}
        Reply
      </button>
    </div>
  );
};
const Reply: NextPage<Props> = (props) => {
  return (
    <div className="grid-rows-commnet__container-row mb-3 grid grid-cols-commnet__container-col rounded bg-white p-2 last:mb-0 sm:flex">
      <div className="order-1 my-auto flex h-9 w-20 items-center justify-evenly rounded-lg bg-very-light-grey sm:-order-none sm:my-0 sm:h-24 sm:w-12 sm:flex-col">
        <button className="w-2/4 rounded font-medium text-light-greyish-blue transition-all hover:text-moderate-blue active:ring-4 active:ring-light-greyish-blue">
          +
        </button>
        <span className="px-2 font-medium text-moderate-blue">2</span>
        <button className="w-2/4 rounded font-medium text-light-greyish-blue transition-all hover:text-moderate-blue active:ring-4 active:ring-light-greyish-blue">
          -
        </button>
      </div>
      <div className="col-span-3 mb-2 sm:mx-3 sm:w-full">
        <div className="flex">
          <div className="h-7 w-7">
            <Image
              src={`/avatars/image-juliusomo.webp`}
              alt="Picture of the author"
              width="64px"
              height="64px"
            />
          </div>
          <span className="pl-2 font-medium text-dark-blue">
            {props.username}
          </span>
          <span className="pl-2 text-greyish-blue">{props.date}</span>
        </div>
        <p className="pt-3 text-greyish-blue">{props.comment}</p>
      </div>

      <button className="order-1 col-start-3 col-end-4 h-9 w-20 text-right font-medium text-moderate-blue hover:opacity-90 sm:-order-none sm:w-28">
        <Image
          src={`/icons/icon-reply.svg`}
          alt="<-"
          width="12px"
          height="12px"
        />{" "}
        Reply
      </button>
    </div>
  );
};

export default Comments;
