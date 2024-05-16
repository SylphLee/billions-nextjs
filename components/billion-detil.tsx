import { API_URL } from "../app/constants";
import styles from "../styles/billion-videos.module.css";

export async function getBillion(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function BillionDetil({ id }: { id: string }) {
  const billion = await getBillion(id);
  return (
    <div className={styles.container}>
   </div>
  );
}
