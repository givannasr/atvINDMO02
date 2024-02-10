import { SafeAreaView, Text, StyleSheet, View, Platform, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Cursos() {

    const navegation = useNavigation();

    function navegaBancodeDados() {
        navegation.navigate('BancodeDados');
    }
    function navegaCiberseguranca() {
        navegation.navigate('Ciberseguranca');
    } function navegaDesenvolvedor() {
        navegation.navigate('DesenvolvedorFrontEnd');
    }

    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <Text style={styles.infos}>Cursos sugeridos para você:</Text>
            <View style={styles.caixa}>
                <Text style={styles.infos}>Banco de Dados para Data Science</Text>
                <Button color={'red'} title='Saiba mais' onPress={navegaBancodeDados}></Button>
            </View>
            <View style={styles.caixa}>
                <Text style={styles.infos}>Cibersegurança na Nuvem</Text>
                <Button color={'red'} title='Saiba mais' onPress={navegaCiberseguranca}></Button>
            </View>
            <View style={styles.caixa}>
                <Text style={styles.infos}>Desenvolvedor Front-end</Text>
                <Button color={'red'} title='Saiba mais' onPress={navegaDesenvolvedor}></Button>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
    caixa: {
        backgroundColor: '#f2745d',
        borderRadius: 5,
        width: '95%',
        height: '25%',
        borderWidth: 5,
        margin: 10,
        alignItems: 'center',

    },
    infos: {
        fontSize: 17,
        fontWeight: 'bold',
        marginLeft: 20,
        margin: 15
    },
})