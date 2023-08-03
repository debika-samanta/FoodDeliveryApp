// In App.js in a new project

import * as React from 'react';
import { Button,View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./screens/HomeScreen";

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Brief"
//         onPress={() => navigation.navigate('Brief')}
//       />
//     </View>
//   );
// }

function BriefScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Brief Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Home... again"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    
    
    
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Brief" component={BriefScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
      {/* <View className="flex-1 items-center justify-center bg-blue">
        <Text className="text-2xl font-bold bg-blue">Hello World</Text>
      </View> */}
    </NavigationContainer>
  
  );
}

export default App;

// // import { TailwindProvider } from "tailwindcss-react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import HomeScreen from "./screens/HomeScreen";
// import RestaurantScreen from "./screens/RestaurantScreen";
// // import { store } from "./store";
// // import { Provider } from "react-redux";
// import BasketScreen from "./screens/BasketScreen";
// import PreparingOrderScreen from "./screens/PreparingOrderScreen";
// import DeliveryScreen from "./screens/DeliveryScreen";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Provider store={store}>
//         {/* <TailwindProvider> */}
//           <Stack.Navigator>
//             {/* Screens */}
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Restaurant" component={RestaurantScreen} />
//             <Stack.Screen
//               name="Basket"
//               component={BasketScreen}
//               options={{ presentation: "modal", headerShown: false }}
//             />
//             <Stack.Screen
//               name="PreparingOrderScreen"
//               component={PreparingOrderScreen}
//               options={{ presentation: "fullScreenModal", headerShown: false }}
//             />
//             <Stack.Screen
//               name="Delivery"
//               component={DeliveryScreen}
//               options={{ presentation: "fullScreenModal", headerShown: false }}
//             />
//           </Stack.Navigator>
//         {/* </TailwindProvider> */}
//       </Provider>
//     </NavigationContainer>
//   );
// }
