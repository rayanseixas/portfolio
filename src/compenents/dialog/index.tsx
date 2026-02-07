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
import ArticleText from "../article/article-text"
import ArticleContentContainer from "../article/article-content-container"

export function DialogScrollableContent() {
  return (
      <Dialog modal={false}>
          <DialogTrigger asChild>
            <Button>Open</Button>
          </DialogTrigger>
          <DialogContent className="bg-surface-default border-border rounded-xs min-w-[98vw] h-[90vh] flex flex-col p-0" >
            <DialogHeader className=" p-3 border-border flex items-start justify-center">
              <DialogTitle className="text-text-headline lowercase font-normal text-sm">file-lorem-ipsum.tsx</DialogTitle>
            </DialogHeader>
            <div className="no-scrollbar max-h-screen overflow-y-auto flex flex-col items-center">
                <ArticleContentContainer>
                  <h1 className="text-text-headline text-6xl font-tertiary leading-16">Lorem ipsum</h1>
                  <h2 className="text-text-headline text-2xl font-tertiary mt-12">What is Lorem Ipsum?</h2>
                  <ArticleText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ArticleText>
                </ArticleContentContainer>
                <div className="mt-8 w-[1200px] aspect-2/1 bg-surface-subtle-active relative">
                  <Image src="/images/lorem-ipsum.png" fill  alt="lorem ipsum" style={{objectFit: "cover"}} />
                </div>
                <ArticleContentContainer>
                  <ArticleText>O problema foi encontrado através de um sistema interno também desenvolvido por nosso time, onde apontava que dentre as falhas ao enviar mensagens ativas, uma grande parcela se dava conta de mensagens que não foram entregues.</ArticleText>
                </ArticleContentContainer>
            </div>
          </DialogContent>
        </Dialog>
  )
}
