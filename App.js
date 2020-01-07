/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import PostForm from 'React_Native_Redux_CRUD/Components/PostForm';
import AllPost from 'React_Native_Redux_CRUD/Components/AllPost';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topHalf: {
    flex: 1,
    width: '100%',
    borderWidth: 2,
    borderColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHalf: {
    flex: 1,
    width: '100%',
    borderWidth: 2,
    borderColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topHalf}>
        <PostForm />
      </View>
      <View style={styles.bottomHalf}>
        <AllPost />
      </View>
    </View>
  );
};



export default App;