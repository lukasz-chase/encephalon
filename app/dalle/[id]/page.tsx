import ImageInput from "@/components/ImageInput";
import ImagesDisplay from "@/components/ImagesDisplay";

type Props = {
  params: {
    id: string;
  };
};

const ImagePage = ({ params: { id } }: Props) => {
  return (
    <div className="flex items-center flex-col h-[93vh]">
      <ImageInput id={id} />
      <ImagesDisplay id={id} />
    </div>
  );
};

export default ImagePage;
