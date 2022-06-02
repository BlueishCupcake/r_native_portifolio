import React from 'react';
import {Text} from 'react-native';
import Cards from '../../utils/cards_mock/Cards';

import * as Styled from './styles';

const Card: React.FC = () => {
  return (
    <Styled.ToDoList>
      {Cards.length > 0 &&
        Cards.map(card => {
          return (
            <React.Fragment key={card.id}>
              <Styled.DayList>
                <Styled.Date>
                  <Text style={{textAlign: 'center'}}>{card.day}</Text>
                </Styled.Date>
                <Styled.Card>
                  <Styled.TextView>
                    <Styled.Text>{card.hour}</Styled.Text>
                  </Styled.TextView>

                  <Styled.TextView>
                    <Styled.Text>{card.title}</Styled.Text>
                  </Styled.TextView>
                </Styled.Card>
              </Styled.DayList>
            </React.Fragment>
          );
        })}
    </Styled.ToDoList>
  );
};

export default Card;
