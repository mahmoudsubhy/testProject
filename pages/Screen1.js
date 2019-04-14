//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { Button,StyleSheet, View, Text,TextInput,Image } from 'react-native';
// import all basic components
import firebase from 'react-native-firebase';

export default class Screen1 extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }
    signIn() {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            // .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.navigation.navigate('Screen2')
                // alert('scsess')
            })
            .catch(error => alert(error.message))
    }


    //Screen1 Component
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                {/*<Input/>*/}

                {/*<Image*/}
                    {/*style={styles.img}*/}
                    {/*source={require('../img/open.png')}*/}
                {/*/>*/}

                <View style={{width: '90%', height: 40, marginTop: 50}}>

                    <Text>enter name : </Text>
                    <TextInput style={{
                        width: '95%', height: 40, backgroundColor: '#e0e0e0',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                               onChangeText={(text) => this.setState({email: text})}
                               value={this.state.email}/>
                    <Text>enter pass : </Text>
                    <TextInput style={{width: '95%', height: 40, backgroundColor: '#e0e0e0', marginBottom: 50}}
                               onChangeText={(value) => this.setState({password: value})}
                               value={this.state.password}/>

                    <Button
                        title='login'
                        onPress={() => {
                            this.signIn()
                        }}/>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: 20,
        alignItems: 'center',
        marginTop: 50,
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#F5FCFF',
    },
    img: {
        height: 100,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode: 'contain',
        marginTop: 50,
    }
});