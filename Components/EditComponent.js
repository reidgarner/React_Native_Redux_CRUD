import React, { Component } from 'react';
import { connect } from 'react-redux';

import { 
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
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
<View>
    <TextInput
      placeholder="Enter Post Title"
      onChangeText={(input)=> this.getTitle = input}
    />
    <TextInput
      multiline
      placeholder="Enter Post"
      onChangeText={(input)=> this.getMessage = input}
    />
    <TouchableOpacity
      onPress={this.handleEdit}
    >
      <Text>Update</Text>
  </TouchableOpacity>
</View>
);
}
}
export default connect()(EditComponent);