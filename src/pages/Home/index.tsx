import Card from '../../components/Card';
import React from 'react';

import * as Styled from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Styled.HomeContainer>
        <Card />
      </Styled.HomeContainer>
    </>
  );
};

export default Home;
