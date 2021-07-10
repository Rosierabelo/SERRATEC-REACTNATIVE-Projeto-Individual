import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

const ButtonProfile = ({ text }) => (
    <View style={styles.button}>
        <Button style={{ padding: 10, width: 315, height: 45, justifyContent: 'center', borderColor: '#907444', borderWidth: 1 }} mode="outlined" color="#000" uppercase={false} >
            {text}
        </Button>
    </View>
);

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
    },
})

export default ButtonProfile;