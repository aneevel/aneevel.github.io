import React from "react"
import "../styles/blog.css"

const Blog = () => {
  return (
    <section id="blog"
      className="container flex mx-auto pt-32 md:pt-24"
    >
      <div
        id="blog-content"
        className="mx-auto lg:pr-6 lg:w-2/3 md:pr-0 md:w-3/4 text-center"
      >
        <h2
          className="font-bold pb-6 text-4xl text-center"
        >
          Blog
        </h2>
        
        <div className="blog-posts mt-8">
          <p className="text-lg italic text-gray-600">Blog posts coming soon...</p>
        </div>
      </div>
    </section>
  )
}

export default Blog; 