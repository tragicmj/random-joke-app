import React,{useState,useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar
} from 'react-native';

import {
  Spinner,Container,Button,Text,
} from 'native-base';

import Axios from 'axios';
import Jokes from './Jokes';

const url='https://api.chucknorris.io/jokes/random/';

const App = () => {

  const [jokes,setJokes] = useState(null);

  const fetchJokes = async () => {
      try {
        
        const {data} = await Axios.get(url);

        const jokes = data;
        setJokes(jokes);
        // console.log(jokes.value);

      } catch (error) {
        console.log(error);
      }
  }

  useEffect(()=>{
    fetchJokes();
  },[])

  if(!jokes){
    return (
      <Container style={styles.container}>
        <StatusBar  backgroundColor='#67E6DC'/>
        <Spinner color="#fff" />
        <Text style={{color:'#fff',fontSize:20}}>Loading...</Text>
      </Container>          
    )
  }
  else{
    return(
      <Container style={styles.container}>
         <StatusBar  backgroundColor='#67E6DC'/>
         <View style={{   }}>
            <Jokes jokes={jokes} />
            <Button 
              style={styles.button} 
              rounded
              onPress={()=>fetchJokes()}  
            >
                <Text>New Joke</Text>
            </Button>
         </View>
      </Container>
    )
  }
  return(
    <SafeAreaView></SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#a4e5dd',
    justifyContent:'center',
    alignItems:'center',
  },
  button:{
      backgroundColor:'#53E0BC',
      marginTop:20,
      padding:12,
      alignSelf:'center'
  }
});

export default App;
