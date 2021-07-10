import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../components/Header/Header';
import { Button, Divider} from 'react-native-paper';
import CategoryList from '../components/lists/CategoryList';
import CategoryListItem from '../components/lists/CategoryListItem';
import ButtonProfile from '../components/button/buttonProfile';
import TagCollection from '../components/Tag/TagCollection';
import Tag from '../components/Tag/Tag';
import CardProfile from '../components/cards/CardProfile';
import BookListItem from '../components/lists/BookListItem';
import BookList from '../components/lists/BookList';

const Profile = () =>{
    return(
        <ScrollView style={styles.container}>
            <Header title="DESAFIO DE LEITURA 2021"/>
            <CardProfile />
            <Header title="ESTANTES"/>
            <ButtonProfile text="Atualizar o progresso de leitura"/>
            <BookList>
                <BookListItem title="Leitura concluída" subtitle="106 livros" image={require('../assets/images/books.jpeg')} />
                <BookListItem title="Leitura atual" subtitle="6 livros" image={require('../assets/images/books2.png')} />
                <BookListItem title="Leitura desejada" subtitle="179 livros" image={require('../assets/images/books3.png')} />
            </BookList>
            <Button style={{padding: 10}} color= '#00635D' labelStyle={{fontWeight: 'bold', fontSize: 15}} >VER TUDO</Button>
            <Divider style={styles.profileDivider}/>
            <Header title="ETIQUETAS"/>
            <TagCollection>
                <Tag content="2020 (2)"/>
                <Tag content="poesia (1)"/>
                <Tag content="2021 (3)"/>
                <Tag content="2019 (4)"/>
                <Tag content="scifi (2)"/>
                <Tag content="feminismo (5)"/>
                <Tag content="inglês (20)"/>
            </TagCollection>
            <Button style={{padding: 10}} color= '#00635D' labelStyle={{fontWeight: 'bold', fontSize: 15}}>VER TUDO</Button>
            <Divider style={styles.profileDivider}/>
            <ButtonProfile text="+Criar uma nova etiqueta ou estante"/>
            <Header title="ATIVIDADE DE LEITURA"/>
            <Divider style={styles.profileDivider}/>
            <CategoryList>
                <CategoryListItem title="Notas e destaques do Kindle"/>
                <CategoryListItem title="Desafio de leitura"/>
                <CategoryListItem title="2020 ano em livros"/>
                <CategoryListItem title="Editar seus gêneros favoritos"/>
            </CategoryList>
            <View style={styles.endPage}></View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
    },
    profileDivider:{
        height: 1.2,
    },
    endPage:{
        height: 150,
    }

})

export default Profile;