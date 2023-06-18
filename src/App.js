import React, { useState } from 'react'
import { marked } from 'marked'

function App() {
  const [markdown, setMarkdown] = useState('')

  const handleChange = (e) => {
    setMarkdown(e.target.value)
  }

  const createMarkup = () => {
    return { __html: marked(markdown) }
  }

  return (
    <div className="App">
      <textarea id="editor" value={markdown} onChange={handleChange} />
      <div id="preview" dangerouslySetInnerHTML={createMarkup()} />
    </div>
  )
}

export default App
