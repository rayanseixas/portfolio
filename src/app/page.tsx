import ArticleContentContainer from '../compenents/article/article-content-container';
import { ArticleHeading } from '../compenents/article/article-heading';
import { Highlight } from '../compenents/article/article-highlight';
import ArticleText from '../compenents/article/article-text';
import Card from '../compenents/card/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4">
      <ArticleContentContainer>
        <div>
          <ArticleHeading hierarchy="h1" size="sm">
            Me chamo Rayan Seixas, sou um Designer de Produto Digital e nas
            horas vagas brinco desenvolvendo meus próprios produtos.
          </ArticleHeading>
          <ArticleText>
            Atualmente ocupo o cargo de Designer UI/UX Pleno em uma empresa do
            ramo de Telecomunicação onde atuo principalmente projetando sistemas{' '}
            internos da empresa.
          </ArticleText>
          <ArticleText>
            Sou graduado em Design Gráfico pela Faculdade Martha Falcão e T.I
            com foco em desenvolvimento pelo IFAM.
          </ArticleText>
        </div>
        <div className="mt-8 flex w-full flex-wrap gap-2.5">
          <Card href="/project01"></Card>
        </div>
      </ArticleContentContainer>
    </main>
  );
}
