import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { SVGProps } from 'react';
import Head from 'next/head';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = ({ fill, width, height }: SVGProps<SVGElement>) => (
  <div className="logo_svg_container">
    <svg x="0px" y="0px" height={height} width={width} viewBox="-25 -25 288.188 256.277">
      <g id="logo_layer_1">
        <path
          fill={fill}
          stroke={fill}
          strokeLinejoin="round"
          strokeLinecap="round"
          fillRule="evenodd"
          strokeOpacity="1"
          strokeWidth="2"
          d="M223.48,0H14.708L0,25.476l104.386,180.802h29.417L238.188,25.476L223.48,0z M154.256,107.888h-42.075l21.038,36.438
		l-14.125,24.464L68.789,81.637h69.866l14.586-25.277h-31.394H59.24h-5.058l-15.18-26.292h160.183L154.256,107.888z"
        />
      </g>
    </svg>
  </div>
);

const Title = styled.h1`
  color: #ffa939;
  font-size: 2.2rem;
  font-weight: 900;
  font-style: italic;
  font-family: 'Montserrat', sans-serif;
  margin: 0;
`;

const Home: NextPage = () => (
  <>
    <Head>
      <title>The Personalizer</title>
    </Head>
    <Container>
      <Logo fill="#ffa939" height={200} />
      <Title>COMING SOON...</Title>
    </Container>
  </>
);
export default Home;
