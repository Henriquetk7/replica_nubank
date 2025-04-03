import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function MeusCartoes() {

    const router = useRouter();

    return (
        <View style={styles.wrapperWhite}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => router.push('/')}>
                    <Image style={styles.exitIcon} source={require('./images/remover.png')} />
                </TouchableOpacity>
                <View style={styles.sectionCartoes}>
                    <Text style={styles.title}>Meus cartões</Text>
                    <Text style={styles.subTitle}>Cartão físico</Text>

                    <View style={styles.containerCartoes}>
                        <View style={styles.cartaoInfo}>
                            <Image style={styles.cartaoIcon} source={require('./images/cartao-de-credito.png')} />
                            <View>
                                <Text style={styles.cartaoName}>Henrique M Oliveira</Text>
                                <Text style={styles.cartaoNum}>**** 6541</Text>
                            </View>
                        </View>
                        <Image style={styles.iconSeta} source={require('./images/seta.png')} />
                    </View>
                </View>
                <View style={styles.sectionCartoes}>
                    <Text style={styles.subTitle}>Cartão virtual</Text>

                    <TouchableOpacity onPress={() => router.push('/cartaoVirtual')}>
                        <View style={styles.containerCartoes}>
                            <View style={styles.cartaoInfo}>
                                <Image style={styles.cartaoIconVitual} source={require('./images/cartao-de-credito.png')} />
                                <View>
                                    <Text style={styles.cartaoName}>Henrique M Oliveira</Text>
                                    <Text style={styles.cartaoNum}>**** 6541</Text>
                                </View>
                            </View>
                            <View style={styles.tagVirtual}></View>
                            <Text style={styles.nameTagVirtual}>Virtual</Text>
                            <Image style={styles.iconSeta} source={require('./images/seta.png')} />
                        </View>
                    </TouchableOpacity>
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
        padding: 24
    },

    exitIcon: {
        width: 34,
        height: 34,
        opacity: 0.5,
        position: 'absolute',
        left: -8
    },

    title: {
        marginTop: 48,
        fontSize: 30,
        fontWeight: 'bold',
    },

    subTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        opacity: 0.5,
        marginTop: 40,
    },

    containerCartoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 32,
    },

    cartaoInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 24,
    },

    cartaoIcon: {
        width: 24,
        height: 24
    },

    cartaoName: {
        fontWeight: 'bold',
    },

    cartaoNum: {
        fontSize: 12,
        opacity: 0.5,
    },

    iconSeta: {
        width: 12,
        height: 12,
        opacity: 0.5,
    },

    cartaoIconVitual: {
        width: 24,
        height: 24,
        opacity: 0.5,
    },

    nameTagVirtual: {
        backgroundColor: '#E5E5E5',
        borderRadius: 16,
        paddingHorizontal: 6,
        fontSize: 10,
        fontWeight: 'bold',
    }


})