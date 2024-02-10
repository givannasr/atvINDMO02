import { TextInput, StyleSheet, Text, View , Button, Linking} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function DesenvolvedorFrontEnd() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.caixa}>
                <TextInput style={styles.infos}>Desenvolvedor Front-End</TextInput>
                <Text style={styles.texto}>O curso de Qualificação Profissional de Desenvolvedor Front-End
                    tem por objetivo o desenvolvimento de competências que possibilitem ao concluinte programar
                    sistemas utilizando as principais tecnologias do front-end, disponibilizando visualmente
                    ao usuário uma forma amigável de acesso ao sistema, utilizando tecnologias como HTML, CSS
                    e JavaScript e considerando as normas, padrões e requisitos técnicos, de qualidade,
                    saúde e segurança e de sustentabilidade.</Text>
                <TextInput style={styles.infos}>Carga horaria:</TextInput>
                <TextInput>160 horas</TextInput>
                <Button color={'red'} title='Inscreva-se' onPress={() => Linking.openURL('https://www.sp.senai.br/cursos/0/tecnologia-da-informacao-e-informatica')}></Button>
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