import React from "react";
import nfts from "../../../public/data/nfts";
import Card from "./Card";

const Products = () => {
    return (
        <section className='p-4 pb-24 text-white'>
        <div className='container max-w-6xl mx-auto overflow-hidden'>
          <div className='flex flex-col items-center space-y-8'>
            
              <h1 className='text-2xl font-medium md:text-3xl'>
                Explore Hot Products
              </h1>
              <p className='max-w-lg text-center text-slate-400'>
                We are a huge marketplace dedicated to connecting great artists
                of all Techwind with their fans and unique token collectors!
              </p>
          </div>
        {/* Cards*/}
        <div  className='grid items-center justify-between grid-cols-1 gap-8 mt-12 md:grid-cols-3 lg:grid-cols-4'>
        {
          nfts.map((item,i) => (
            <Card key={i} item={item}/>
          ))
        }
        </div>
      </div>
      </section>
    )
}

export default Products