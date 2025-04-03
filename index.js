import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.containerNav}>
                <View style={styles.nav}>
                    <Image style={styles.icon} source={require('./images/seta-nav.png')} />
                </View>
                <View style={styles.nav}>
                    <Image style={styles.icon} source={require('./images/dolar-nav.png')} />
                </View>
                <View style={styles.nav}>
                    <Image style={styles.icon} source={require('./images/bolsa-nav.png')} />
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <View style={styles.containerHeader}>
                        <View style={styles.borderUser}>
                            <Image style={styles.iconUser} source={require('./images/perfil.png')} />
                        </View>

                        <View style={styles.containerHeaderIcon}>
                            <View>
                                <Image style={styles.iconHeader} source={require('./images/olho.png')} />
                            </View>
                            <View>
                                <Image style={styles.icon} source={require('./images/help.png')} />
                            </View>
                            <View>
                                <Image style={styles.iconEmail} source={require('./images/e-mail.png')} />
                            </View>
                        </View>

                    </View>
                    <View style={styles.headerNameUser}>
                        <View>
                            <Text style={styles.headerTextUser}>Olá, Henrique</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.containerMain}>
                    <View style={styles.containerConta}>
                        <Text style={styles.textConta}>Conta</Text>
                        <Image style={styles.iconSeta} source={require('./images/seta.png')} />
                    </View>

                    <View>
                        <Text style={styles.textSaldo}>R$ 1.398,27</Text>
                    </View>
                </View >

                <View style={styles.containerOption}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.optionCard}>
                            <View style={styles.optionImage}>
                                <Image style={styles.icon} source={require('./images/pix-icon.png')} />
                            </View>
                            <Text style={styles.textOption}>Pix</Text>
                        </View>

                        <View style={styles.optionCard}>
                            <View style={styles.optionImage}>
                                <Image style={styles.icon} source={require('./images/codigo-de-barras.png')} />
                            </View>
                            <Text style={styles.textOption}>Pagar</Text>
                        </View>

                        <View style={styles.optionCard}>
                            <View style={styles.optionImage}>
                                <Image style={styles.icon} source={require('./images/dolar.png')} />
                            </View>
                            <Text style={styles.textOption}>Pagar Emprestimo</Text>
                        </View>

                        <View style={styles.optionCard}>
                            <View style={styles.optionImage}>
                                <Image style={styles.icon} source={require('./images/transferir.png')} />
                            </View>
                            <Text style={styles.textOption}>Transferir</Text>
                        </View>

                        <View style={styles.optionCard}>
                            <View style={styles.optionImage}>
                                <Image style={styles.icon} source={require('./images/depositar.png')} />
                            </View>
                            <Text style={styles.textOption}>Depositar</Text>
                        </View>
                    </ScrollView>
                </View>



                {/* <View>
                    <Button title='Ir para sobre' onPress={() => router.navigate('/sobre')} />
                </View> */}



                <View>
                    <TouchableOpacity style={styles.containerMeusCartoes} onPress={() => router.navigate('/meusCartoes')}>
                        <Image style={styles.icon} source={require('./images/cartao-de-credito.png')} />
                        <Text style={styles.textMeusCartoes}>Meus Cartões</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerCta}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.cardCta}>
                            <Text style={styles.textCta}>
                                Novidade!
                                <Text> Conheça a ferramente de Controle de Gastos do Nubank</Text>
                            </Text>
                        </View>

                        <View style={styles.cardCta}>
                            <Text style={styles.textCta}>
                                Novidade!
                                <Text> Conheça a ferramente de Controle de Gastos do Nubank</Text>
                            </Text>
                        </View>
                    </ScrollView>
                </View>


                <View style={styles.containerFatura}>
                    <View style={styles.cardCartaoCredito}>
                        <Text style={styles.titleCartaoCredito}>Cartão de crédito</Text>
                        <Image style={styles.iconSeta} source={require('./images/seta.png')} />
                    </View>
                    <Text style={styles.subTextCartaoCredito}>
                        Peça seu cartão de crédito sem anuidade e tenha mais controle da sua vida financeira.
                    </Text>
                </View>
                <View>
                    <TouchableOpacity style={styles.btnCartao}>
                        <Text style={styles.btnText}>Pedir Cartão</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },

    containerNav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 64,
        borderTopWidth: 1,
        borderColor: '#80808020',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        zIndex: 1000,
    },

    scrollContent: {
        paddingBottom: 128
    },

    icon: {
        width: 24,
        height: 24
    },

    header: {
        backgroundColor: '#8B10E0',
        width: '100%',
        height: 150,
        paddingHorizontal: 24,
        // paddingTop: 8,
        justifyContent: 'center'
    },

    iconHeader: {
        width: 28,
        height: 28,
    },

    iconUser: {
        width: 16,
        height: 16
    },

    iconEmail: {
        width: 24,
        height: 24,
    },

    borderUser: {
        width: 36,
        height: 36,
        backgroundColor: '#8B70E050',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    containerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    containerHeaderIcon: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 18,
    },

    headerNameUser: {
        marginTop: 24
    },

    headerTextUser: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },

    containerMain: {
        padding: 24,
        width: '100%'
    },

    containerConta: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    iconSeta: {
        width: 12,
        height: 12,
    },

    textConta: {
        fontWeight: 'bold',
    },

    textSaldo: {
        fontWeight: 'bold',
        marginTop: 16
    },

    containerOption: {
        flexDirection: 'row',
        marginTop: 16
    },

    optionCard: {
        gap: 8,
        width: 84,
        marginLeft: 16
    },

    optionImage: {
        backgroundColor: '#80808020',
        alignItems: 'center',
        padding: 30,
        borderRadius: '50%'
    },

    textOption: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
    },

    containerMeusCartoes: {
        flexDirection: 'row',
        backgroundColor: '#80808020',
        padding: 16,
        width: '92%',
        height: 72,
        alignItems: 'center',
        borderRadius: 16,
        marginTop: 24,
        marginLeft: 16,
    },

    textMeusCartoes: {
        marginLeft: 16,
        fontWeight: 'bold',
        fontSize: 12,

    },

    containerCta: {
        flexDirection: 'row',
        marginTop: 24,

    },

    cardCta: {
        backgroundColor: '#80808020',
        width: 320,
        height: 106,
        marginLeft: 16,
        padding: 16,
        borderRadius: 16,
        justifyContent: 'center'
    },

    textCta: {
        color: '#8B10E0',
        fontWeight: 'bold',
        fontSize: 12
    },

    containerFatura: {
        width: '100%',
        paddingHorizontal: 16,
        borderTopWidth: 1,
        borderColor: '#80808020',
        marginTop: 24,
        paddingVertical: 24

    },

    cardCartaoCredito: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    titleCartaoCredito: {
        fontWeight: 'bold',
    },

    subTextCartaoCredito: {
        fontSize: 12,
        marginTop: 8,
        fontWeight: 'bold',
        width: 360,
    },

    btnCartao: {
        width: 164,
        marginLeft: 16,
        backgroundColor: '#8B10E0',
        padding: 12,
        borderRadius: 24
    },

    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold'
    },



});
