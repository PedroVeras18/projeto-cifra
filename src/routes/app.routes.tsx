import { Image, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigationProp, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { BestPrices } from '@screens/BestPrices';
import { ProductDetail } from '@screens/ProductDetail';
import { EditMarket } from '@screens/EditMarket';

import { CurrencyCircleDollar, House, Pencil } from 'phosphor-react-native';

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
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.0,
                    elevation: 24,
                    backgroundColor: '#F4F5F6',
                    borderTopWidth: 0,
                    height: Platform.OS === "android" ? 'auto' : 96,
                }
            }}>
                <Screen
                    name="home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <House size={focused ? 34 : 28} weight="bold" color={focused ? '#1EB211' : '#000'} />
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
                        tabBarIcon: ({ focused }) => (
                            <CurrencyCircleDollar size={focused ? 35 : 28} weight="bold" color={focused ? '#1EB211' : '#000'} />
                        )
                    }}
                />
                <Screen
                    name="editMarket"
                    component={EditMarket}
                    options={{
                        tabBarIcon: ({ focused }) => (
                            <Pencil size={focused ? 36 : 28} color={focused ? '#1EB211' : '#000'} />
                        )
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}