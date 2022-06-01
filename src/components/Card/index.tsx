import React from 'react';
import {Text} from 'react-native';
import CardProps from './Card.types';

import * as Styled from './styles';

const Card: React.FC<CardProps> = ({category, title, text}) => {
  return (
    <Styled.CardView>
      <Styled.TextViews>
        <Styled.CategoryText>{category}</Styled.CategoryText>
      </Styled.TextViews>

      <Styled.TextViews>
        <Styled.TitleText>{title}</Styled.TitleText>
      </Styled.TextViews>

      <Styled.TextViews>
        <Text>{text}</Text>
      </Styled.TextViews>
    </Styled.CardView>
  );
};

export default Card;
