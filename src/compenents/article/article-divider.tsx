type ArticleDividerProps = {
  className?: string;
};

export function ArticleDivider({ className }: ArticleDividerProps) {
  return (
    <div className={['py-inner-lg', className].filter(Boolean).join(' ')}>
      <div className="bg-border h-px w-full" />
    </div>
  );
}
