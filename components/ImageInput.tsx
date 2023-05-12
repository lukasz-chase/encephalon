"use client";
import { fetchImage, postImage } from "@/api";
import { generateImage } from "@/types/Image";
import { generatedImage } from "@prisma/client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ImageInput = ({ id }: { id?: string }) => {
  const [prompt, setPrompt] = useState<string>("");
  const { data: image } = useQuery<generatedImage>({
    queryFn: () => fetchImage(id!),
    queryKey: ["image"],
  });
  useEffect(() => {
    if (image) {
      setPrompt(image!.prompt);
    }
  }, [image]);
  const { data: session } = useSession();
  const router = useRouter();
  let toastId: string;
  const { mutate } = useMutation(
    async (image: generateImage) => postImage(image),
    {
      onSuccess: (data: any) => {
        toast.success("Dalle has responded", { id: toastId });
        router.replace(`/dalle/${data.data.id}`);
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          toast.error(error?.response?.data.message, { id: toastId });
        }
      },
    }
  );

  const createImage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const image: generateImage = {
      prompt,
      userId: session?.user.id,
    };
    mutate(image);
    toastId = toast.loading("Dalle is thinking...", { id: toastId });
  };
  return (
    <div className="form-control w-full max-w-md md:max-w-lg lg:max-w-2xl mt-20">
      <form onSubmit={createImage}>
        <label className="label">
          <span className="label-text">Start with a detailed description</span>
        </label>
        <div className="input-group flex shadow-lg">
          <input
            type="text"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase..."
            className="input bg-slate-100 text-black w-full"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            disabled={!prompt || !session}
            type="submit"
            className="bg-[#11A37F] hover:opacity-50 text-black font-bold px-4 py-2 rounded disabled:bg-dark-accent disabled:cursor-not-allowed"
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageInput;
