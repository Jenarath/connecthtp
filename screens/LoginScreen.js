import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from "react-native-webview";
const { width, height } = Dimensions.get("window");
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import { MonoText } from '../components/StyledText';

 function test() {
console.log('test')
    return (
        // <Container>
        // <Header>
        //   <Left>
        //     <Button transparent onPress={goBack}>
        //       <Icon name='arrow-back' />
        //     </Button>
        //   </Left>
        //   <Body>
            <WebView
                originWhitelist={["*"]}
                source={{ uri: "https://connecthpe.com/login/" }}
                //https://connecthpe.com/#product%20and%20manual
                startInLoadingState
                style={{
                    width : width,
                    height : 1000,
                    marginTop : -795
                 }}
                />          
            /* </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container> */
    );
  }



export default function LoginScreen() {


    const goToRegis = () => {
        return (
            <Container>
            <Header>
              <Left>
                {/* <Button transparent onPress={goBack}>
                  <Icon name='arrow-back' />
                </Button> */}
              </Left>
              <Body>
                <WebView
                    originWhitelist={["*"]}
                    source={{ uri: "https://connecthpe.com/login/" }}
                    //https://connecthpe.com/#product%20and%20manual
                    startInLoadingState
                    style={{
                        width : width,
                        height : 1000,
                        marginTop : -795
                     }}
                    />          
                </Body>
              <Right>
                <Button transparent>
                  <Icon name='menu' />
                </Button>
              </Right>
            </Header>
          </Container>
        );
      }




  return (
    <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Image source={require('./images/banner.png')}
        style={styles.welcomeImage}
      />
        <Image source={require('./images/topber.png')}
        style={styles.welcomeContainer}
        />
        <View style={{ margin : 15}}>
        <Button block warning   onPress={() => this.props.navigation.navigate('Home')}>

            <Text style={{ color : '#fff', fontWeight : 'bold'}}>Register</Text>
        </Button>
        <Button block warning style={{ marginTop : 10}}>
            <Text style={{ color : '#fff', fontWeight : 'bold'}}>Login</Text>
        </Button>
        <Button block info style={{ marginTop : 10}}>
            <Text style={{ color : '#fff', fontWeight : 'bold'}}>Contact us</Text>
        </Button>
    </View>

       {/* <OptionButton
        icon="md-school"
        label="Read the Expo documentation"
        onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
      /> */}

    </ScrollView>
    </View>

  );
}


function OptionButton() {
    return (
        <Container>
        <Header>
          <Left>
            {/* <Button transparent onPress={goBack}>
              <Icon name='arrow-back' />
            </Button> */}
          </Left>
          <Body>
            <WebView
                originWhitelist={["*"]}
                source={{ uri: "https://connecthpe.com/login/" }}
                //https://connecthpe.com/#product%20and%20manual
                startInLoadingState
                style={{
                    width : width,
                    height : 1000,
                    marginTop : -795
                 }}
                />          
            </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
      </Container>
    );
  }

LoginScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    width: width,
    height: 400,
  },
  welcomeImage: {
    width: width,
    height: 80,
    alignItems: 'center',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
