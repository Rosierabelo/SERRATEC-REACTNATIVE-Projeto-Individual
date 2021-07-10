import React from 'react';
import { Title, ProgressBar, Avatar, Surface } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';

const CardProfile = () => {
    return (
        <Surface style={styles.card}>
            <Avatar.Image source={require('../../assets/images/perfil.jpg')} />
            <View style={styles.viewCard}>
                <Title style={styles.viewTitle}>Você leu 11 de 25 livros</Title>
                <ProgressBar style={styles.progressBar} progress={0.4} color="#000" />
            </View>
            <Text style={styles.percentage}>44%</Text>
        </Surface>

    );
}

const styles = StyleSheet.create({
    card: {
        margin: 15,
        height: 110,
        marginBottom: 20,
        borderRadius: 10,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
    },
    viewCard:{
        padding: 15,
    },
    viewTitle:{
        fontSize: 15,
        marginBottom:10,
    },
    progressBar:{
        width: 210,
        height: 5,
        borderRadius: 20,
        backgroundColor: "#d6d6d6",
    },
    percentage:{
        marginTop: 40,
    },
})


export default CardProfile;