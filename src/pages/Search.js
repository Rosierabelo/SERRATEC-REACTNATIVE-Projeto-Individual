import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import FeaturedCategory from '../components/cards/FeaturedCategory';
import Header from '../components/Header/Header';
import FeaturedCollection from '../components/cards/FeaturedCollection';
import CategoryList from '../components/lists/CategoryList';
import CategoryListItem from '../components/lists/CategoryListItem';
import { Button, Paragraph } from 'react-native-paper';

const Search = () => {
    return (
        <ScrollView>
            <Header title="EXPLORAR POR GÊNERO"/>
            <Paragraph style={styles.paragraph}>
                Ver novos lançamentos, livros mais lidos, citações, listas e mais destes gêneros populares.
            </Paragraph>
            <FeaturedCollection>
                <FeaturedCategory image={require('../assets/images/backgroundBlue.jpeg')} title="Aventura" />
                <FeaturedCategory image={require('../assets/images/backgroundBlack.jpeg')} title="Histórico" />
                <FeaturedCategory image={require('../assets/images/backgroundPurple.jpeg')} title="Inspirador" />
                <FeaturedCategory image={require('../assets/images/backgroundGreen.jpeg')} title="Literatura" />
                <FeaturedCategory image={require('../assets/images/backgroundOrange.jpeg')} title="Referência" />
                <FeaturedCategory image={require('../assets/images/backgroundRed.jpeg')} title="Contos" />
            </FeaturedCollection>
            <CategoryList>
                <CategoryListItem title="Arte" />
                <CategoryListItem title="Biografia" />
                <CategoryListItem title="Negócios" />
                <CategoryListItem title="Literatura feminina" />
                <CategoryListItem title="Infatil" />
                <CategoryListItem title="Clássicos" />
                <CategoryListItem title="Quadrinhos" />
                <CategoryListItem title="Contemporâneo" />
                <CategoryListItem title="Fantasia" />
                <CategoryListItem title="Ficção" />
                <CategoryListItem title="História" />
                <CategoryListItem title="Terror" />
                <CategoryListItem title="Humor" />
            </CategoryList>
            <Button style={{padding: 10}} color= '#00635D'>EXPLORE MAIS GÊNEROS</Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    paragraph:{
        padding: 15,
        textAlign: 'center',
    },
})

export default Search;