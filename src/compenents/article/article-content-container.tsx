type ArticleContentContainerProps = {
  children?: React.ReactNode;
};

export default function ArticleContentContainer({
  children,
}: ArticleContentContainerProps) {
  return <div className="mt-12 mb-40 max-w-[960px] p-3">{children}</div>;
}
