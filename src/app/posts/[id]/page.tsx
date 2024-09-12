"use client";

import { unified } from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";

import { useState } from "react";
import { posts } from "../../../../data/posts";

export default function PostPage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>();
  const id = parseInt(params.id);

  const post = posts[id];

  const html_text = unified()
    .use(markdown)
    .use(remark2rehype)
    .use(html)
    .processSync(post.content);

  return (
    <div className="p-4">
      <h1 className="text-5xl font-bold">{post.title}</h1>
      <div
        className="prose max-width max-w-full my-10"
        dangerouslySetInnerHTML={{ __html: html_text.toString() }}
      ></div>
    </div>
  );
}
