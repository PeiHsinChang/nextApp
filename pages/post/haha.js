import React from "react";

import Head from "next/head";

export default function Post({ postData }) {
  return (
    <div>
      {/* Add this <Head> tag */}
      <Head>
        {/* <title>{postData.title}</title> */}
        <title>haha</title>
      </Head>

      {/* Keep the existing code here */}
    </div>
  );
}
