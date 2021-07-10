import React from 'react';
import { View } from 'react-native';

const BookList = ({children}) =>{
    return(
        <View style={{paddingTop: 15}}>
            {children}
        </View>
    )
}

export default BookList;