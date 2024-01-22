"use client"
import updateSnippet from "@/actions/updateSnippet"
import { Editor } from "@monaco-editor/react"
import { Snippet } from "@prisma/client"
import { useState, useTransition } from "react"

type SnippetEditFormProps = {
  snippet: Snippet
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const { id, title, code } = snippet
  const [updatedCode, setUpdatedCode] = useState("")
  const [pending, startTransition] = useTransition()

  const handleEditorChange = (newCode: string = code) => {
    setUpdatedCode(newCode)
    console.log(updatedCode)
  }

  const handleUpdateSnippet = () => {
    startTransition(async () => {
      await updateSnippet(id, updatedCode)
    })
  } 

  return (
    <div>
      <h1>{title}</h1>
      <Editor
        height='40vh'
        theme='vs-dark'
        language='javascript'
        defaultValue={code}
        options={{
          minimap: { enabled: false },
        }}
        onChange={handleEditorChange}
      />
      <button className='p-2 border rounded' onClick={handleUpdateSnippet}>
        Update Snippet
      </button>
    </div>
  )
}

export default SnippetEditForm