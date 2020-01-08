import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

import Post from './Post';
import EditComponent from './EditComponent';

const styles = StyleSheet.create({

});

class  AllPost extends Component {
  render() {

    const postList = this.props.posts.postReducer.map(post => (
      <View key={post.id}>
        {post.editing ? 
          <EditComponent post={post} key={post.id} /> : <Post key={post.id} post={post} />
        }
      </View>
    ));

    return (
      <View>
        <Text>All Posts</Text>
        {postList}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      posts: state
  }
}

export default connect(mapStateToProps)(AllPost);

AllPost.propTypes = {
};

AllPost.defaultProps = {
};
