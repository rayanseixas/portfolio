import CardCase from "../compenents/card-case";

export default function Home() {
  return (
    <div className="flex flex-wrap w-full gap-5">
      <CardCase />
      <CardCase />
      <CardCase />
    </div>
  );
}
