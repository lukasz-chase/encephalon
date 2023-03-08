import ImageInput from "@/components/ImageInput";

const Dalle = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <ImageInput />
      <div className="w-full flexCenter flex-col">
        <div className="divider pt-5">Tips</div>
        <h1 className="text-2xl uppercase text-light-accent p-5">
          To get the best possible results be sure to:
        </h1>
        <ul className="list-disc text-xl flex flex-col gap-5">
          <li>Describe the Subject in Detail</li>
          <li>Don’t Forget About the Background</li>
          <li>Specify an Art Style</li>
          <li>Set the Mood of the Scene</li>
        </ul>
      </div>
    </div>
  );
};

export default Dalle;
