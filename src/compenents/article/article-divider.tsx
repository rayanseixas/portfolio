type ArticleDividerProps = {
  className?: string;
};

export default function ArticleDivider({ className }: ArticleDividerProps) {
  return (
    <div className={['py-inner-xl', className].filter(Boolean).join(' ')}>
      <div className="h-px w-full bg-border" />
    </div>
  );
}

