import React from 'react'
import styled from "styled-components";
import {AiFillLinkedin,AiFillFacebook} from 'react-icons/ai'
import {FiInstagram} from 'react-icons/fi'
import {FaBehanceSquare} from 'react-icons/fa'
export default function Footer() {
  return (
    <Root className='text-center my-16'>
      <div className='py-12'>Wanna talk with me Umm  just a friendly hello</div>
      <div className='email'> thisismyemail@gmail.com </div>
      <div className='flex items-center gap-5 justify-center'>
        <AiFillLinkedin className='icon'/>
        <FiInstagram className='icon'/>
        <FaBehanceSquare className='icon'/>
        <AiFillFacebook className='icon'/>
      </div>
    </Root>
  )
}


const Root = styled.div`
.email{
    color:red;
   margin: 1rem 0px;
}
.icon{
    font-size: 28px;
    margin: 0px 10px;
}
`;