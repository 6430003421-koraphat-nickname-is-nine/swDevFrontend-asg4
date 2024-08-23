import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <Banner />
      <div>
        <div className="px-[24px] text-3xl m-[24px] bg-lime-600/80  text-white inline-block rounded-[16px]">
          Participating hospitals
        </div>
        <div className="flex flex-row flex-wrap justify-around content-around m-[24px]">
          <Card hospitalName="Chulalongkorn Hospital" imgSrc="/img/chula.jpg" />
          <Card hospitalName="Rajavithi Hospital" imgSrc="/img/rajavithi.jpg" />
          <Card
            hospitalName="Thammasat University Hospital"
            imgSrc="/img/thammasat.jpg"
          />
        </div>
      </div>
    </main>
  );
}
