import CardCase from "../compenents/card-case";
import Filterbutton from "../compenents/filter-button";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="border-b border-border border-dashed px-inner-md py-inner-xl flex">
        <div className="flex flex-col flex-1 gap-2.5">
          {/* <p className="text-text-headline uppercase">Total</p> */}
          <p className="text-text-body font-medium font-primary">(Filtros)</p>
        </div>
        <div className="flex flex-col flex-1 gap-2.5 items-start">
          {/* <p className="text-text-headline uppercase">Filtros</p> */}
          <div className="flex gap-3 ">
            <Filterbutton active>Todos</Filterbutton>
            <Filterbutton>IA</Filterbutton>
            <Filterbutton>Design System</Filterbutton>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-full px-inner-md gap-5">
        <CardCase />
        <CardCase />
        <CardCase />
      </div>
    </div>
  );
}
