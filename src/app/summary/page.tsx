"use client"
import { useSearchParams } from "next/navigation";

import { useEffect, useState } from "react"
import Logo from "../components/Logo";
import Link from "next/link";
import YoutubeVideo from "../components/YoutubeVideo";
import { HiOutlineCheckCircle } from "react-icons/hi";

interface SummaryData{
  summary: string;
  topics: string[];
}

export default function Summary({params}: {params: {url: string}}){
  const searchParams = useSearchParams();
  const [data, setData] = useState<SummaryData>()
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/summarize?url=${searchParams.get("url")}`, {
      method: "POST",
    }).then((res) => res.json())
       .then((data: SummaryData) => {
          console.log(data)
          setData(data);
          setLoading(false)
       })
       .catch((err) => {
          console.log(err)
          setError(true);
          setLoading(false);
       })
  }, [searchParams.get("url")])

  if(isLoading){
    return(
      <main className={`flex min-h-screen flex-col items-center justify-center text-white `}>
        <Logo isLoading={isLoading} />
        <p className="mt-10">Resumindo conteudo, por favor aguarde...</p>
      </main>
    )
  }

  return  (
    <main className="m-auto flex min-h-screen w-2/4 flex-col items-center p-4">
      <Link href="/" className="pb-8 md:pb-14">
        <Logo />
      </Link>
      <div className="flex w-full flex-col gap-4 md:flex-row text-white">
        <div className="basis-1/2">
          <YoutubeVideo videoUrl={searchParams.get("url") || ""}/>
        </div>
        <div className="basis-1/2">
        <h1 className="text-4xl font-semibold text-dim-gray">Resumo de video</h1>
        <div className="my-2 text-quick-silver ">{data.summary}</div>
        <ul className="text-white">
          {data.topics.map((topic, index) => (
            <li key={`topic-${index}`} className="flex items-start gap-2">
              <span>
                <HiOutlineCheckCircle  className="h-6 w-6 stroke-medium-purple" />
              </span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </main>
  )
}
