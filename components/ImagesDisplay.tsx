"use client";
import { fetchImage } from "@/api";
import { generatedImage } from "@/types/Image";
import { useQuery } from "@tanstack/react-query";
import Image from "./Image";
import Loading from "./Loading";

const ImagesDisplay = ({ id }: { id?: string }) => {
  const { data: images, isLoading } = useQuery<generatedImage>({
    queryFn: () => fetchImage(id),
    queryKey: ["images"],
  });
  console.log(images);
  if (isLoading) return <Loading />;
  return (
    <div className="mt-10 h-screen">
      <div className="divider">Results</div>
      <div className="grid p-5 gap-5 grid-cols-2 md:grid-cols-4">
        {images!.imageLinks?.map((url, index) => (
          <Image
            index={index}
            prompt={images?.prompt!}
            url={url}
            key={`${images?.prompt}-${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesDisplay;
