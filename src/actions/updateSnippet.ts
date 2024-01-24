"use server"

import { redirect } from "next/navigation"

import { db } from "@/app/database"

const updateSnippet = async (id: number, updatedCode: string) => {
  await db.snippet.update({
    where: { id },
    data: { code: updatedCode }
  })

  redirect(`/snippets/${id}`)
}

export default updateSnippet
