import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class Post extends Component {
  render() {

    console.log('PROPS: ', this.props)
  return (
    <View>
      <Text>{this.props.post.title}</Text>
      <Text>{this.props.post.message}</Text>



      <TouchableOpacity
        // onPress={}
      >
        <Text>EDIT</Text>
      </TouchableOpacity>


      



      <TouchableOpacity
        onPress={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}
      >
        <Text>DELETE</Text>
      </TouchableOpacity>



    </View>
  );
}
}

export default connect()(Post);