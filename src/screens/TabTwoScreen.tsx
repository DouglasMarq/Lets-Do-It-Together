import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

export default function TabTwoScreen() {
    return (
        <styles.Main>
            <styles.Header>
                <styles.Text>Escolha sua categoria</styles.Text>
            </styles.Header>
            <styles.AnotherView>
                <styles.ScrollView>
                    <styles.Container>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                        <styles.Card></styles.Card>
                    </styles.Container>
                </styles.ScrollView>
            </styles.AnotherView>
        </styles.Main>
    );
}

const styles = {
    Main: styled.SafeAreaView`
        width: 100%;
        height: ${Dimensions.get('window').height - 140};
    `,
    Header: styled.View`
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #74d6bc;
        border-bottom-right-radius: 20px;
        border-bottom-left-radius: 20px;
    `,
    ScrollView: styled.ScrollView`
        width: 100%;
        height: 100%;
    `,
    Text: styled.Text`

    `,
    AnotherView: styled.View`
        height: 100%;
    `,
    Container: styled.View`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        `,
    Card: styled.View`
        width: 320px;
        height: 120px;
        background-color: #fff;
        margin-top: 30px;
        border-radius: 15;
        box-shadow: rgba(0,0,0,0.18) 1px 1px 8px;
    `,
};
