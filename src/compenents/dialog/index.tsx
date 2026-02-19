import Image from 'next/image';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import ArticleContentContainer from '../article/article-content-container';
import ArticleText from '../article/article-text';
import CardCase from '../card-case';
import Divider from '../divider';

export function DialogScrollableContent() {
  return (
    <Dialog modal={false}>
      <DialogTrigger asChild>
        <CardCase link={''} />
      </DialogTrigger>
      {/* <DialogContent className="bg-surface-default border-border rounded-xs min-w-[98vw] h-[90vh] flex flex-col p-0" > */}
      <DialogContent className="bg-surface-default flex h-screen min-w-screen flex-col p-0">
        <DialogHeader>
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <div className="no-scrollbar flex max-h-screen flex-col items-center overflow-y-auto">
          <ArticleContentContainer>
            <h1 className="text-text-headline font-tertiary text-6xl leading-16">
              Lorem ipsum amet
            </h1>
            <ArticleText>@rayanseixas | 08 Fev, 2026 (Há 1 dia)</ArticleText>
            <h2 className="text-text-headline font-tertiary mt-12 text-2xl">
              What is Lorem Ipsum?
            </h2>
            <ArticleText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </ArticleText>
            <h2 className="text-text-headline font-tertiary mt-12 text-2xl">
              Resumo
            </h2>
            <ArticleText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the s standard dummy text ever
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting
            </ArticleText>
            <div className="bg-surface-subtle-active relative mt-8 aspect-2/1 max-w-[1200px]">
              <Image
                src="/images/lorem-ipsum.png"
                fill
                alt="lorem ipsum"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2 className="text-text-headline font-tertiary mt-12 text-2xl">
              Resumo
            </h2>
            <ArticleText>
              O problema foi encontrado através de um sistema interno também
              desenvolvido por nosso time, onde apontava que dentre as falhas ao
              enviar mensagens ativas, uma grande parcela se dava conta de
              mensagens que não foram entregues.
            </ArticleText>
            <Divider />
            <div className="flex justify-between">
              <div className="flex flex-col gap-1">
                <p className="text-text-headline">Anterior</p>
                <p className="text-text-body">lorem ipsum amet dolor</p>
              </div>
              <div className="flex flex-col items-end gap-1">
                <p className="text-text-headline">Anterior</p>
                <p className="text-text-body">lorem ipsum amet dolor</p>
              </div>
            </div>
          </ArticleContentContainer>
        </div>
      </DialogContent>
    </Dialog>
  );
}
