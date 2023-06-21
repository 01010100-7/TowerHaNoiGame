import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import logo from './doanthanhnien.png';


const Wrapper = styled.div`
  text-align: center;
`;


const Title = styled.h1`
`;

const Subtitle = styled.h2`
`;

const Link = styled.a``;


export default () => (
  <Wrapper>
    <div>
      <img src={logo} style={{width: 175, height: 125}}/>
    </div>
      <Title>Game Tháp Hà Nội</Title>
      <Subtitle>Bạn hãy di chuyển tháp từ bên trái (ô thứ 1) sang bên phải (ô thứ 3)</Subtitle>
      {/* <Link href={'https://github.com/bitriddler/hanoi-react'}>https://github.com/bitriddler/hanoi-react</Link> */}
  </Wrapper>
);
