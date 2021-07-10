import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const FeaturedCategory = ({image, title}) =>{
    return(
        <View style={styles.featuredCategory}>
            <Image 
            style={styles.featuredImage}
            source={image}
            />
            <Text style={styles.featuredText}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    featuredCategory:{
        position: 'relative',
        margin: 4,
    },
    featuredImage:{
        width: 115,
        height: 90,
    },
    featuredText:{
        position: 'absolute',
        bottom: 7,
        left: 5,
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default FeaturedCategory;