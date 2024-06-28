import { API_URL } from "../app/constants";
import potato from "../styles/billion-info.module.css";
import styles from "../styles/home.module.css";

export async function getBillion(id: string) {
  const response = await fetch(`${API_URL}/person/${id}`);
  return response.json();
}

export default async function BillionInfo({ id }: { id: string }) {
  const billion = await getBillion(id);
  return (
    <div>
      <div className={potato.container}>
        <img
          src={billion.squareImage}
          className={potato.id}
          alt={billion.name}
        />
        <br />
        <div className={potato.info}>
          <h1 className={potato.name}>{billion.name}</h1>
          <h3>country : {billion.country}</h3>
          <h3>city : {billion.city}</h3>
          <h3>netWorth : {billion.netWorth.toString().substring(0, 3)} Billion</h3>
          <p>{billion.bio}</p>
          <p>{billion.financialAssets.exchange}</p>
        </div>
      </div>
      <br />
      <div className={potato.container}>
        <h1 className={potato.container_info_title}>Financial Assets</h1>
        <div className={potato.container_info}>
          {billion.financialAssets.map((billion: { ticker: string; sharePrice: number; exerciseOptionPrice: number; }) => (
            <div className={potato.container_info_card}>
              {billion.ticker ? <h1>ticker : {billion.ticker}</h1> : null}
              {billion.sharePrice ? <h3>Shares : {billion.sharePrice}</h3> : null}
              {billion.exerciseOptionPrice ? <h3>Excersie Price : ${billion.exerciseOptionPrice}</h3> : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
