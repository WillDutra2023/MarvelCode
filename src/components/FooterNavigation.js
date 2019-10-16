import React, {Component} from 'react';

import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// import { Container } from './styles';

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderWidth: 1,
    padding: 5,
    borderRadius: 30 / 2,
  },
});

export default class FooterNavigation extends Component {
  render() {
    const {index, clickNavigation} = this.props;
    return (
      <View>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => clickNavigation(index - 1)}>
          <Text style={styles.text}>{index}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
