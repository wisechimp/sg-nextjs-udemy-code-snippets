"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { db } from "../app/database"

const createSnippet = async (
  formState: { message: string }, 
  formData: FormData
) => {
  try {
    const title = formData.get("title")
    const code = formData.get("code")

    if (typeof title !== "string" || title.length < 5) {
      return {
        message: "The title should be longer."
      }
    }

    if (typeof code !== "string" || code.length < 10) {
      return {
        message: "The code snippet should be longer."
      }
    }

    // Create a new record in the database
    await db.snippet.create({
      data: {
        title,
        code,
      },
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {message: error.message}
    } else {
      return {
        message: "Something's went wrong..."
      }
    }
  }
  
  revalidatePath("/")
  redirect("/")
}

export default createSnippet
