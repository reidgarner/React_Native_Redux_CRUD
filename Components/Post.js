import React, { Component } from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'gray',
    // borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  bold: {
    fontWeight: 'bold'
  },
  buttonContainer: {
    marginTop: 5,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    height: 30,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});

class Post extends Component {
  render() {
  return (
    <View style={styles.container}>
      <Text>
        <Text style={styles.bold}>Title:</Text>
        {' '}
        {this.props.post.title}
      </Text>
      <Text>
      <Text style={styles.bold}>Post:</Text>
        {' '}
        {this.props.post.message}
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}
          style={styles.button}
        >
          <Text>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}
          style={styles.button}
        >
          <Text>DELETE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
}

export default connect()(Post);