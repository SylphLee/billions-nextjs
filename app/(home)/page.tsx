import Billion from "../../components/billion";
import styles from "../../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Billions",
};

async function getBillions() {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const billion = await getBillions();
  return (
    <div className={styles.container}>
      {billion.map((billion: { id: string; squareImage: string; name: string; netWorth: number; industries: string; }) => (
        <Billion
          id={billion.id}
          squareImage={billion.squareImage}
          name={billion.name}
          netWorth={billion.netWorth}
          industries={billion.industries}
        />
      ))}
    </div>
  );
}

export const runtime = "edge";
