import { ArticleHeading } from '../compenents/article/article-heading';
import { Highlight } from '../compenents/article/article-highlight';
import ArticleText from '../compenents/article/article-text';
import Card from '../compenents/card/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="flex max-w-[900px] flex-col items-center justify-center">
        <div>
          <ArticleHeading hierarchy="h2" size="md">
            Me chamo Rayan Seixas, sou um Designer de Produto Digital e nas
            horas vagas brinco desenvolvendo meus próprios layouts.
          </ArticleHeading>
          <ArticleText>
            Atualmente ocupo o cargo de{' '}
            <Highlight variant="underline">Designer UI/UX Pleno</Highlight> em
            uma empresa do ramo de Telecomunicação onde atuo principalmente{' '}
            <Highlight variant="underline">projetando sistemas</Highlight>{' '}
            internos da empresa. Sou graduado em Design Gráfico pela Faculdade
            Martha Falcão e T.I com foco em desenvolvimento pelo IFAM.
          </ArticleText>
        </div>

        <div className="mt-8 flex w-full flex-wrap gap-2.5">
          <Card href="/project01"></Card>
          <Card href="/project01"></Card>
          <Card href="/project01"></Card>
        </div>
      </div>
    </main>
  );
}
