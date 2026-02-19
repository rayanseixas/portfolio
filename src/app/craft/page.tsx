import CardCase from '@/src/compenents/card-case';
import { DialogScrollableContent } from '@/src/compenents/dialog';
import Filterbutton from '@/src/compenents/filter-button';

export default function Home() {
  return (
    <div className="flex flex-col gap-5">
      <div className="border-border px-inner-md py-inner-xl flex items-center border-b border-dashed">
        <div className="flex flex-1 flex-col items-start gap-4">
          <p className="text-text-body font-primary font-medium">
            Filtrado por
          </p>
          <div className="flex gap-3">
            <Filterbutton active>Todos</Filterbutton>
            <Filterbutton>IA</Filterbutton>
            <Filterbutton>Design System</Filterbutton>
          </div>
        </div>
      </div>
      <div className="px-inner-md flex w-full flex-wrap gap-5">
        <CardCase link={'/craft/teste'} />
        <DialogScrollableContent />
      </div>
    </div>
  );
}
