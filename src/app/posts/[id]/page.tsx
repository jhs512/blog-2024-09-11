"use client";

import { LocaleCalendar } from "@/components/customUi/locale-calendar";
import { Button } from "@/components/ui/button";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
import { faArrowsToEye } from "@fortawesome/free-solid-svg-icons/faArrowsToEye";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { posts } from "../../../../data/posts";

export default function PostPage({ params }: { params: { id: string } }) {
  const [date, setDate] = useState<Date | undefined>();
  const id = parseInt(params.id);

  const post = posts[id];

  return (
    <div className="text-4xl">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
