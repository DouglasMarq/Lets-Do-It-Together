import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { Button, Text, ButtonProps } from 'react-native-ui-lib';
import { useState } from 'react';
import { Categories } from '../constants/Interface';

export default function TabTwoScreen() {
    const [categories, setCategories] = useState<Categories[]>([
        {
            id: 1,
            text: `Principios`,
            screen: `test1`,
        },
        {
            id: 2,
            text: `Metodologias`,
            screen: `test2`,
        },
    ]);

    function categoryChoosen(screen: string) {
        console.log(`button pressed ${screen}`);
    }

    return (
        <styles.Main>
            <styles.Header>
                <Text>Escolha sua categoria</Text>
            </styles.Header>
            <styles.Div>
                <styles.ScrollView>
                    <styles.Container>
                        {categories.map((item: Categories) => {
                            return (
                                <styles.RoundButton key={item.id} onPress={() => categoryChoosen(item.screen)}>
                                    <Text>{item.text}</Text>
                                </styles.RoundButton>
                            );
                        })}
                    </styles.Container>
                </styles.ScrollView>
            </styles.Div>
        </styles.Main>
    );
}


const styles = {
    Main: styled.SafeAreaView`
        width: 100%;
        height: ${Dimensions.get('window').height - 140}px;
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
    Div: styled.View`
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
        border-radius: 15px;
        box-shadow: rgba(0,0,0,0.18) 1px 1px 8px;
    `,
    RoundButton: styled(Button)`
    width: 320px;
    height: 120px;
    margin-top: 30px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: rgba(0,0,0,0.18) 1px 1px 8px;
    ` as React.ComponentType<ButtonProps>,
};
