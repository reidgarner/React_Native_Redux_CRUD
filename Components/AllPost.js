import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

import Post from './Post';

const styles = StyleSheet.create({

});

class  AllPost extends Component {
  render() {

    const postList = this.props.posts.postReducer.map(post => (
      <Post key={post.id} post={post} />
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
