import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View, Card } from 'react-native-ui-lib';

export default function TabTwoScreen() {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text>Escolha Sua Categoria</Text>
                    </View>
                    <View>
                        <Card style={styles.card} enableShadow={true}></Card>
                        <Card style={styles.card} enableShadow={true}></Card>
                        <Card style={styles.card} enableShadow={true}></Card>
                        <Card style={styles.card} enableShadow={true}></Card>

                    </View>
                    {/* <Text style={styles.title}>Tab Two</Text> */}
                    {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
                    {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: `flex`,
        width: `100vw`,
        height: `200%`,
    },
    header: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        width: `100vw`,
        height: `1.8%`,
        justifyContent: `center`,
        display: `flex`,
        alignItems: `center`,
        backgroundColor: `#74d6bc`,
    },
    card: {
        marginBottom: `1%`,
        marginTop: `5%`,
        marginLeft: `7%`,
        marginRight: `1%`,
        width: `85%`,
        height: `15%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
    },
});
