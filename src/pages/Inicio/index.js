import { SafeAreaView, Text, StyleSheet, Image, View, Platform } from 'react-native';

export default function Inicio() {

    return (
        <SafeAreaView style={[styles.container, styles.androidSafeArea]}>
            <Image source={require('../../assets/logo-senai.png')} style={styles.logo}></Image>
            <View style={styles.caixa}>
                <Text style={styles.infos}>'Nome do Aluno'</Text>
                <Text style={styles.infos}>Sumaré, 30/01/2024</Text>
                <Text style={styles.infos}>Escola SENAI Celso Charuri</Text>
                <Text style={styles.infos}>Técnico em Desenvolvimento de Sistemas</Text>
                <Text style={styles.infos}>INDMO - Interface para Dispositivos Móveis</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
      },
    container: {
        flex: 1,
        color: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
    },
    logo: {
        height: 100,
        width: 300,
    },
    infos: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    caixa: {
        alignItems: 'center',
        gap: 15,
        backgroundColor: '#c0c0c0',
        borderRadius: 5,
        width: '99%',
        height: '40%',
        margin: 70,
        borderWidth: 5,
        justifyContent: 'center',
    }
});