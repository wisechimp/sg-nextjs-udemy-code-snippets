import { db } from "../database"

const getSnippets = async () => {
  "use server"
  const snippets = await db.snippet.findMany()
  console.log(snippets)
  return snippets
}

export default getSnippets