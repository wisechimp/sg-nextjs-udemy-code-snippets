"use server"

import { notFound } from "next/navigation"

import { db } from "../app/database"

const getSnippet = async (id: number) => {
  const snippet = await db.snippet.findFirst({
    where: {
      id: id,
    },
  })

  if (!snippet) {
    return notFound()
  }

  return snippet
}

export default getSnippet
