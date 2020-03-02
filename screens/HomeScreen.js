import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, Dimensions, BackHandler } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';

import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import { WebView } from "react-native-webview";
const { width, height } = Dimensions.get("window");

import { MonoText } from '../components/StyledText';
import axios from "axios";

const endpoint = "https://www.bpmuscle.com/BPAPP/api";


export default class HomeScreen extends React.Component {
  constructor(props){
    super(props);
    this.state ={ 
      check: null,
      top : -130,
      bottom : 0,
      url : "https://www.fit1bkk.com/blog"
    }

  }


  async componentDidMount(){
    const test = await this.renderLogin();
    console.log("test" + JSON.stringify(test.login))
    if(test.login == "true"){
        console.debug('t')
        this.setState({check: "1", bottom : -1690, top: 0, url : "https://www.fit1bkk.com"})
    }else{
      console.debug('f')
      this.setState({check: "0", bottom : 0, top : 0, url : "http://128.199.170.20/project/fit_blog.html"})
    }
}

renderLogin = async () => {
  const url = `${endpoint}/user/fitLogin.php`;
  return await axios.get(url).then((result) => result.data.data.data);
}

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

render() {
  const { top,url,check,bottom } = this.state
  return (
    <View style={styles.container}>
        <Header style={{ backgroundColor : 'blue'}}>
          <Left>
          {
              check == '0' && (
                <Button transparent onPress={this.handleBackButton}>
                  <Icon name='md-arrow-back' style={{ color : 'white', marginLeft : 5}} />
                </Button>
              )

            }
          </Left>
          <Body>
            <Title style={{ color : 'white'}}>หน้าหลัก</Title>
          </Body>
          <Right />
        </Header>
      {/* <Image source={require('./images/banner.png')}
        style={styles.welcomeImage}
      /> */}


      { check == "0" && (
        <WebView
          ref={(webView) => {
            this.webView.ref = webView;
          }}        
          onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
          originWhitelist={["*"]}
          source={{ uri: url }}
          //https://connecthpe.com/#product%20and%20manual
          startInLoadingState
          style={{
            width : width,
            height : 1000,
            marginBottom : bottom,
            marginTop : top
      }}
      />
       ) }
      </View>
   );
}
}



HomeScreen.navigationOptions = {
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
    // marginTop: 30,
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
