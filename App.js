import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import RecommendationScreen from './screens/RecommendationScreen';
import ReviewScreen from './screens/ReviewScreen';
import CommunityScreen from './screens/CommunityScreen';
import PurchaseScreen from './screens/PurchaseScreen';
import MyPageScreen from './screens/MyPageScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Recommendations" component={RecommendationScreen} />
        <Stack.Screen name="Reviews" component={ReviewScreen} />
        <Stack.Screen name="Community" component={CommunityScreen} />
        <Stack.Screen name="Purchase" component={PurchaseScreen} />
        <Stack.Screen name="MyPage" component={MyPageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
