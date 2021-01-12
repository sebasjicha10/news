import React, {Fragment, useState, useEffect} from "react"
import Header from "./components/Header"
import Form from "./components/Form"
import NewsListing from "./components/NewsListing"


const App = () => {

  // Define category and news
  const [category, setCategory] = useState("")
  const [news, setNews] = useState([])
  
  useEffect(() => {
    const callApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=218b25b7e9024a48b4b7d747d6473c36`
      const response = await fetch(url)
      const news = await response.json()
      setNews(news.articles)
    }
    callApi()
  }, [category])

  return (
    <Fragment>
      <Header 
        title="News Search"
      />
      <div className="container white">
        <Form
          setCategory={setCategory}
        />
        <NewsListing 
          news={news}
        />
      </div>
    </Fragment>
  )
}

export default App
