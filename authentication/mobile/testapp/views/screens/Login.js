import React, {useState, useContext} from 'react'
import { StatusBar, SafeAreaView, Text, TextInput, Button} from 'react-native'
import AuthContext from '../context/AuthContext'

export default function Login({navigation}) {
    const { signIn } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <>
            <StatusBar barStyle='dark-content' />
            <SafeAreaView style={{flex : 1, backgroundColor: "#00FF00"}}>
                <Text style={{textAlign: "center"}}>Login</Text>
                <Text style={{textAlign: "left"}}>Email</Text>
                <TextInput style={{borderWidth: 2}} onChangeText={text => setEmail(text)} value={email} />
                <Text style={{textAlign: "left"}}>Password</Text>
                <TextInput style={{borderWidth: 2}} onChangeText={text => setPassword(text)} secureTextEntry={true} value={password} />
                <Button title="Submit" onPress={() => signIn({email, password})} />
                <Button title="Register" onPress={() => navigation.navigate('Register')} />
            </SafeAreaView>
        </>
    );
}