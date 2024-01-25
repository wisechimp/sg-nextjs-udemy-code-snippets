"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { db } from "@/app/database"

const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id }
  })

  revalidatePath("/")
  redirect("/")
}

export default deleteSnippet