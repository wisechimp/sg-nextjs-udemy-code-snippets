type SnippetEditPageProps = {
  params: {
    id: string
  }
}

const SnippetEditPage = (props: SnippetEditPageProps) => {
  const id = parseInt(props.params.id)
  return(
    <div>
      Editing the snippet with id {id}.
    </div>
  )
}

export default SnippetEditPage