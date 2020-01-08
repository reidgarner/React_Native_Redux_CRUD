import React, { Component } from 'react';
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
    borderWidth: 1,
    borderColor: 'red',
  },
  title: {
    fontSize: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    width: '70%',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  multilineInput: {
    borderWidth: 1,
    borderColor: 'gray',
    height: '40%',
    width: '70%',
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
  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle;
    const message =  this.getMessage;
    const data = {
      id: new Date(),
      title,
      message
    }
    console.log(data)
  }

  render() {
  return (
      <View style={styles.createContainer}>
        <Text style={styles.title}>Create Post</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Post Title"
          onChangeText={(input)=>this.getTitle = input}
        />
        <TextInput
          style={styles.multilineInput}
          multiline
          placeholder="Enter Post"
          onChangeText={(input)=>this.getMessage = input}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonLabel}>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default PostForm;

PostForm.propTypes = {
};

PostForm.defaultProps = {
};
