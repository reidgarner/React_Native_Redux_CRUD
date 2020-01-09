import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  createContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: '80%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  multilineInput: {
    borderWidth: 1,
    borderColor: 'gray',
    height: '50%',
    width: '80%',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  button: {
    backgroundColor: 'lightgray',
    borderRadius: 5,
    height: 50,
    width: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 16,
  },
});

class PostForm extends Component {
  handleSubmit = () => {
    const title = this.getTitle;
    const message =  this.getMessage;
    const data = {
      id: new Date(),
      title,
      message,
      editing: false,
    }
    this.props.dispatch(
      {
        type:'ADD_POST',
        data
      }
    );
    this.getTitle = '';
    this.getMessage = '';
  }

  render() {
  return (
      <View style={styles.createContainer}>
        <Text style={styles.title}>Create Post</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Post Title"
          onChangeText={(input)=> this.getTitle = input}
          ref={input => { this.titleInput = input }}
        />
        <TextInput
          style={styles.multilineInput}
          multiline
          placeholder="Enter Post"
          onChangeText={(input)=> this.getMessage = input}
          ref={input => { this.postInput = input }}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.handleSubmit();
            this.titleInput.clear();
            this.postInput.clear();
          }}
        >
          <Text style={styles.buttonLabel}>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(PostForm);

PostForm.propTypes = {
};

PostForm.defaultProps = {
};
