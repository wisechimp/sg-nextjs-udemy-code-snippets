"use client"

import { useFormState } from "react-dom"

import { createSnippet } from "@/actions"

const NewSnippetPage = () => {
  const [formState, createSnippetAction] = useFormState(createSnippet, { message: ""})
  const { message } = formState

  return (
    <form action={createSnippetAction}>
      <h3 className='font-bold m-3'>Create a Snippet</h3>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='title'>
            Title
          </label>
          <input
            name='title'
            id='title'
            className='border rounded p-2 w-full'
            type='text'
          />
        </div>
        <div className='flex gap-4'>
          <label className='w-12' htmlFor='code'>
            Code
          </label>
          <textarea
            name='code'
            id='code'
            className='border rounded p-2 w-full'
            wrap="hard"
          />
        </div>
        {
          message ? 
            <div className="mp-2 p-2 bg-red-200 border rounded border-red-400">
              {message}
            </div>
            : null
        }
        <button type="submit" className="rounded p-2 bg-blue-200">Submit</button>
      </div>
    </form>
  )
}

export default NewSnippetPage