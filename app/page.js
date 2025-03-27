import Image from "next/image";
import styles from "./page.module.css";
import HomePageContents from "./components/HomepageContents/HomePageContents";

export default function Home() {
  return (
    <div className="mx-10">
      <HomePageContents></HomePageContents>
    </div>
  );
}
