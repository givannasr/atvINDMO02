import { TextInput, StyleSheet, View, Text, Button, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Cibersegurança() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.caixa}>
                <TextInput style={styles.infos}>Cibersegurança na nuvem</TextInput>
                <Text style={styles.texto}>O curso de Aperfeiçoamento Profissional de Cibersegurança na Nuvem
                    tem por objetivo o desenvolvimento de competências
                    relativas à aplicação de procedimentos e configurações de segurança
                    visando o aumento da resiliência cibernética em estruturas e aplicações na nuvem.</Text>
                <TextInput style={styles.infos}>Carga horaria:</TextInput>
                <TextInput>20 horas</TextInput>
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