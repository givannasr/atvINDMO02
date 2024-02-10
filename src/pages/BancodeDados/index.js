import { StyleSheet,TextInput, Text, View, Linking, Button} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BancodeDados() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.caixa}>
            <TextInput style={styles.infos}>Banco de Dados</TextInput>
            <Text style={styles.texto}>O Curso de Aperfeiçoamento Profissional Banco de Dados 
                para Data Science tem por objetivo o desenvolvimento de 
                competências relativas à análise, planejamento, criação 
                e manipulação de bancos de dados relacionais por meio de 
                técnicas de programação, seguindo boas práticas, 
                procedimentos e normas.</Text>
            <TextInput style={styles.infos}>Carga horaria:</TextInput>
            <TextInput>40 Horas</TextInput>
            <Button color={'red'} title='Inscreva-se' onPress={ () => Linking.openURL('https://www.sp.senai.br/cursos/0/tecnologia-da-informacao-e-informatica')}></Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    infos: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    caixa: {
        alignItems: 'center',
        backgroundColor: '#f2745d',
        borderRadius: 5,
        width: '95%',
        height: '70%',
        borderWidth: 5,
        justifyContent: 'center',
        margin: 10
    },
    texto: {
        textAlign: 'center',
        fontSize: 16
    }
});