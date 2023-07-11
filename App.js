import React from 'react';
import {Text, View, ScrollView} from 'react-native';

const j = 3505 
 
let listItems = []
for (let i = 0; i < j; i++) {  // 3412 errors, 3411 works
  listItems.push(<Text key={i}>{i}</Text>) 
 
}  

console.log(listItems.length)
const Main = () => {
  return (  
    <View>
      <ScrollView>
        {listItems}
      </ScrollView> 
    </View>
  );
};

export default Main;
