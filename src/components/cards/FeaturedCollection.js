
import React from 'react';
import { StyleSheet, View } from 'react-native';
const FeaturedCollection = ({ children }) => {
    return (
        <View style={styles.collection}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    collection: {
        flexDirection: 'row',
        flexBasis: '30%',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    }
})

export default FeaturedCollection;