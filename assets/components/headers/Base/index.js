import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { styles, growFlex, headerBG } from '../../../Styles/styles.js';
import { REMOVE_ITEM, TOGGLE_MODAL } from '../../../Services/redux/actions.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeedModal from '../../modal/modal.js';

class MainHeader extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View>
	<View 
	style={[styles.header]}
	testID="main_header"
	>
	  <Text 
	  onPress={this.props.open("menu")} 
	  style={[styles.fontLeft, growFlex(1), {padding: 5 }]}>
	    <Icon name="list" size={30} color="#080707"/>
	  </Text>
	  <Text 
	  onPress={this.props.open("menu")} 
	  style={ growFlex(1)}> Menu </Text>
	  <Text onPress={this.props.open("new_feed")} 
	  style={[styles.fontLeft, growFlex(2)]}>
	    <Icon name="plus" size={30} color="#080707"/>
	  </Text>
	  <Text 
	  onPress={this.props.open("new_feed")} 
	  style={growFlex(1)}> Add </Text>
	</View>
	<FeedModal />
      </View>
    )
  }
}

const mapStateToProps = ({display}, props) => {
  return { ...display };
}

const dispatchToStore = (dispatch) => {
  return {
    open: (modal_name) => (event) => dispatch({type: TOGGLE_MODAL, name: modal_name})
  }

}

export default connect(mapStateToProps, dispatchToStore)(MainHeader);