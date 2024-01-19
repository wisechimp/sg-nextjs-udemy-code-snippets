import { postSnippet } from "@/app/handlers"

const NewSnippetPage = () => {
  return (
    <form action={postSnippet}>
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
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">Submit</button>
      </div>
    </form>
  )
}

export default NewSnippetPage