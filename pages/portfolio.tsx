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
  {id:5,Tablink:"blogs",TabName:"Blogs"}];
function Portfolio() {
  return (
    <Root>
      <div className="flex justify-center"><img className="w-[25%] object-fill" src="./image/Portfolio.png" alt="loding logo image"/></div>
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
      <div className="grid sm:grid-cols-3 gap-4 p-5">
        <div className="card grow sm:row-span-4 aspect-auto "><img className="object-cover w-full" src="./image/Rec1.png" alt="loding..." /></div>
        <div className="card grow sm:row-span-4 aspect-auto"><img className="object-cover w-full " src="./image/Rec2.png" alt="loding..." /></div>
        <div className="card grow sm:row-span-4 aspect-auto"><img className="object-cover w-full " src="./image/Rec3.png" alt="loding..." /></div>
        <div className="card-tall grow card ">
            <div className=" card grow my-4 aspect-auto"><img className="object-cover w-full " src="./image/Rec4.png" alt="loding..." /></div>
            <div className="card grow my-4 aspect-auto"><img className="object-cover w-full " src="./image/Rec6.png" alt="loding..." /></div>
        </div>
        <div className=" card grow sm:col-span-2 sm:row-span-2">
            <div className="card grow my-4 aspect-auto"><img className="object-cover w-full" src="./image/Rec7.png" alt="loding..." /></div>
            <div className="card grow my-4 aspect-auto"><img className="object-cover w-full " src="./image/Rec7.png" alt="loding..." /> </div>
        </div>
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
      transition: .2s ease-out;
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

  .card {
    border-radius: 10px;
    transition: transform .2s;
    overflow: hidden;
  }
    .card-tall {
      grid-row: span 2 / auto;
    }
  .grow img{
    transition: 1s ease;
  }

 img:hover{
  transform: scale(1.2);
  transition: 1s ease;
}
`;












{/* */}