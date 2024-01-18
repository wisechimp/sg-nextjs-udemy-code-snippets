import Link from "next/link"
import { getSnippets } from "../handlers"

const HomePage = async () => {
  const data = await getSnippets()

  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex justify-around p-4">
        <p className="py-2">Snippets</p>
        <Link href={"/snippets/new"} className="text-white bg-black px-6 py-2">New</Link>
      </div>
      <div className="flex flex-col gap-2">
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
