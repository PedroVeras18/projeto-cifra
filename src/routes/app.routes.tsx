import { Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { BestPrices } from '@screens/BestPrices';
import { ProductDetail } from '@screens/ProductDetail';
import { EditMarket } from '@screens/EditMarket';

import IconHome from '@assets/homeIcon.png'
import IconBestPrices from '@assets/bestPrices.png'
import IconEditMarket from '@assets/editMarket.png'

type AppRoutes = {
    home: undefined;
    productDetail: undefined;
    bestPrices: undefined;
    editMarket: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#FFF',
                tabBarStyle: {
                    backgroundColor: '#FFF',
                    borderTopWidth: 0,
                    height: Platform.OS === "android" ? 'auto' : 96,
                }
            }}>
                <Screen
                    name="home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Image style={{ width: focused ? 38 : 27, height: focused ? 38 : 27 }} source={IconHome} />
                        )
                    }}
                />
                <Screen
                    name="productDetail"
                    component={ProductDetail}
                    options={{ tabBarButton: () => null }}
                />
                <Screen
                    name="bestPrices"
                    component={BestPrices}
                    options={{
                        tabBarIcon: ({ focused, }) => (
                            <Image style={{ width: focused ? 36 : 23, height: focused ? 36 : 23 }} source={IconBestPrices} />
                        )
                    }}
                />
                <Screen
                    name="editMarket"
                    component={EditMarket}
                    options={{
                        tabBarIcon: ({ focused, }) => (
                            <Image style={{ width: focused ? 34 : 23, height: focused ? 34 : 23 }} source={IconEditMarket} />
                        )
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}