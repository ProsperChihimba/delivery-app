/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, Image, View, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import HomeScreen from '../screens/HomeScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { COLORS, icons, SIZES, FONTS } from '../constants';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

export type TabBarCustomButtonProps = {
  accessibilityState?: any,
  children?: any,
  onPress?: any
}

const TabBarCustomButton = ({ accessibilityState, children, onPress }: TabBarCustomButtonProps) => {
  let isSelected = accessibilityState.selected
  
  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
            <Svg
                width={70}
                height={61}
                viewBox="0 0 75 61"
            >
                <Path
                    d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                    fill={COLORS.white}
                />
            </Svg>
            <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>

        <TouchableOpacity
            style={{
                top: -22.5,
                justifyContent: 'center',
                alignItems: 'center',
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.white
            }}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    </View>
    )
  } else {
    return (
      <TouchableOpacity
          style={{
              flex: 1,
              height: 60,
              backgroundColor: COLORS.white
          }}
          activeOpacity={1}
          onPress={onPress}
      >
          {children}
      </TouchableOpacity>
    )
  }
}

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        }
      }}
      // tabBar={(props) => (
      //   <CustomTabBar props={props} />
      // )}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }: RootTabScreenProps<'Home'>) => ({
          headerLeft: () => (
            <TouchableOpacity
              style={{
                  width: 50,
                  paddingLeft: SIZES.padding * 2,
                  justifyContent: 'center',
              }}
              >
              <Image
                  source={icons.nearby}
                  resizeMode='contain'
                  style={{
                  width: 25,
                  height: 25,
                  }}
              />
              </TouchableOpacity>
          ),
          title: 'Location',
          headerShown: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontFamily: "Roboto-Bold",
            fontSize: 20,
            backgroundColor: COLORS.lightGray3,
            height: "50%",
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: SIZES.radius
          },
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.cutlery}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: props => <TabBarCustomButton {...props} />
        })}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.search}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="Like"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.like}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="User"
        component={TabTwoScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({ focused }) => (
            <Image
              source={icons.user}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? COLORS.primary : COLORS.secondary,
              }}
            />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
              {...props}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
