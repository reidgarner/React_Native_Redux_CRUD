import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import Post from './Post';
import EditComponent from './EditComponent';

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  scrollview: {
    borderTopColor: 'black',
    borderTopWidth: 1,
  },
  spaceMan: {
    width: '100%',
    height: 50,
  },
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
        <Text style={styles.title}>All Posts</Text>
        <ScrollView style={styles.scrollview}>
          {postList}
          <View style={styles.spaceMan} />
        </ScrollView>
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
