import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function MeusCartoes() {

    const router = useRouter();

    return (
        <View style={styles.wrapperWhite}>
            <View style={styles.contentTop}>
                <TouchableOpacity onPress={() => router.push('/cartaoVirtual')}>
                    <Image style={styles.exitIcon} source={require('./images/remover.png')} />
                </TouchableOpacity>
                <Text style={styles.pageTitle}>Me Ajuda</Text>
                <View style={styles.nullView}></View>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>Como podemos te ajudar hoje, Henrique?</Text>

                <View style={styles.search}>
                    <Image style={styles.searchIcon} source={require('./images/lupa.png')} />
                    <Text style={styles.placeholder}>Qual a sua dúvida?</Text>
                </View>

                <View style={styles.sectionAjuda}>
                    <Text style={styles.auxTitleAjuda}>
                        Dúvidas que podem te ajudar
                    </Text>

                    <View style={styles.containerAjuda}>
                        <View style={styles.cardAjuda}>
                            <Image style={styles.icon} source={require('./images/cartao-de-credito.png')} />
                            <View>
                                <Text style={styles.titleCard}>Cartão de crédito</Text>
                                <Text style={styles.subTextCard}>Limite de crédito, gerenciar cartão, Ultravioleta</Text>
                            </View>
                        </View>
                        <Image style={styles.iconSeta} source={require('./images/seta.png')} />
                    </View>

                    <View style={styles.containerAjuda}>
                        <View style={styles.cardAjuda}>
                            <Image style={styles.icon} source={require('./images/dolar.png')} />
                            <View>
                                <Text style={styles.titleCard}>Emprestimo</Text>
                                <Text style={styles.subTextCard}>Gerenciar emprestimo, pagamentos e atrasos...</Text>
                            </View>
                        </View>
                        <Image style={styles.iconSeta} source={require('./images/seta.png')} />
                    </View>

                    <View style={styles.containerAjuda}>
                        <View style={styles.cardAjuda}>
                            <Image style={styles.icon} source={require('./images/perfil-de-usuario.png')} />
                            <View>
                                <Text style={styles.titleCard}>Dados pessoais e segurança</Text>
                                <Text style={styles.subTextCard}>Informações pessoais, perdi meu cartão, senhas...</Text>
                            </View>
                        </View>
                        <Image style={styles.iconSeta} source={require('./images/seta.png')} />
                    </View>

                    <View style={styles.containerAjuda}>
                        <View style={styles.cardAjuda}>
                            <Image style={styles.icon} source={require('./images/pix-icon.png')} />
                            <View>
                                <Text style={styles.titleCard}>Pix</Text>
                                <Text style={styles.subTextCard}>Transferência, mudar chavae Pix, limites...</Text>
                            </View>
                        </View>
                        <Image style={styles.iconSeta} source={require('./images/seta.png')} />
                    </View>
                </View>
            </View>

            <View style={styles.containerContato}>
                <View style={styles.cardContato}>
                    <Image style={styles.icon} source={require('./images/msg.png')} />
                    <Text style={styles.textContato}>Entrar em contato</Text>
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

    nullView: {
        width: 34,
    },

    contentTop: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 24,
    },
    exitIcon: {
        width: 34,
        height: 34,
        opacity: 0.5,
    },

    pageTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
    },

    title: {
        fontWeight: 'bold',
        width: 200
    },

    search: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8B10E010',
        borderRadius: 32,
        padding: 12,
        marginTop: 32,
        gap: 16,
    },

    searchIcon: {
        width: 24,
        height: 24
    },

    placeholder: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#8B10E0',
    },

    auxTitleAjuda: {
        fontSize: 10,
        fontWeight: 'bold',
        opacity: 0.5,
        marginTop: 32,
    },

    containerAjuda: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 32,
    },

    cardAjuda: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
    },

    icon: {
        width: 24,
        height: 24
    },

    titleCard: {
        fontWeight: 'bold',
        fontSize: 12

    },

    subTextCard: {
        fontSize: 10,
        opacity: 0.5,
    },

    iconSeta: {
        width: 12,
        height: 12,
        opacity: 0.5,
    },

    containerContato: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 1000,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 24,
        borderTopWidth: 1,
        borderColor: '#EDEDED',
    },

    cardContato: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
        backgroundColor: '#EDEDED',
        padding: 12,
        borderRadius: 32,
        width: '100%',
        justifyContent: 'center',
    }




})