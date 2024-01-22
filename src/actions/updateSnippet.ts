"use server"

import { db } from "@/app/database"
import { redirect } from "next/navigation"

const updateSnippet = async (id: number, updatedCode: string) => {
  await db.snippet.update({
    where: { id },
    data: { code: updatedCode }
  })

  redirect(`/snippets/${id}`)
}

export default updateSnippet
