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
  return(
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  )
}

export default SnippetEditPage