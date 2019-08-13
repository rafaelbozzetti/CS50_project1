import React from 'react'
import { Text, View, StyleSheet, TextInput, Button} from 'react-native'

class Configuration extends React.Component {
  
  static navigationOptions =({ navigation }) => {
    return {
      headerTitle: 'Configuration',
    }
  }

  state = {
    roundTime: 25,
    pauseTime: 5,
  }

  handleRoundChange = round => {
      alert(round);
      this.setState({roundTime: round})
  }

  render() {
    return (
      <View style={styles.containerStarted}  onSubmit={this.saveData}>
          <TextInput
              style={styles.inputs} 
              value={this.state.roundTime}
              onChangeText={() => this.handleRoundChange()} 
              Placeholde="Round Time"
              keyboardType="numeric"/>

          <TextInput
              style={styles.inputs} 
              value={this.state.pauseTime}
              Placeholde="Pause Time"
              keyboardType="numeric"/>

          <Button 
              title="Save" 
              onPress={() => this.handleSubmit()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F4F4F4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputs: {
      marginTop: 30,
      marginLeft: 10,
      marginRight: 10,
      padding: 10,
      borderColor: '#d2d2d2',
      backgroundColor: '#fff',
      borderWidth: 1,
    },
    buttons: {
        marginTop:120,
        flex:2,
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between'
    }
});

export default Configuration;