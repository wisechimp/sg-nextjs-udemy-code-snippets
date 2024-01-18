import { getSnippet } from "@/app/handlers"

type SnippetPageProps = {
  params: {
    id: string
  }
}

const SnippetPage = async (props: SnippetPageProps) => {
  const { id } = props.params
  const snippet = await getSnippet(parseInt(id))
  const { title } = snippet
  return(
    <div>{title}</div>
  )
}

export default SnippetPage