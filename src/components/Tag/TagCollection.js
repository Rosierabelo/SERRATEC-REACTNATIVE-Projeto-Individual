import React from 'react';
import { StyleSheet, View } from 'react-native';
const TagCollection = ({ children }) => {
    return (
        <View style={styles.collection}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    collection: {
       flexDirection: 'row',
       padding: 20,
       flexWrap: 'wrap',
       justifyContent: 'center',
       paddingBottom:0,
    }
})

export default TagCollection