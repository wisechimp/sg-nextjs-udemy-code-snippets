import Link from "next/link"

const SnippetNotFound = () => {
  return(
    <div>
      <h1 className="text-xl bold">Sorry but we could not find that particular snippet</h1>
      <p>You can go <Link href={"/"}>Home</Link> and try again.</p>
    </div>
  )
}

export default SnippetNotFound