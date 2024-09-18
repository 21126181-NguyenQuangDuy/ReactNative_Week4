import React,{useState} from 'react';
import { Text, Image, View, TextInput, Button, StyleSheet } from 'react-native';

const YourApp = () => {
  const [count,setCount] = useState(1)
  const pricePerItem = 141800; // Giá một sản phẩm
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1,flexDirection: 'row'}}>
        <Image
            source={require('./usb.png')}
            style={{height:70,width:70, margin:10}} 
        />
        <View style={{flex:1,margin:10,}}>
          <Text style={{fontWeight:'bold', fontSize:13}}>USB Bluetooth Music Receiver</Text>
          <Text style={{fontWeight:'bold', fontSize:13}}>HJX-001-Biến loa thường thành loa </Text>
          <Text style={{fontWeight:'bold', fontSize:13}}>Bluetooth</Text>
        </View>
      </View>
      <View style={{flex: 1,flexDirection: 'column'}}>
        <View style={{flex: 1,flexDirection: 'row', justifyContent:'center'}}>
          <Text style={{fontWeight:'bold', fontSize:18}}>Cực kỳ hài lòng</Text>
        </View>
        <View style={{flex: 2,flexDirection: 'row', justifyContent:'center'}}>
          <Image
            source={require('./Star 5.png')}
            style={{height:30,width:35, margin:5}} 
          />
          <Image
            source={require('./Star 5.png')}
            style={{height:30,width:35, margin:5}} 
          />
          <Image
            source={require('./Star 5.png')}
            style={{height:30,width:35, margin:5}} 
          />
          <Image
            source={require('./Star 5.png')}
            style={{height:30,width:35, margin:5}} 
          />
          <Image
            source={require('./Star 5.png')}
            style={{height:30,width:35, margin:5}} 
          />
          
        </View>
      </View>
      <View style={{flex:1, flexDirection:'row', justifyContent:'center', top:-20}}>
        <button 
          style={{ width: 293, height: 68 , backgroundColor: 'white', fontWeight:'bold', fontSize:24,borderRadius:10}}>
          Thêm hình ảnh
        </button>
      </View>

      <View style={{flex: 1,flexDirection: 'row',top:-60,justifyContent:'center'}}>
        <TextInput
              style={styles.input}
              placeholder="Mã giảm giá"
        />
      </View>
      <View style={{flex: 1,flexDirection: 'row', top:60, justifyContent:'center'}}>
        
          <button style={{ width: 289, height: 41 , backgroundColor: '#0D5DB6', color:'white', 
    borderRadius: 5,borderColor:'#1511EB',fontWeight:'bold', fontSize:24}}>Gửi</button>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    width:293,
    height:222,
    fontWeight:'bold',
    paddingHorizontal:10
  },
  
});


export default YourApp;





 

















