import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text  } from 'react-native';
import { RSS_UPDATE, UPDATE_ITEMS_FAILED } from '../../Services/redux/actions.js';
import { styles, growFlex, flatten } from '../../Styles/styles.js';
import ItemView from '../items/itemView.js';
import MainHeader from '../headers/mainHeader.js';
import FeedModal from '../modal/modal.js';
import Loading from '../modal/loading.js';
import { addUrl, 
	getAllSubs, 
	initFeeds } from '../../Services/asyncStorage.js';
import RssList from './RssList.js';

/**
*  RssBase is the main component for displaying the RSS feeds
*/
class RssBase extends Component {
  constructor(props){
    super(props);
  }
  async componentWillMount(){
    this.props.init();
  }
  componentDidUpdate(){

  }
  render(){
    if(this.props.item){
      return(<ItemView />);
    }
    if(this.props.loading){
      return(
        <View style={ styles.container } 
	testID="rss_base">
          <MainHeader />
          <FeedModal />
	  <Loading />
        </View>
      );
      }
    return(<RssList />)
 }
}

// all we need are the items
const mapStateToProps = ({items}, props) => {
  return {
    ...items
  };
}

const dispatchToStore = (dispatch) => {
  return { 
    init: initFeeds(dispatch) 
  }
}

export default connect(mapStateToProps, dispatchToStore)(RssBase);
