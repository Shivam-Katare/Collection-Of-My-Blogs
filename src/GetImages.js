import { useState, useEffect } from "react"
import Article from "./Article"
import { useQuery } from '@apollo/client';
import gql from "graphql-tag"
import Loder from "./Components/Loder";
import Footer from "./Components/Footer";
import "./Article.css"
import JoinMe from "./Components/JoinMe";

const GET_ALL_BLOGS = gql`
query {
  allblogscollection {
    id
    image,
    link,
    name,
    postedon,
    publishdate,
  }
}
`
export default function GetImages() {
  const [images, setImages] = useState([])

  const { data, loading } = useQuery(GET_ALL_BLOGS);
  const [blogs, setBlogs] = useState([]);


  useEffect(() => {
    if (data) {
      setBlogs(data.allblogscollection);
    }
  }, [data])

  if (loading) {
    return <div className="text-center">Loading...</div>

  }
  return (
    <>
      <div className="container mx-auto px-5 2xl:px-0">
        <h1 className="text-slate-800 font-bold text-3xl md:text-4xl lg:text-6xl my-10 lg:mt-20 lg:mb-14 text-center">
          My Latest Blogs
        </h1>
        <JoinMe />
        {!blogs ? (
          <Loder />
        ) : (
          <section className="blogs-section grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 pb-20 lg: max-w-full">
            {blogs.map((image) => (
              <Article key={image.id} {...image} />
            ))}
          </section>
        )}
      </div>
      <Footer />
    </>
  )
}
