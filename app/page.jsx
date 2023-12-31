"use client"
import Feed from "@components/Feed";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const words = [
    'AI Powered Promts', 1000,
    'Inspirational Quotes', 1000,
    'Startup Ideas', 1000,
    'Jokes', 1000,
    'Recipes', 1000,
    'Product Feedback', 1000,
    'Shopping List', 1000,
  ];

  return (
   <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share 
      <br className="max-md:hidden"/>
      <span className="orange_gradint text-center"> 
      <TypeAnimation
      preRenderFirstString={true}
      sequence={words}
      speed={50}
      repeat={Infinity}
      style={{
        background: 'linear-gradient(90deg, #fbde2e, #FFC000)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
      />
      </span>
    </h1>
    {/* <p className="desc text-center"> Discover the best </p> */}
    <Feed/>
   </section>
  )
}
