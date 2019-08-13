import React from 'react'
import { Text, View, StyleSheet} from 'react-native'
import { Button } from 'react-native-elements';

class Timer extends React.Component {
    
    static navigationOptions =({ navigation }) => {
        return {
          headerTitle: 'Pomodoro',
        }
    }

    state = {
        counter: 6,
        active: false,
        time: 5,
    }

    handleStart = () => {
        if(this.state.counter != 0 && this.state.active != true ) {
        this.setState({ active: true })
        this.interval = setInterval(this.handleCounter, 1000)  
        }    
    }

    handleStop = () => {
        if(this.state.active != false) {
        this.setState({ active: false })
        clearInterval(this.interval)
        }
    }

    handleRestart = () => {
        if(this.state.counter != 1 ) {
        this.setState({ counter: 6, active: true })  
        clearInterval(this.interval)
        this.interval = setInterval(this.handleCounter, 1000)
        }
    }

    handleCounter = () => {
        if(this.state.counter == 1) {
            clearInterval(this.interval);
        }
        this.setState(prevState =>({
            counter: prevState.counter - 1,
        }))      
    }

    render() {
        return (
        <View style={ this.state.active ? styles.containerStarted : styles.container }>
            <Text style={styles.title}>Pomodoro Timer</Text>
            <Text style={ this.state.active ? styles.counter : styles.nocounter }> {this.state.counter} </Text>
            <View style={styles.buttons}>
                <Button type="clear" title="Start" onPress={() => this.handleStart()}>Start</Button>
                <Button type="clear" title="Stop" onPress={() => this.handleStop()}>Stop</Button>
                <Button type="clear" title="Restart" onPress={() => this.handleRestart()}>Restart</Button>
                <Button type="clear" title="Config" onPress={() => this.props.navigation.navigate('RouteConfiguration')}>Config</Button>
            </View>
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
    containerStarted: {
      flex: 1,
      backgroundColor: '#D6F599',
      alignItems: 'center',
      justifyContent: 'center',      
    },
    title: {
      fontSize: 30,
      color: '#696969',
      marginTop: 50,
    },
    counter: {
      flex:1,
      color: '#C5D761',
      fontSize: 120,
      marginTop: 50,
      justifyContent: 'center',
    },
    nocounter: {
      flex:1,
      color: '#FB6861',
      fontSize: 120,
      marginTop: 50,
      justifyContent: 'center',
    },    
    buttons: {
        marginTop:120,
        flex:2,
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between'
    }
});

export default Timer;