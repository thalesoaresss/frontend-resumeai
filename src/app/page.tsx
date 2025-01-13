"use client"
import Logo from "./components/Logo";
import { HiArrowRight } from "react-icons/hi";
import { useForm, SubmitHandler } from "react-hook-form"
import { youtubeRegex } from "./utils/youtubeRegex";
import { useRouter } from "next/navigation";


interface Inputs{
  url: string
}

export default function Home() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const urlEncoded = encodeURIComponent(data.url)
    router.push(`/summary?url=${urlEncoded}`)
  }

  return (
    <main className="m-auto flex min-h-screen w-2/4 flex-col items-center p-24">
      <div className="pb-24">
        <Logo />
      </div>
      <form action="" className="mb-10 w-full" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex w-full rounded-full bg-dark-gun-metal">
          <input
            type="url"
            id="url"
            className="h-20 w-full rounded-full bg-dark-gun-metal px-6 text-2xl text-white focus:outline-none" placeholder="Cole o link do vídeo..."
            {...register("url", {
              required: "Um endereço de vídeo do youtube é obrigatório",
              pattern: {
                value: youtubeRegex,
                message: "O endereço de vídeo do youtube é invalido",
              }
            })}
          />
          <button type="submit" role="button" className="flex h-20 w-20 shrink-0 grow-0 items-center justify-center rounded-full bg-green-yellow"><HiArrowRight className="h-10 w-10 fill-black"/></button>
        </div>
        {errors.url && (
          <p className="mt-2 text-center text-white">{errors.url.message}</p>
        )}
      </form>
    </main>
  );
}
