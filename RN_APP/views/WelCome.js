import React from "react";
import { 
        Text, 
        View, 
        Image,
        ImageBackground 
        } from "react-native";
//function MainScreen(props){
//    return <Text> This is main screen</Text>
//}

const WelComeScreen  = (props) => 
{
    return <View style={{
        backgroundColor: 'green',
        flex: 1
    }}>
        <Image source={require('../assets/img/logo/worldcup2022-logo-en.png')}
            style={{
                width: 100,
                height: 30,
                alignSelf: 'center'
            }}
        />
        <View style={{
            flexDirection: 'row',
            height: 40,
            backgroundColor: 'red',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <Image source={require('../assets/img/logo/header-logo.png')}
                style={{
                    width: 30,
                    height: 30
                }}
            />
            <Text style={{color: 'white'}}>Hỗ Trợ</Text>
            <Image source={require('../assets/img/logo/vn.png')}
                style={{
                    width: 30,
                    height: 30
                }}
            />
        </View>
        <ImageBackground 
            source={require('../assets/img/background/mau-background-tet-dep-full-hd-16.jpg')}
            resizeMode= 'cover'
            style={{
                flex: 1
            }}
        >

        </ImageBackground>
    </View>
}
export default WelComeScreen