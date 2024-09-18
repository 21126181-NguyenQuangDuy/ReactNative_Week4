import React,{useState} from 'react';
import { Text, Image, View, TextInput, Button, StyleSheet } from 'react-native';

const YourApp = () => {
  const [count,setCount] = useState(1)
  const pricePerItem = 141800; // Giá một sản phẩm
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1,flexDirection: 'row'}}>
        <Image
            source={require('./book.png')}
            style={{height:127,width:104, margin:10}} 
        />
        <View style={{flex:1}}>
          <Text style={{fontWeight:'bold',margin:10, fontSize:11}}>Nguyên hàm tích phân và ứng dụng</Text>
          <Text style={{fontWeight:'bold', fontSize:11, left:10 }}>Cung cấp bởi Tiki Trading</Text>
          <Text style={{fontWeight:'bold', fontSize:18, margin:10, color: 'red' }}>141.800 đ</Text>
          <Text style={{fontWeight:'bold', fontSize:12,left:10, color:'#808080' }}><s>141.800 đ</s></Text>

          <View style={{flex: 1,flexDirection: 'row'}}>
            <button style={{ width: 15, height: 16, margin: 10 }} onClick= {()=> setCount(count=>(count > 0 ? count - 1 : 0))} >-</button>
            <Text style={{top:8}}>
              {count}
            </Text>
            <button style={{ width: 15, height: 16, margin: 10 }} onClick= {()=> setCount(count+1)} >+</button>
            <Text style={{color:"blue",fontWeight:'bold', left:60, top:10}}>Mua sau</Text>
          </View>
        </View>
      </View>
      <View style={{flex: 1,flexDirection: 'column',top:30}}>
        <View style={{flex: 1,flexDirection: 'row'}}>
          <Text style={{fontWeight:'bold', left:10, fontSize:11}}>Mã giảm giá đã lưu</Text>
          <Text style={{fontWeight:'bold',color:"blue", left:30,top:-3}}>Xem tại đây</Text>
        </View>
        <View style={{flex: 2,flexDirection: 'row'}}>
          <View style={{flex: 1,flexDirection: 'row'}}>
            <TextInput
              style={styles.input}
              placeholder="Mã giảm giá"
            />
          </View>
          <View style={{flex: 1,flexDirection: 'row', left:50, }}>
            <button style={{ width: 99, height: 45 , backgroundColor: '#0A5EB7', color:'white', fontWeight:'bold'}}>Áp dụng</button>
          </View>
        </View>
      </View>
      <View style={{flex:1, flexDirection:'column', backgroundColor:'gray'}}>
        <View style={{flex: 0.3,flexDirection: 'row', justifyContent:'space-around',alignItems:'center',backgroundColor:'white', top:20}}>
          <Text style={{fontWeight:'bold',fontSize:12}}>Bạn có phiếu quà tặng Tiki/Got it/Urbox?</Text>
          <Text style={{fontWeight:'bold',color:"blue",fontSize:12}}>Nhập tại đây</Text>
        </View>
        <View style={{flex:  0.3,flexDirection: 'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'white', top:40}}>
          <Text style={{fontWeight:'bold',fontSize:20, left:10}}>Tạm tính </Text>
          <Text style={{fontWeight:'bold',color:"blue",fontSize:20, color:'red',right:20}}>{(count * pricePerItem).toLocaleString()}đ</Text>
        </View>
      </View>
      <View style={{flex: 1,flexDirection: 'row', backgroundColor:'gray'}}>
      
      </View>
      <View style={{flex: 1,flexDirection: 'column'}}>
        <View style={{flex: 1,flexDirection: 'row', justifyContent:'space-between'}}>
          <Text style={{fontWeight:'bold',fontSize:20, left:10}}>Thành tiền </Text>
          <Text style={{fontWeight:'bold',color:"blue",fontSize:20, color:'red',right:20}}>
            {(count * pricePerItem).toLocaleString()}đ
          </Text>
        </View>
        <View style={{flex: 1,flexDirection: 'row', justifyContent:'center'}}>
          <button style={{ width: 310, height: 45 , backgroundColor: 'red', color:'white', fontWeight:'bold', fontSize:24}}>Tiến hành đặt hàng</button>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    width:190,
    height:45,
    fontWeight:'bold',
    marginLeft:10,
    paddingHorizontal:10
  },
  
});


export default YourApp;





 

















