import Portfolio from "./portfolio";
import Story from "./story";
import styled from "styled-components";
import Footer from "../src/componets/footer";

export default function Home() {
  return (
    <>
      <Root>
        <div className="w-[96%] image bg-gray-500 overflow-hidden rounded-lg  mx-auto my-16">
          <img className="w-full h-full object-cover " src="./image/profile-img.png" alt="loding image"/>
        </div>
        <Story />
        <Portfolio />
      </Root>
      <div>
        <hr />
        <Footer />
      </div>
    </>
  );
}

const Root = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: auto;
  .image{
    aspect-ratio: 4 / 2;
  }
`;
