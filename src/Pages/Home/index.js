import React, {Component} from 'react';

import {FlatList, Text, Image, TouchableOpacity, View} from 'react-native';

import {
  ViewTitle,
  TitleBold,
  SecondTitleBold,
  NormalTitle,
  ViewInput,
  TitleInput,
  ViewHeader,
  InputSearch,
  ItemHeader,
  ColumFirstHeader,
  ColumSecondHeader,
  TextHeader,
  LineHeader,
  ItemFirst,
  ItemSecond,
  TextLine,
  ViewContainer,
  ImageHero,
  ViewListFooter,
  ViewLineSeparator,
  ViewContentListFooter,
  ViewNumber,
  ViewFooterColor,
  styles,
} from './styles';

import api from '~/services/api';
import md5 from 'md5';
import FooterNavigation from '~/components/FooterNavigation';

export default class Home extends Component {
  state = {
    publicKey: '733201340d05351ccbe1fd84fd61fe78',
    privateKey: '00e9204d6350f96ce00cfb4e37fb9577385026c1',
    timestamp: new Date().getTime(),
    limit: 4,
    result: null,
    loading: false,
    currentIndex: 0,
    offset: 0,
    nameHero: '',
  };

  async componentDidMount() {
    this.setState(
      {
        loading: true,
      },
      () => {
        this.loadRespository();
      },
    );
  }

  loadRespository = async () => {
    let response = '';
    let params = {
      ts: this.state.timestamp,
      apikey: this.state.publicKey,
      limit: this.state.limit,
      offset: this.state.offset,
      hash: md5(
        this.state.timestamp + this.state.privateKey + this.state.publicKey,
      ),
    };
    console.log(params);
    try {
      response = await api.get('v1/public/characters', {params});
      this.setState({
        result: response.data.data.results,
        loading: false,
      });

      console.log('RESULT ', this.state.result);
    } catch (error) {
      console.log(error);
    }
  };

  renderSeparator = () => {
    return <ViewLineSeparator />;
  };

  clickNavigation = number => {
    const {result} = this.state;
    if (number < 0 || number > result.length - 1) return;
    console.log(number);
    this.setState(
      {
        currentIndex: number,
        offset: number,
      },
      () => {
        this.loadRespository();
      },
    );
  };

  changeText = async text => {
    console.log(text);
    if (text == '') this.loadRespository();
    this.setState({
      offset: 0,
      nameHero: text,
      currentIndex: 0,
    });

    let response = '';
    let params = {
      ts: this.state.timestamp,
      apikey: this.state.publicKey,
      limit: this.state.limit,
      offset: this.state.offset,
      name: text,
      hash: md5(
        this.state.timestamp + this.state.privateKey + this.state.publicKey,
      ),
    };
    console.log(params);
    try {
      response = await api.get('v1/public/characters', {params});
      this.setState({
        result: response.data.data.results,
      });

      console.log('RESULT ', this.state.result);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const {result, currentIndex, nameHero} = this.state;

    if (result != null) {
      return (
        <ViewContainer>
          <ViewHeader>
            <ViewTitle>
              <TitleBold>BUSCA</TitleBold>
              <SecondTitleBold>MARVEL</SecondTitleBold>
              <NormalTitle>TESTE FORNT-END</NormalTitle>
            </ViewTitle>
            <ViewInput>
              <TitleInput>Nome do Personagem</TitleInput>
              <InputSearch
                placeholder="Pesquisar"
                onChangeText={text => {
                  this.changeText(text);
                }}
                value={nameHero}
              />
            </ViewInput>
          </ViewHeader>
          <FlatList
            style={{flex: 1}}
            data={result}
            renderItem={({item}) => {
              const {path, extension} = item.thumbnail;
              const sizeImage = `${path}/portrait_xlarge.${extension}`;
              return (
                <LineHeader style={styles.itemList}>
                  <ItemFirst>
                    <ImageHero source={{uri: sizeImage}} />
                  </ItemFirst>
                  <ItemSecond>
                    <TextLine style={styles.textList}>{item.name}</TextLine>
                  </ItemSecond>
                </LineHeader>
              );
            }}
            keyExtractor={item => item.id.toString()}
            ListHeaderComponent={
              <ViewHeader>
                <ItemHeader>
                  <ColumFirstHeader>
                    <TextHeader />
                  </ColumFirstHeader>
                  <ColumSecondHeader>
                    <TextHeader>Nome</TextHeader>
                  </ColumSecondHeader>
                </ItemHeader>
              </ViewHeader>
            }
            ItemSeparatorComponent={this.renderSeparator}
            ListFooterComponent={this.renderSeparator}
          />
          {result.length > 0 ? (
            <ViewContentListFooter>
              <ViewListFooter>
                <TouchableOpacity
                  onPress={() => {
                    this.clickNavigation(currentIndex - 1);
                  }}>
                  <Image
                    source={require('~/images/arrow-left.png')}
                    style={styles.imageIconsLeft}
                  />
                </TouchableOpacity>
                {result.map((item, index) => {
                  return (
                    <ViewNumber>
                      <FooterNavigation
                        index={index + 1}
                        clickNavigation={this.clickNavigation}
                      />
                    </ViewNumber>
                  );
                })}
                <TouchableOpacity
                  onPress={() => {
                    this.clickNavigation(currentIndex + 1);
                  }}>
                  <Image
                    source={require('~/images/arrow-right.png')}
                    style={styles.imageIconsRight}
                  />
                </TouchableOpacity>
              </ViewListFooter>
            </ViewContentListFooter>
          ) : (
            <View />
          )}
          <ViewFooterColor />
        </ViewContainer>
      );
    } else {
      return <Text>LOADING</Text>;
    }
  }
}
