import { redirect } from "next/navigation"
import { db } from "../app/database"


const postSnippet = async (formData: FormData) => {
  "use server"
  const title = formData.get('title') as string
  const code = formData.get('code') as string
  const snippet = await db.snippet.create({
    data: {
      title,
      code
    }
  })
  console.log(snippet)
  redirect("/")
}

export default postSnippet