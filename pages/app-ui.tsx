import React from "react";
import styled from "styled-components";

export default function AppUi() {
  return (
    <Root>
      <div className="title">App work </div>
      <div className="sm:flex my-6 sm:my-20 justify-between">
        <div className="sm:w-[50%]">
          <img src="./image/photo1.png" alt="loding..." />
        </div>
        <div className="sm:w-[50%] right">
        <div>
            <div className="font-semibold text-2xl my-6">
              Food App - Design for Chai Maska
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit
              <br />
              aliqua dolor do amet sint. Velit officia consequat <br /> duis
              enim velit mollit. Eamet.
            </p>
            <div className="text-red-400 my-6">Behance.link/profile</div>
          </div>
        </div>
      </div>

      <div className="sm:flex my-2 sm:my-8 justify-between">
        <div className="sm:w-[50%] left">
          <div>
            <div className="font-semibold text-2xl my-6">
              Food App - Design for Chai Maska
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit
              <br />
              aliqua dolor do amet sint. Velit officia consequat <br /> duis
              enim velit mollit. Eamet.
            </p>
            <div className="text-red-400 my-6">Behance.link/profile</div>
          </div>
        </div>
        <div className=" ">
          <img src="./image/photo2.png" alt="loding..." />
        </div>
      </div>
      <div className="sm:flex my-6 sm:my-20 justify-between">
        <div className="sm:w-[50%]">
          <img src="./image/photo3.png" alt="loding..." />
        </div>
        <div className="sm:w-[50%] right">
        <div>
            <div className="font-semibold text-2xl my-6">
              Food App - Design for Chai Maska
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit
              <br />
              aliqua dolor do amet sint. Velit officia consequat <br /> duis
              enim velit mollit. Eamet.
            </p>
            <div className="text-red-400 my-6">Behance.link/profile</div>
          </div>
          
        </div>
      </div>

      <div className="sm:flex my-2 sm:my-8 justify-between">
        <div className="sm:w-[50%] left">
          <div>
            <div className="font-semibold text-2xl my-6">
              Food App - Design for Chai Maska
            </div>
            <p>
              Amet minim mollit non deserunt ullamco est sit
              <br />
              aliqua dolor do amet sint. Velit officia consequat <br /> duis
              enim velit mollit. Eamet.
            </p>
            <div className="text-red-400 my-6">Behance.link/profile</div>
          </div>
        </div>
        <div className=" ">
          <img src="./image/photo4.png" alt="loding..." />
        </div>
      </div>
    </Root>
  );
}

const Root = styled.div`
margin: 0px 10px;
  .title {
    font-size: 60px;
    text-align: center;
    font-weight: 600;
  }
  p {
    font-weight: 500;
    color: #555555;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
