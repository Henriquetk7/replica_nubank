import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function MeusCartoes() {

    const router = useRouter();

    return (
        <View style={styles.wrapperWhite}>
            <View style={styles.contentTop}>
                <TouchableOpacity onPress={() => router.push('/meusCartoes')}>
                    <Image style={styles.exitIcon} source={require('./images/remover.png')} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Cartão virtual</Text>
                <TouchableOpacity onPress={() => router.push('/ajuda')}>
                    <Image style={styles.ajudaIcon} source={require('./images/ajuda.png')} />
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Image style={styles.imgCartao} source={require('./images/cartao-virtual-nubank.png')} />

                <View style={styles.containerInfoCartao}>
                    <View style={styles.sectionInfoCartao}>
                        <View>
                            <Text style={styles.textInfoCartao}>Número</Text>
                            <Text style={styles.numCartao}>1654 3654 5435 6541</Text>
                        </View>
                        <Text style={styles.textCopiar}>Copiar</Text>
                    </View>
                    <View style={styles.sectionInfoCartao}>
                        <View>
                            <Text style={styles.textInfoCartao}>Nome</Text>
                        </View>
                        <Text style={styles.contentText}>Henrique Macário</Text>
                    </View>
                    <View style={styles.sectionInfoCartao}>
                        <View>
                            <Text style={styles.textInfoCartao}>Validade</Text>
                        </View>
                        <Text style={styles.contentText}>05/28</Text>
                    </View>
                    <View style={styles.sectionInfoCartao}>
                        <View>
                            <Text style={styles.textInfoCartao}>CVV</Text>
                        </View>
                        <Text style={styles.contentText}>654</Text>
                    </View>
                    <View style={styles.sectionInfoCartao}>
                        <View>
                            <Text style={styles.textInfoCartao}>Função</Text>
                        </View>
                        <Text style={styles.contentText}>Débito e crédito</Text>
                    </View>

                    <View style={styles.containerOption}>
                        <View style={styles.sectionOption}>
                            <View style={styles.wrapperImgOption}>
                                <Image style={styles.imgOption} source={require('./images/cadeado.png')} />
                            </View>
                            <Text style={styles.textOption}>Bloquear</Text>
                        </View>
                        <View style={styles.sectionOption}>
                            <View style={styles.wrapperImgOption}>
                                <Image style={styles.imgOption} source={require('./images/configuracao.png')} />
                            </View>
                            <Text style={styles.textOption}>Configurar</Text>
                        </View>

                    </View>

                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    wrapperWhite: {
        flex: 1,
        backgroundColor: '#fff',
    },

    container: {
        paddingHorizontal: 24
    },

    contentTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 24,
    },
    exitIcon: {
        width: 34,
        height: 34,
        opacity: 0.5,
    },

    pageTitle: {
        fontWeight: 'bold',
    },


    ajudaIcon: {
        width: 24,
        height: 24,
        opacity: 0.5,
    },

    imgCartao: {
        width: 350,
        height: 216,
        margin: 'auto'
    },

    sectionInfoCartao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
    },

    textInfoCartao: {
        fontWeight: 'bold',
    },

    numCartao: {
        fontSize: 12,
        opacity: 0.5,
    },

    textCopiar: {
        fontWeight: 'bold',
        color: '#8B10E0',
    },

    contentText: {
        fontWeight: 'bold',
        opacity: 0.5,
    },

    containerOption: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 56
    },

    sectionOption: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    wrapperImgOption: {
        marginBottom: 8,
        backgroundColor: '#E7E9F3',
        alignItems: 'center',
        borderRadius: '100%',
        padding: 24,
        width: 76

    },

    imgOption: {
        width: 24,
        height: 24,
    },

    textOption: {
        textAlign: 'center',
        fontWeight: 'bold',
    }
})