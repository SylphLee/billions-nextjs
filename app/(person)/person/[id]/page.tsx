import { Suspense } from "react";
import BillionInfo, { getBillion } from "../../../../components/billion-info";
import BillionDetil from "../../../../components/billion-detil";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const billion = await getBillion(id);
  return {
    title: billion.title,
  };
}

export default async function BillionDetailPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading billion info</h1>}>
        <BillionInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading billion detil</h1>}>
        <BillionDetil id={id} />
      </Suspense>
    </div>
  );
}

export const runtime = "edge";
