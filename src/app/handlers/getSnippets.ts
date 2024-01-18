import { db } from "../database"

const getSnippets = async () => {
  "use server"
  const snippets = await db.snippet.findMany()
  return snippets
}

export default getSnippets