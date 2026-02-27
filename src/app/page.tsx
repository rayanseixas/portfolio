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
          <ArticleHeading variant="section" size="sm">Hoje</ArticleHeading>
          <ArticleText>Atualmente sou Designer <Highlight variant="underline">UI/UX Pleno</Highlight> em uma empresa do ramo de Telecomunicação onde atuo principalmente <Highlight variant="underline">projetando sistemas</Highlight> de gerenciamento de leads, mensagens ativas e jornadas de clientes.</ArticleText>
        </div>
        <div>
          <ArticleHeading variant="section" size="sm">Breve Histórico</ArticleHeading>
          <ArticleText>Em <Highlight variant="underline">2020</Highlight> me graduei em <Highlight variant="underline">Design Gráfico</Highlight> pela Faculdade Martha Falcão onde tive o primeiro contato com o estudo da <Highlight variant="underline">Experiência do Usuário</Highlight> e desde então venho focando meus estudos na área.</ArticleText>
          <ArticleText>Comecei a construir projetos web em <Highlight variant="underline">2016</Highlight>, quando ingressei no IFAM para cursar o Ensino Médio integrado ao <Highlight variant="underline">Técnico em Informática</Highlight>. Nesse período, tive uma base prática e teórica sobre construção de algoritmos e produtos digitais, utilizando principalmente a linguagem de programação PHP e Banco de Dados SQL.</ArticleText>
        </div>
        <div>
          <ArticleHeading variant="section" size="sm">Trabalhos</ArticleHeading>
        </div>
        <ArticleDivider />
        <div className="flex flex-wrap gap-2.5 w-full">
          <Card href="/project01"></Card>
          <Card href="/project01"></Card>
          <Card href="/project01"></Card>
        </div>
        <ArticleDivider />
      </ArticleContentContainer>
    </main>
  );
}