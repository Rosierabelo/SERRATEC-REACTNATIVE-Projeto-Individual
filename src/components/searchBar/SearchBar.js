import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SearchBar = () =>{
    return (
        <View style={styles.searchBar}> 
            <TextInput 
                placeholder="Título, autor ou ISBN"
                style={styles.searchInput}
            />
            <MaterialCommunityIcons name='magnify' color='gray' size={26} style={styles.searchLeftIcon} />
            <MaterialCommunityIcons name='camera-outline' color='gray' size={26} style={styles.searchRightIcon} />
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        padding: 10,
    },
    searchLeftIcon:{
        position: 'absolute',
        left: 20,
    },
    searchRightIcon:{
        position:'absolute',
        right: 15,
    },
    searchInput:{
        flex: 1,
        height: 38,
        borderRadius: 50,
        backgroundColor: '#fff',
        paddingLeft: 40,
    },
})

export default SearchBar;