import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1,
    // borderColor: 'purple',
    // borderRadius: 5,
    padding: 10,
    margin: 5,
    alignItems: 'center',
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
    height: 150,
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
    height: 40,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
  },
});

class EditComponent extends Component {
handleEdit = () => {
  const newTitle = this.getTitle;
  const newMessage = this.getMessage;
  const data = {
    newTitle,
    newMessage
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<View style={styles.container}>
    <TextInput
      placeholder="Enter Post Title"
      onChangeText={(input)=> this.getTitle = input}
      style={styles.input}
    />
    <TextInput
      multiline
      placeholder="Enter Post"
      onChangeText={(input)=> this.getMessage = input}
      style={styles.multilineInput}
    />
    <TouchableOpacity
      onPress={this.handleEdit}
      style={styles.button}
    >
      <Text>Update</Text>
  </TouchableOpacity>
</View>
);
}
}
export default connect()(EditComponent);