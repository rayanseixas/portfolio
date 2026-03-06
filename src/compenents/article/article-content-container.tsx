type ArticleContentContainerProps = {
  children?: React.ReactNode;
};

export default function ArticleContentContainer({
  children,
}: ArticleContentContainerProps) {
  return <div className="mt-14 mb-40 max-w-[550px] px-3">{children}</div>;
}
