import Link from 'next/link';

import ArticleContentContainer from '@/src/compenents/article/article-content-container';
import { ArticleHeading } from '@/src/compenents/article/article-heading';
import ArticleText from '@/src/compenents/article/article-text';
import { Button } from '@/src/compenents/button';
import { CornerUpLeftIcon } from '@/src/compenents/icons/corner-up-left';

export default function Project01() {
  return (
    <main className="flex min-h-screen justify-center">
      <Button variant="ghost" className="fixed top-14 left-3">
        <Link href={'/'} className="flex gap-2">
          <CornerUpLeftIcon size={20} />
          Voltar
        </Link>
      </Button>
      <ArticleContentContainer>
        <div>
          <ArticleHeading hierarchy="h1" size="lg">
            Lorem ipsum
          </ArticleHeading>
          <ArticleText>@rayanseixas | 08 Fev, 2026 (Há 1 dia)</ArticleText>
        </div>
        <div>
          <ArticleHeading hierarchy="h3" size="sm">
            What is Lorem Ipsum?
          </ArticleHeading>
          <ArticleText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </ArticleText>
        </div>
        <div>
          <ArticleHeading hierarchy="h3" size="sm">
            Resumo
          </ArticleHeading>
          <ArticleText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </ArticleText>
        </div>
        <div className="bg-surface-subtle-active mt-8 h-[400px] w-full"></div>
      </ArticleContentContainer>
    </main>
  );
}
