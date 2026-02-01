import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Button from "../button"
import Image from "next/image"

export function DialogScrollableContent() {
  return (
      <Dialog modal={false}>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent className="bg-surface-default border-border rounded-xs min-w-[98vw] h-[90vh] flex flex-col p-0" >
            <DialogHeader className="border-b p-3 border-border flex items-start justify-center">
              <DialogTitle className="text-text-headline lowercase font-normal text-sm">file-lorem-ipsum.tsx</DialogTitle>
            </DialogHeader>
            <div className="no-scrollbar max-h-screen overflow-y-auto flex flex-col items-center">
                <div className="p-3 max-w-2xl mt-24">
                  <h1 className="text-text-headline text-5xl font-tertiary leading-16">Atualização de cadastros em massa</h1>
                  <h2 className="text-text-headline text-xl mt-12">Problema</h2>
                  <p className="text-text-body font-primary text-md mt-4">
                   A complexa mobilidade urbana brasileira e a dificuldade em encontrar informações locais e em tempo real, que orientem o deslocamento de forma precisa e inteligente.
                  </p>
                </div>
                <div className="mt-8 w-[1200px] h-[600px] relative">
                  <Image src="/images/lorem-ipsum.png" fill alt="lorem ipsum" />
                </div>
            </div>
          </DialogContent>
        </Dialog>
  )
}
