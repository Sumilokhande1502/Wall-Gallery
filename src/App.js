import React, { useState, useEffect } from './components/characters/node_modules/react'
import axios from 'axios'
import Header from './components/ui/Header'
import ImageGrid from './components/characters/ImageGrid'
import Search from './components/ui/Search'
import './App.css'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0?name=${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <ImageGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
