import styles from "./card.module.css";
import Image from "next/image";

export default function Card({
  hospitalName,
  imgSrc,
}: {
  hospitalName: string;
  imgSrc: string;
}) {
  return (
    <div className="border-2 border-solid border-lime-600 w-1/6 h-[320px] shadow-2xl bg-lime-200 rounded-3xl overflow-hidden ">
      <div className="w-full h-[70%] relative rounded-3xl overflow-hidden">
        <Image
          src={imgSrc}
          alt={hospitalName}
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="text-2xl text-center h-[30%] relative ">
        <h1 className="pt-2">{hospitalName}</h1>
      </div>
    </div>
  );
}
