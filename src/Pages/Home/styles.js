import styled from 'styled-components/native';

import {StyleSheet} from 'react-native';

export const ViewContainer = styled.View`
  flex: 1;
  background: white;
`;

export const ViewHeader = styled.View`
  flex-direction: column;
  justify-content: flex-start;
`;

export const ViewTitle = styled.View`
  flex-direction: row;
  margin-left: 20;
  margin-right: 20;
`;

export const TitleBold = styled.Text`
  margin-top: 12;
  color: #d42026;
  font-size: 16;
  font-weight: bold;
  border-bottom-width: 3;
  border-bottom-color: #d42026;
  padding-bottom: 5;
`;

export const SecondTitleBold = styled.Text`
  margin-left: 3;
  margin-top: 12;
  color: #d42026;
  font-size: 16;
  font-weight: bold;
`;

export const NormalTitle = styled.Text`
  margin-left: 3;
  margin-top: 12;
  color: #d42026;
  font-size: 16;
`;

export const ViewInput = styled.View`
  flex-direction: column;
  margin-left: 20;
  margin-right: 20;
`;

export const TitleInput = styled.Text`
  margin-left: 3;
  margin-top: 12;
  color: #d42026;
  font-size: 16;
`;

export const InputSearch = styled.TextInput`
  border-color: #d42026;
  border-width: 1;
`;

export const ItemHeader = styled.View`
  flex-grow: 1;
  flex-direction: row;
  background-color: red;
  margin-top: 12;
  height: 40;
`;

export const ColumFirstHeader = styled.View`
  align-items: flex-start;
  justify-content: flex-start;
  flex-grow: 1;
  width: 30%;
`;

export const ColumSecondHeader = styled.View`
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
  width: 70%;
`;

export const TextHeader = styled.Text`
  color: white;
  font-size: 20;
`;

export const LineHeader = styled.View`
  flex-grow: 1;
  flex-direction: row;
  background-color: white;
`;

export const ItemFirst = styled.View`
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  flex-direction: row;
  width: 30%;
`;

export const ItemSecond = styled.View`
  align-items: center;
  justify-content: flex-start;
  flex-grow: 1;
  flex-direction: row;
  width: 70%;
`;

export const TextLine = styled.Text`
  color: black;
  font-size: 10;
  font-weight: bold;
  align-items: center;
  justify-content: flex-start;
`;

export const ImageHero = styled.Image`
  height: 50;
  width: 50;
`;

export const ViewContentListFooter = styled.View`
  flex-direction: column-reverse;
  height: 60;
`;

export const ViewListFooter = styled.View`
  flex-direction: row;
  flex: 1;
  margin-left: 20;
  margin-right: 20;
`;

export const ViewLineSeparator = styled.View`
  height: 2;
  background-color: red;
  flex: 1;
`;

export const ViewNumber = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const ViewFooterColor = styled.View`
  background-color: red;
  height: 10;
`;

export const styles = StyleSheet.create({
  itemList: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
  textList: {
    fontSize: 18,
    height: 44,
  },
  imageIconsLeft: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    tintColor: 'red',
    alignContent: 'flex-start',
  },
  imageIconsRight: {
    height: 60,
    width: 60,
    resizeMode: 'contain',
    tintColor: 'red',
    alignContent: 'flex-end',
  },
});
