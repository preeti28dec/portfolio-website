import Portfolio from "./portfolio";
import Story from "./story";
import styled from "styled-components";
import Footer from "../src/componets/footer";

export default function Home() {
  return (
    <>
      <Root>
        <div className="w-[96%] h-[400px] bg-gray-500 rounded-lg  mx-auto my-16"></div>
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
`;
