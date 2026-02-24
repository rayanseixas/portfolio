import ArticleContentContainer from "../compenents/article/article-content-container";
import { ArticleHeading } from "../compenents/article/article-heading";
import ArticleText from "../compenents/article/article-text";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col  px-4">
      <ArticleContentContainer>
        <ArticleHeading hierarchy="h3" size="sm">Title</ArticleHeading>
        <ArticleText>Em 2020 me graduei em Design Gráfico pela Faculdade Martha Falcão onde tive o primeiro contato com o estudo da Experiência do Usuário e desde então venho focando meus estudos na área.</ArticleText>
      </ArticleContentContainer>
    </main>
  );
}
