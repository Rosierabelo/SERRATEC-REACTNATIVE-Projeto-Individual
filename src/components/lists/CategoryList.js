import React from 'react';
import { View } from 'react-native';

const CategoryList = ({children}) =>{
    return(
        <View style={{paddingTop: 15}}>
            {children}
        </View>
    )
}

export default CategoryList;