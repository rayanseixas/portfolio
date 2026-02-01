import CardCase from "../compenents/card-case";
import { DialogScrollableContent } from "../compenents/dialog";
import Filterbutton from "../compenents/filter-button";

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="border-b border-border border-dashed px-inner-md py-inner-xl flex items-center">
        <div className="flex flex-col flex-1 gap-4 items-start">
          <p className="text-text-body font-medium font-primary">Filtrado por</p>
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
        <DialogScrollableContent />
      </div>
    </div>
  );
}
