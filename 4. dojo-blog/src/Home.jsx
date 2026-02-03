import { useState } from "react"

const Home = () => {

  const [name, setName] = useState("Mario")
  const [age, setAge] = useState(25)

  console.log('rerendered....')

  const handleClick = (e) => {
    setName("John")
  }

  return (
    <div className='home'>
      <h2>Home</h2>
      <button onClick={handleClick}>Change Name</button>
      My name is {name} and my age is {age}
    </div>
  )
}

export default Home