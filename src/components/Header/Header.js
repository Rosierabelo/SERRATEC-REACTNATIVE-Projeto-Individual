import React from 'react';
import { StyleSheet, View} from 'react-native';
import { Title, Divider, Paragraph } from 'react-native-paper';

const Header = ({title}) =>{
    return(
        <View style={styles.header}>
            <Title style={styles.title}>{title}</Title>
            <Divider style={styles.divider} />
        </View>
    );
}

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        paddingTop: 20,
    },
    title:{
        fontSize: 15,
    },
    divider:{
        width: 150,
        height: 2,
    },
})

export default Header;