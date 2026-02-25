import ArticleContentContainer from "../compenents/article/article-content-container";
import ArticleDivider from "../compenents/article/article-divider";
import { ArticleHeading } from "../compenents/article/article-heading";
import { Highlight } from "../compenents/article/article-highlight";

import ArticleText from "../compenents/article/article-text";
import Card from "../compenents/card/card";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center flex-col px-4 ">
      <ArticleContentContainer>
        <div>
          <ArticleHeading variant="section" size="md">Rayan Seixas</ArticleHeading>
          <p className="text-text-body mt-1">Designer de produto</p>
        </div>
        <div>
          <ArticleHeading variant="section" size="md">Hoje</ArticleHeading>
          <ArticleText>Atualmente sou Designer <Highlight variant="underline">UI/UX Pleno</Highlight> em uma empresa do ramo de Telecomunicação onde atuo principalmente <Highlight variant="underline">projetando sistemas</Highlight> de gerenciamento de leads, mensagens ativas e jornadas de clientes.</ArticleText>
        </div>
        <div>
          <ArticleHeading variant="section" size="md">Breve Histórico</ArticleHeading>
          <ArticleText>Em <Highlight variant="underline">2020</Highlight> me graduei em Design Gráfico pela Faculdade Martha Falcão onde tive o primeiro contato com o estudo da <Highlight variant="underline">Experiência do Usuário</Highlight> e desde então venho focando meus estudos na área.</ArticleText>
          <ArticleText>Comecei a construir projetos web em 2016, quando ingressei no IFAM para cursar o Ensino Médio integrado ao Técnico em Informática. Nesse período, tive uma base prática e teórica sobre construção de algoritmos e produtos digitais, utilizando principalmente a linguagem de programação PHP e Banco de Dados SQL.</ArticleText>
        </div>
        <div>
          <ArticleHeading variant="section" size="md">Trabalhos</ArticleHeading>
        </div>
        <ArticleDivider />
        <div className="flex flex-wrap gap-2.5 w-full">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <ArticleDivider />
      </ArticleContentContainer>
    </main>
  );
}
