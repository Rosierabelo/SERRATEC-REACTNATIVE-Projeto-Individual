import React from 'react';
import { List, Divider } from 'react-native-paper';
import { StyleSheet, Image, View } from 'react-native';

const BookListItem = ({ title, subtitle, image }) => (
    <View style={styles.bookList}>
        <List.Item 
            style={styles.book}
            title={title}
            description={subtitle}
            left={()=> <Image style={styles.bookImage} source={image} />}
        />
        <Divider style={styles.bookDivider}/>
    </View>
);

const styles = StyleSheet.create({
    bookList:{
        paddingRight: 15,
        paddingLeft: 15,
    },
    book: {
        padding:0,
    },
    bookImage:{
        width: 100,
        height: 90,
        marginRight: 10,
    },
    bookDivider:{
        height: 1,
        marginBottom: 10,
    },

})

export default BookListItem;