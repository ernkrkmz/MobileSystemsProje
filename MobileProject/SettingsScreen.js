import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = () => {
    return (
        <View>
            <Text style={styles.forTest}>
                This is the settings page
            </Text>
        </View>
         
    );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    forTest: {
      alignItems: 'center',
      justifyContent: 'center',
      color: 'red',
      fontSize: 30,
    }
  });
export default SettingsScreen;