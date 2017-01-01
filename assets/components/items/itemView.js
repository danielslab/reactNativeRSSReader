import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../headers/header.js';
import { styles, growFlex, flatten } from '../../Styles/styles.js';
import { View, WebView, ScrollView, Dimensions } from 'react-native';


class ItemView extends Component{
  constructor(props){
    super(props);
  }
  secureUri(uri){
    if(typeof(uri) != "string"){
      uri = uri[0];
    }
    const isSecure = /^\s*[Hh][Tt]{2}[Pp][Ss]/;
    const notSecure = /^\s*[Hh][Tt]{2}[Pp]/;
    if(isSecure.test(uri)){
      return uri;
    }
    if(notSecure.test(uri)){
      return uri;
    }
    return uri;
  }
  render(){
    let {width, height, scale} = Dimensions.get('window');
    return(
        <View style={{ flex: 1}}>
          <Header />
          <ScrollView style={styles.scollWebView}>
             <WebView source={{uri: this.secureUri(this.props.item.link) }} style={{ height: height, width: width }} />
          </ScrollView>
        </View>
        )
  }
};

const mapStateToProps = (state, props) => {
  return { item: state.reduceItems.item };
}

const dispatchToStore = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, dispatchToStore)(ItemView);


