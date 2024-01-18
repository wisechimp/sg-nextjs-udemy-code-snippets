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
      <div>
        {data.map((snippet) => {
          return(
            <div key={snippet.id}>
              {snippet.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HomePage
