import React from 'react';
import styled from 'styled-components';

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
    <Title>Game Tháp Hà Nội</Title>
    <Subtitle>Bạn hãy di chuyển tháp từ bên trái sang bên phải đúng vị trí như ban đầu</Subtitle>
    <Subtitle>Mẹo: Hãy dùng ô ở giữa làm trung gian</Subtitle>
    {/* <Link href={'https://github.com/bitriddler/hanoi-react'}>https://github.com/bitriddler/hanoi-react</Link> */}
  </Wrapper>
);
