import React,{useState,useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image
} from 'react-native';

import {
    Container,
    Text,
} from 'native-base';

const Jokes = ({jokes}) => {
    return(
       <View style={styles.container}>
            <View style={styles.imgContainer}>
                <Image
                    source={{
                        uri:'https://www.pinclipart.com/picdir/big/107-1073416_left-quote-quote-white-icon-png-clipart.png',
                    }}
                    style={styles.img}
                />
            </View>
            <Text style={styles.text}>
                {jokes.value}
            </Text>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width:'90%',
        backgroundColor:'#4fc8b7ab',
        borderRadius:6,
        alignItems:'center',
        paddingHorizontal:15,
        paddingBottom:20,
        shadowColor: "#1b1b1b",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 3},
        shadowRadius: 6,
        elevation: 2,
        minHeight:130
    },
    imgContainer:{
        backgroundColor:'#67E6DC',
        borderRadius:200,
        paddingHorizontal:12,
        paddingVertical:20,
        marginTop:-35,
    },
    img:{
        width: 50,
        height: 37,
       
    },
    text:{
        fontSize:20,
        color:'#fff',
        textAlign:'center',
        marginTop:12
    }
  });
  
  export default Jokes;