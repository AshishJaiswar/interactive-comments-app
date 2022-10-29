import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

interface Props {
  username: string;
}

const Comments: NextPage = () => {
  return (
    <div className="flex h-commnet__container flex-col-reverse overflow-auto">
      <UserComment username="ashish" />
      <UserComment username="ashishek" />
      <UserComment username="alok" />
    </div>
  );
};

const UserComment: NextPage<Props> = (props) => {
  return (
    <div>
      <span>{props.username}</span>
      <p>Hey it's Ashish</p>
      <button>Reply</button>
    </div>
  );
};

export default Comments;
