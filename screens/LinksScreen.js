import * as React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { WebView } from "react-native-webview";
const { width, height } = Dimensions.get("window");
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon } from 'native-base';
import axios from "axios";

const endpoint = "https://www.bpmuscle.com/BPAPP/api";

export default class LinksScreen extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      check: null,
      url : "https://www.fit1bkk.com/page/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A1%E0%B8%B2"
    
    }

  }

  webView = {
    canGoBack: false,
    ref: null,
  };

  async componentDidMount(){
      const test = await this.renderLogin();
      console.log("test" + JSON.stringify(test.login))
      if(test.login == "true"){
          console.debug('t')
          this.setState({check : "1", url : "https://www.fit1bkk.com/Account/Login?ReturnUrl=%2Faccount%2Fprofile"})
      }else{
        console.debug('f')
        this.setState({check : "0", url : "https://www.fit1bkk.com/page/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%81%E0%B8%B2%E0%B8%A3-Click-And-Collect-%E0%B8%84%E0%B8%B7%E0%B8%AD%E0%B8%AD%E0%B8%B0%E0%B9%84%E0%B8%A3"})
      }
  }

  renderLogin = async () => {
    const url = `${endpoint}/user/fitLogin.php`;
    return await axios.get(url).then((result) => result.data.data.data);
  }

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
  const { url,check } = this.state
  return (
    <View style={styles.container}>
            <Header style={{ backgroundColor : 'blue'}}>
          <Left>
            {
              check == '1' && (
                <Button transparent onPress={() => this.handleBackButton()}>
                  <Icon name='md-arrow-back' style={{ color : 'white', marginLeft : 5}} />
                </Button>
              )

            }
 
          </Left>
          <Body>
            <Title style={{ color : 'white'}}>FITONE</Title>
          </Body>
          <Right />
        </Header>
{
  check == '1' && (
    <Image source={require('./images/fit.jpg')}
    style={styles.welcomeImage}
  />
  )
}
  
            {/* <Text style={{ marginTop : 30, alignSelf : 'center', fontSize : 30}}>เข้าสู่ระบบ</Text> */}

      <WebView
        originWhitelist={["*"]}
        // source={{ uri: "https://www.fit1bkk.com/Account/Login?ReturnUrl=%2Faccount%2Fprofile" }}
        // source={{ uri: "https://www.fit1bkk.com/page/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%B4%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%A1%E0%B8%B2" }}
        source={{ uri : url}}
        ref={(webView) => {
          this.webView.ref = webView;
        }}        
        onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
        // source={{ uri: "https://connecthpe.com/wp-content/uploads/2018/09/HPE-3PAR-StoreServ-Infographic.pdf" }}
        //https://connecthpe.com/#product%20and%20manual
        startInLoadingState
        style={{
          width : width,
          height : 1000,
          marginBottom : -1690,
          marginTop : -220
    }}
    />
  </View>
    // <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
    //   <OptionButton
    //     icon="md-school"
    //     label="Read the Expo documentation"
    //     onPress={() => WebBrowser.openBrowserAsync('https://docs.expo.io')}
    //   />

    //   <OptionButton
    //     icon="md-compass"
    //     label="Read the React Navigation documentation"
    //     onPress={() => WebBrowser.openBrowserAsync('https://reactnavigation.org')}
    //   />

    //   <OptionButton
    //     icon="ios-chatboxes"
    //     label="Ask a question on the forums"
    //     onPress={() => WebBrowser.openBrowserAsync('https://forums.expo.io')}
    //     isLastOption
    //   />
    // </ScrollView>
  );
}
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  welcomeContainer: {
    alignItems: 'center',
    width: width,
    height: 400,
  },
  welcomeImage: {
    width: width,
    height: 250,
    marginTop: 30,
    alignItems: 'center',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
