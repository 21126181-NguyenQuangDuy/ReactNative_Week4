import React, { useState } from 'react';
import { Text, Image, View, TextInput, Button, StyleSheet } from 'react-native';

const YourApp = () => {
  const [count, setCount] = useState(1);
  const pricePerItem = 141800; // Giá một sản phẩm
  return (
    <View style={{ flex: 1, backgroundColor: '#3B3B98' }}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#23235B',
          margin: 20,
          borderRadius: 10,
        }}>

        <View style={{ flex: 2, flexDirection: 'column' }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>
              PASSWORD
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 25, color: 'white' }}>
              GENERATOR
            </Text>
          </View>

          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <TextInput
              style={styles.input}
            />
          </View>
        </View>

        <View style={{ flex: 3, flexDirection: 'column'}}>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 , color:'white'}}>
              Password length
            </Text>
            <TextInput
              style={styles.inputText}
            />
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 , color:'white'}}>
              Include lower case letters
            </Text>
            <TextInput
              style={styles.inputText2}
            />
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 , color:'white'}}>
              Include upcase letters
            </Text>
            <TextInput
              style={styles.inputText2}
            />
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 , color:'white'}}>
              Include number
            </Text>
            <TextInput
              style={styles.inputText2}
            />
          </View>
          <View
            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', margin:20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18 , color:'white'}}>
              Include special symbol
            </Text>
            <TextInput
              style={styles.inputText2}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            top: -20,
          }}>
          <button
            style={{
              width: 293,
              height: 68,
              backgroundColor: '#3B3B98',
              fontWeight: 'bold',
              fontSize: 18,
              borderRadius: 10,
              color:'white',
              marginTop:40
            }}>
            GENERATOR PASSWORD
          </button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: '#151537',
    borderWidth: 2,
    borderRadius: 5,
    width: 297,
    height: 55,
    fontWeight: 'bold',
    margin:10,
    backgroundColor:'#151537'
  },
  inputText: {
    borderWidth: 2,
    width: 120,
    height: 33,
    fontWeight: 'bold',
    backgroundColor:'white'
  },
  inputText2: {
    borderWidth: 2,
    width: 33,
    height: 33,
    fontWeight: 'bold',
    backgroundColor:'white'
  },
});

export default YourApp;
