type ArticleDividerProps = {
  className?: string;
};

export default function ArticleDivider({ className }: ArticleDividerProps) {
  return (
    <div className={['py-[40px]', className].filter(Boolean).join(' ')}>
      <div className="h-px w-full bg-border" />
    </div>
  );
}

