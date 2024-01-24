"use server"

import { db } from "../app/database"

const getSnippets = async () => {
  const snippets = await db.snippet.findMany()
  return snippets
}

export default getSnippets
