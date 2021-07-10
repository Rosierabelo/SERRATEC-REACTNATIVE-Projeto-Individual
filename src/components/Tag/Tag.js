import React from 'react';
import { Chip } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const Tag = ({content}) => (
  <Chip style={styles.tagItem} textStyle={styles.text}>{content}</Chip>
);

const styles = StyleSheet.create({
    tagItem:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e0ecea',
        margin: 4,
    },
    text: {
        color: '#000',
        fontSize: 13,
    }
})

export default Tag;