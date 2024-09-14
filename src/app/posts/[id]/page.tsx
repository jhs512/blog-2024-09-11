import rehypePrettyCode from "rehype-pretty-code";

import html from "rehype-stringify";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import { unified } from "unified";

import { posts } from "@/../data/posts";
import PostDetailBody from "./PostDetailBody";

export default async function PostDetail({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id);

  const post = posts[id];

  const htmlText = await unified()
    .use(markdown)
    .use(remark2rehype)
    .use(rehypePrettyCode, {})
    .use(html)
    .process(post.content);

  return <PostDetailBody post={post} html={htmlText.toString()} />;
}
