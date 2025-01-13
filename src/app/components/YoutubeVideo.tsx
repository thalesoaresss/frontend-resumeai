import React from "react";
import { youtubeRegex } from "../utils/youtubeRegex";

interface YoutubeVideoProps{
  videoUrl: string
}

export default function YoutubeVideo({videoUrl}: YoutubeVideoProps){
  const match = new RegExp(youtubeRegex).exec(videoUrl)
  if(!match || !match[6]){
    return <>Video não reconhecido</>
  }
  return (
    <iframe
      src = {`https://www.youtube.com/embed/${match[6]}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      allowFullScreen={true}
      className="aspect-video w-full rounded-lg shadow"
    />
  )
}
