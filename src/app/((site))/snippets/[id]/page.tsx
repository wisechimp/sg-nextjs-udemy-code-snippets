import Link from "next/link"

import { deleteSnippet, getSnippet } from "@/actions"
import { db } from "@/app/database"

type SnippetPageProps = {
  params: {
    id: string
  }
}

const SnippetPage = async (props: SnippetPageProps) => {
  const { id } = props.params
  const snippet = await getSnippet(parseInt(id))
  const { title, code } = snippet

  const deleteSnippetAction = deleteSnippet.bind(null, parseInt(id))

  return (
    <div>
      <div className='flex m-4 justify-between items-center'>
        <h1 className='text-xl font-bold'>{title}</h1>
        <div className='flex gap-4'>
          <Link href={`/snippets/${id}/edit`} className='p-2 border rounded'>
            Edit
          </Link>
          <form action={deleteSnippetAction}>
            <button className='p-2 border rounded'>Delete</button>
          </form>
        </div>
      </div>
      <pre className='p-3 border rounded bg-gray-200 border-gray-600 overflow-auto whitespace-pre-wrap break-words'>
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default SnippetPage

export const generateStaticParams = async () => {
  const snippets = await db.snippet.findMany()

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    }
  })
}
