"use client";

import Link from "next/link";
import styles from "../styles/billion.module.css";
import { useRouter } from "next/navigation";

interface IBillionsProps {
  name: string;
  id: string;
  squareImage: string;
  netWorth: number;
  industries:string;
}

export default function Billions({ name, id, squareImage, netWorth, industries }: IBillionsProps) {
  const router = useRouter();
  const onClick = () => {
    router.push(`/person/${id}`);
  };
  const netWorthround = Math.round(netWorth).toString().substring(0, 3);
  return (
    <div className={styles.billion}>
      <img src={squareImage} alt={name} onClick={onClick} />
      <Link prefetch href={`/person/${id}`}>
        {name}
      </Link>
      <p>{netWorthround} Billion | {industries}</p>
    </div>
  );
}
