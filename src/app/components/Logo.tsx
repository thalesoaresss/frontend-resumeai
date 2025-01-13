import Image from "next/image";
import React from "react";
import classNames from "classnames";

interface LogoProps{
  isLoading?: boolean
}

export default function logo({isLoading = false} : LogoProps){
  return (
    <Image
      src="/logo.svg"
      alt="Resumee.ai"
      width={280}
      height={48}
      className={classNames({
        "animate-pulse": isLoading,
        "rounded-md": true,
      })}
      />
  )
}
