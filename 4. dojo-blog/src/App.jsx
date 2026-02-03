import { useState } from 'react'
import Navbar from './Navbar'
import Home from './Home'
import BlogList from './BlogList'

function App() {

  const [blogs, setblogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev tips', body: 'lorem ipsum...', author: 'mario', id: 3 },
])

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        {/* <Home /> */}
        <input type="text" />
        <button>Add new Blog</button>
        <BlogList blogs={blogs} title="All blogs"/>
      </div>
    </div>
  )
}

export default App
