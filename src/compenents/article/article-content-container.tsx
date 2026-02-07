type ArticleContentContainerProps = {
  children?: React.ReactNode
}

export default function ArticleContentContainer({ children }: ArticleContentContainerProps) {
    return(
        <div className="p-3 max-w-[960px] mt-24">
             {children}
        </div>
    )
}