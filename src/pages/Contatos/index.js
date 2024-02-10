import { SafeAreaView, Text, StyleSheet, Button, TextInput, Platform, View } from 'react-native';


export default function Contatos() {

    return (
        <SafeAreaView style={styles.androidSafeArea}>
            <View style={styles.container}>
                <Text style={styles.texto1}>Entre em contato conosco:</Text>

                <Text style={styles.texto2}>Seu nome:</Text>
                <TextInput placeholder='Nome' style={styles.input}></TextInput>

                <Text style={styles.texto2}>Email:</Text>
                <TextInput placeholder='exemplo@gmail.com' style={styles.input}></TextInput>

                <Text style={styles.texto2}>Sua mensagem:</Text>
                <TextInput placeholder='Escreva sua mensagem aqui...' style={styles.input} />

                <Button title='Enviar' color={'red'}
                    onPress={() => alert('Mensagem enviada com sucesso!')} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    androidSafeArea: {
        paddingTop: Platform.OS === 'android' ? 30 : 0,
    },
    container: {
        alignItems: 'center',
        backgroundColor: '#f2745d',
        borderRadius: 5,
        width: '95%',
        height: '90%',
        margin:10,
        gap:7
    },
    texto1: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'black'
    },
    texto2: {
        fontSize: 17,
        marginTop:10
    },
    input: {
        height: 40,
        width: 300,
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        paddingLeft: 20,
        marginTop: 5,
        backgroundColor: '#ffffff',
        marginLeft: 10
    },
})