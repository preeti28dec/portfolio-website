import React from "react";
import styled from "styled-components";
import {RxDoubleArrowRight} from 'react-icons/rx'
import Link from "next/link";
const Tab = [
  {id:1,Tablink:"web-ui",TabName:"Web UI"},
  {id:2,Tablink:"app-ui",TabName:"App UI"},
  {id:3,Tablink:"dashboard",TabName:"Dashboard"},
  {id:4,Tablink:"animation",TabName:"Animations"},
  {id:5,Tablink:"branding",TabName:"Branding"},
  {id:5,Tablink:"inspirations",TabName:"Inspirations"},
  {id:5,Tablink:"blogs",TabName:"Blogs"}
];
function Portfolio() {
  return (
    <Root>
      <div className="text-5xl md:text-8xl font-bold text-center">Portfolio</div>
      <div className="flex flex-wrap gap-3 sm:gap-8 font-semibold mx-auto items-center justify-center my-12">
        {Tab.map((i, ind) => {
          return (
            <div key={ind} >
              <Link href={i.Tablink}>
              <div>{i.TabName}</div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="image-mosaic">
        <div className="card">1</div>
        <div className="card">2</div>
        <div className="card">3</div>
      </div>
      <div className="image-mosaic my-5">
        <div className="card card-tall">4</div>
        <div className="card card-wide">5</div>
      </div>

<div className="mx-auto button"><button>See All Projects <RxDoubleArrowRight className="text-xl"/></button></div>
     
    </Root>
  );
}

export default Portfolio;
const Root = styled.div`
  max-width: 1200px;
  width: 96%;
  margin: auto;
  .button{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button{
      color: white;
      background: linear-gradient(to left, #696868 50%, #f77a6a 50%) right;
      background-size: 200%;
      transition: 1s ease-out;
      padding: 10px;
      border-radius: 10px;
      margin: 20px 0px;
      display: flex;
      align-items: center;
      gap: 5px;
    }
    button:hover{
      background-position: left;
    }
  .image-mosaic {
    display: grid;
    gap: 2.5rem;
    margin: 40px 0px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    grid-auto-rows: 250px;
  }

  .card {
    display: flex;
    transition: transform .5s;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #353535;
    font-size: 3rem;
    color: #fff;
    box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
      rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
    height: 100%;
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  @media screen and (min-width: 600px) {
    .card-tall {
      grid-row: span 2 / auto;
    }
    .card-wide {
      grid-row: span 2 / auto;
      grid-column: span 2 / auto;
      
    }
  }

  .card:hover {
  transform: scale(1.1); 
}
`;












{/* <div className="grid grid-cols-3 gap-4 p-5">
<div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2">1</div>
<div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2"> 2</div>
<div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2">3</div>
<div className="card-tall shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg "> 04</div>
<div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-2 row-span-3"> 05</div>
<div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg row-span-2">7</div>
<div className="shadow-lg bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg col-span-2 row-span-3"> 06 </div>
</div> */}