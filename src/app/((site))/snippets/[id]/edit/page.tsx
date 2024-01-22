import { getSnippet } from "@/actions"
import SnippetEditForm from "@/clientComponents/snippet-edit-form/SnippetEditForm"

type SnippetEditPageProps = {
  params: {
    id: string
  }
}

const SnippetEditPage = async (props: SnippetEditPageProps) => {
  const id = parseInt(props.params.id)
  const snippet = await getSnippet(id)
  console.log(snippet)
  const { title, code } = snippet
  return(
    <div>
      Editing the snippet with title {title}.
      <SnippetEditForm snippet={snippet} />
    </div>
  )
}

export default SnippetEditPage