import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Next extends Component {
  render(){
    return(
    <View style={[this.props.styles]} >
      <Text onPress={() => this.props.action()}>
        Next
      </Text>
    </View>)
  }
}