import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';

class churrosapp extends Component {

  saludo = () => {Alert.alert('Login Exitoso')}
  render(){

    return(
      <View style={[styles.container, styles.backgroundColor]}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
              <Image source={require('./image/logoFondonaranjo.png')}
              style={styles.logo}/>

          </View>
        </View>

          <View style={[styles.body]}>
            <View onPress={this.login}>
            </View>
          </View>

          <View style={styles.headerRight}>
              <Button title="Login" onPress={this.saludo} />
          </View>

          <View style={[styles.flex, styles.footerRight]}>
              <Image source={require('./image/logousuario.png')}
              style={styles.logo}>
              </Image>
          </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor : '#E27319'

  },
  header: {
    flex:  0.3,
    flexDirection: 'row',
    marginTop : 40
  },
  headerLeft: {
    flex: 1

  },
  headerRight: {
    flex: 1

  },
  buttom : {
    justifyContent: 'center',
    alignItems: 'center'
  },
  body : {
    flex: 3,
    alignItems : 'center',
    justifyContent : 'center'
  },
  logo : {
    width : 100,
    height: 100,
    borderRadius: 50,
    resizeMode : 'contain'
  },
  flex : {
    flex : 1
  },

  footerRight : {
    alignItems : 'center',
    justifyContent : 'center'

  }

})

export default churrosapp
