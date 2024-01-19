import { notFound } from "next/navigation"

import { db } from "../database"

const getSnippet = async (id: number) => {
  "use server"
  const snippet = await db.snippet.findFirst({
    where: {
      id: id
    }
  })

  if (!snippet) {
    return notFound()
  }

  return snippet
}

export default getSnippet
