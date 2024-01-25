"use server"

import { redirect } from "next/navigation"

import { db } from "@/app/database"
import { revalidatePath } from "next/cache"

const updateSnippet = async (id: number, updatedCode: string) => {
  await db.snippet.update({
    where: { id },
    data: { code: updatedCode }
  })

  revalidatePath(`/snippets/${id}`)
  redirect(`/snippets/${id}`)
}

export default updateSnippet
