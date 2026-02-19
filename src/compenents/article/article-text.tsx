type ArticleTextProps = {
  children?: React.ReactNode;
};

export default function ArticleText({ children }: ArticleTextProps) {
  return (
    <p className="text-text-body font-secondary text-md mt-2.5 text-justify">
      {children}
    </p>
  );
}
