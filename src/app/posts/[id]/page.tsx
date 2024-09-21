import rehypePrettyCode from "rehype-pretty-code";

import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
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
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: "wrap" })
    .use(rehypePrettyCode, {})
    .use(rehypeToc, {
      cssClasses: { toc: "toc fixed right-0 bg-white shadow rounded" },
    })
    .use(html)
    .process(post.content);

  return <PostDetailBody post={post} html={htmlText.toString()} />;
}
