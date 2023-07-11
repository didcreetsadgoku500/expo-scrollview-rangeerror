import React from 'react';
import {Text, View, ScrollView} from 'react-native';

let listItems = []

for (let i = 0; i < 3411; i++) {  // 3412 errors, 3411 works
  listItems.push(<Text>{i}</Text>)  

}
 
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
