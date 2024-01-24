"use server"

import { redirect } from "next/navigation"

import { db } from "@/app/database"

const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id }
  })

  redirect("/")
}

export default deleteSnippet