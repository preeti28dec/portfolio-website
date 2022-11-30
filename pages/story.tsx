import React from "react";
import styled from "styled-components";

export default function Story() {
  return (
    <Root>
      <div className="text-center">Nice to meet you</div>
      <div className="text-7xl font-bold text-center">Hello I am ------ </div>
      <p className="text-center text-lg font-medium mx-auto md:w-[600px]">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat  duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
   <div className="my-12">
   <div className="text-2xl font-semibold my-4">Background Story</div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat <br/>duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat <br/> duis enim velit mollit. Exercitation
        veniam consequat sunt nostrud amet.
      </p>
      <div className="text-2xl font-semibold my-4">
        Starting And Following My Passion
      </div>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat<br/> duis enim velit mollit. Eamet.
      </p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sinn
        veniam consequat <br/>sunt nostrud amet.
      </p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat <br/> duis enim velit mollit. Et sunt nostrud
        amet.
      </p>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat <br/> duit nostrud amet.
      </p>
   </div>
    </Root>
  );
}

const Root = styled.div`
  max-width: 1200px;
  width: 96%;
  margin: auto;
  p {
    font-weight: 500;
    padding: 7px 0px;
    color: #555555;
  }
`;
