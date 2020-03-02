import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from "react-native-webview";
const { width, height } = Dimensions.get("window");
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import { MonoText } from '../components/StyledText';

export default class ThreeScreen extends React.Component {
  webView = {
    canGoBack: false,
    ref: null,
  };

  handleBackButton = () => {
    console.debug('onBack ', this.webView.canGoBack)

    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }


onNavigationStateChange = (navState) => {
  console.log("navState", navState);
  this.webView.ref.canGoBack = navState.canGoBack;
  this.setState({ canGoBack: navState.canGoBack });
};

  render(){
  return (
    <View style={styles.container}>
              <Header style={{ backgroundColor : 'blue'}}>
          <Left>
          <Button transparent onPress={() => this.handleBackButton()}>
            <Icon name='md-arrow-back' style={{ color : 'white', marginLeft : 5}} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color : 'white'}}>ติดต่อเรา</Title>
          </Body>
          <Right />
        </Header>
      {/* <Image source={require('./images/banner.png')}
        style={styles.welcomeImage}
      /> */}
        {/* <Image source={require('./images/topber.png')}
        style={styles.welcomeContainer}
        /> */}
        <WebView
          ref={(webView) => {
            this.webView.ref = webView;
          }}        
          onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
          originWhitelist={["*"]}
          source={{ uri: "https://www.fit1bkk.com/Contact" }}
          //https://connecthpe.com/#product%20and%20manual
          startInLoadingState
          style={{
            width : width,
            height : 1000,
            marginTop : -120,
            marginBottom : -1690,

      }}
      />
    </View>

      // <View style={styles.tabBarInfoContainer}>
      //   <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

      //   <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
      //     <MonoText style={styles.codeHighlightText}>navigation/BottomTabNavigator.js</MonoText>
      //   </View>
      // </View>
  );
}

}

ThreeScreen.navigationOptions = {
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
    marginTop: 30,
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
