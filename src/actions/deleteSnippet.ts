"use server"

import { db } from "@/app/database"
import { redirect } from "next/navigation"

const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id }
  })

  redirect("/")
}

export default deleteSnippet