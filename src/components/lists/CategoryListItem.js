import React from 'react';
import { StyleSheet, View } from 'react-native';
import { List, Divider } from 'react-native-paper';

const CategoryListItem = ({title}) =>{
    return(
        <View style={styles.categoryList}>
            <List.Item 
                title={title}
                right={props => <List.Icon {...props} icon="chevron-right" />}
            />
            <Divider style={styles.categoryDivider}/>
        </View>
    );
}

const styles = StyleSheet.create({
    categoryList:{
        paddingRight: 15,
        paddingLeft: 15,
    },
    categoryDivider:{
        height: 1,
    },

})

export default CategoryListItem;