import { getSnippet } from "@/app/handlers"
import Link from "next/link"

type SnippetPageProps = {
  params: {
    id: string
  }
}

const SnippetPage = async (props: SnippetPageProps) => {
  const { id } = props.params
  const snippet = await getSnippet(parseInt(id))
  const { title, code } = snippet
  return(
    <div className="flex m-4 justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="flex gap-4">
        <Link href={`/snippets/${id}/edit`} className="p-2 rounded">Edit</Link>
        <button className="p-2 rounded">Delete</button>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-600">
        <code>
          {code}
        </code>
      </pre>
    </div>
  )
}

export default SnippetPage