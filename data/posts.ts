import { Post, RawPost } from "@/types/post";

const rawPosts: { [key: number]: RawPost } = {
  8: {
    id: 8,
    title: "제목 8",
    subTitle: "부제목 8",
    content: "",
    tag: "#React #Vue #Angular #C 프로그래밍",
  },
  7: {
    id: 7,
    title: "제목 7",
    subTitle: "부제목 7",
    content: "",
    tag: "",
  },
  6: {
    id: 6,
    title: "제목 6",
    subTitle: "부제목 6",
    content: "",
    tag: "#React #Vue #Angular",
  },
  5: {
    id: 5,
    title: "제목 5",
    subTitle: "부제목 5",
    content: "",
    tag: "#React #Vue #Angular",
  },
  4: {
    id: 4,
    title: "제목 4",
    subTitle: "부제목 4",
    content: "",
    tag: "#React #Vue #Angular",
  },
  3: {
    id: 3,
    title: "제목 3",
    subTitle: "부제목 3",
    content: "",
    tag: "#React #Vue #Angular",
  },
  2: {
    id: 2,
    title: "제목 2",
    subTitle: "부제목 2",
    content: "",
    tag: "#Spring #React #Vue",
  },
  1: {
    id: 1,
    title: "제목 1",
    subTitle: "부제목 1",
    content: "",
    tag: "#C #Java #Python",
  },
};

rawPosts[8].content = `
# 제목 1 h1
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
## 제목 1 h2
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
### 제목 1 h3
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
#### 제목 1 h4
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
- Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus iure sed repudiandae, similique minima sunt doloremque molestiae nihil? Voluptas recusandae sequi illo doloremque cupiditate facilis obcaecati maxime mollitia dolore exercitationem.
`.trim();

rawPosts[7].content = `
# 제목 7
## 제목 7
### 제목 7
`.trim();

rawPosts[6].content = `
# 제목 6
## 제목 6
### 제목 6
`.trim();

rawPosts[5].content = `
# 제목 5
## 제목 5
### 제목 5
`.trim();

rawPosts[4].content = `
# 제목 4
## 제목 4
### 제목 4
`.trim();

rawPosts[3].content = `
# 제목 3
## 제목 3
### 제목 3
`.trim();

rawPosts[2].content = `
# 제목 2
## 제목 2
### 제목 2
`.trim();

rawPosts[1].content = `
# 제목 1
## 제목 1
### 제목 1

- 안녕
- 하세요.
    - 반갑습니다.
    - 반갑습니다.

\`\`\`c
#include <stdio.h>

int main() {
    return 0;
}
\`\`\`
`.trim();

export const posts: { [key: number]: Post } = Object.fromEntries(
  Object.entries(rawPosts).map(([key, value]) => {
    const { tag, ...post } = value;

    const tags = (" " + tag)
      .split(" #")
      .map((tag) => tag.trim().toLocaleUpperCase())
      .filter((tag) => tag !== "");

    const tagLinks = tags.map((tag) => {
      const tagSlog = tag.replace(/ /g, "-");

      return {
        link: `/posts/tags/${tagSlog}`,
        tag,
      };
    });

    return [
      key,
      {
        ...post,
        tags,
        tagLinks,
      },
    ];
  })
);

export const postsByTag: { [key: string]: { [key: number]: Post } } =
  Object.entries(posts).reduce(
    (acc, [key, post]) => {
      post.tags.forEach((tag) => {
        if (!acc[tag]) {
          acc[tag] = {};
        }
        acc[tag][Number(key)] = post;
      });
      return acc;
    },
    {} as { [key: string]: { [key: number]: Post } }
  );
