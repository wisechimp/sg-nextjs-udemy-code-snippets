import Link from "next/link"
import { getSnippets } from "../../actions"

const HomePage = async () => {
  const data = await getSnippets()

  return (
    <div>
      <div className='flex justify-between p-4'>
        <h1 className='text-xl font-bold'>Snippets</h1>
        <Link
          href={"/snippets/new"}
          className='text-white bg-black px-6 py-2 rounded'
        >
          New
        </Link>
      </div>
      <div className='flex flex-col gap-2'>
        {data.map((snippet) => {
          const { id, title } = snippet
          return (
            <Link
              key={id}
              href={`/snippets/${id}`}
              className='flex justify-between items-center p-2 border rounded'
            >
              <div>{title}</div>
              <div>View</div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
