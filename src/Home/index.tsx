import * as React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import OutfitIdeas from './OutfitIdeas';
import {HomeRoutes} from "../components/Navigation";
import DrawerContent, {DRAWER_WIDTH} from './Drawer/Drawer';
import FavoritesOutfits from './FavoritesOutfits';
import TransactionHistory from './TransactionHistory';

const Drawer = createDrawerNavigator<HomeRoutes>();
export const HomeNavigator = () => (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props}/>} drawerStyle={{width: DRAWER_WIDTH}}>
        <Drawer.Screen name="OutfitIdeas" component={OutfitIdeas}/>
        <Drawer.Screen name="FavoritesOutfits" component={FavoritesOutfits}/>
        <Drawer.Screen name="TransactionHistory" component={TransactionHistory}/>
    </Drawer.Navigator>
)
