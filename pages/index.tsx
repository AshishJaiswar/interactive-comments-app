import type { NextPage } from "next";
import Head from "next/head";

import Comments from "../components/comments";
import PostComment from "../components/post_comment";

const Home: NextPage = () => {
  return (
    <main className="flex h-screen flex-col justify-end bg-very-light-grey p-4 ">
      <Head>
        <title>Interactive Comment App</title>
      </Head>
      <div className="mx-auto w-full max-w-screen-md">
        <Comments />
        <PostComment />
      </div>
    </main>
  );
};

export default Home;
