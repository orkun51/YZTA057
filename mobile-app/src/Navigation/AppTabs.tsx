
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ReportDetailScreen from '../screens/ReportDetailScreen';
import CasesScreen from '../screens/CasesScreen';
import CreateCaseScreen from '../screens/CreateCaseScreen';
import CaseDetailScreen from '../screens/CaseDetailScreen';
import ProfileScreen from '../screens/ProfileScreen'; // Yeni import

const Tab = createBottomTabNavigator();
const ReportStack = createStackNavigator();
const CaseStack = createStackNavigator();

function ReportNavigator() {
  return (
    <ReportStack.Navigator>
      <ReportStack.Screen name="Home" component={HomeScreen} options={{ title: 'Analiz Raporları' }} />
      <ReportStack.Screen name="ReportDetail" component={ReportDetailScreen} options={{ title: 'Rapor Detayı' }} />
    </ReportStack.Navigator>
  );
}

function CaseNavigator() {
  return (
    <CaseStack.Navigator>
      <CaseStack.Screen name="CasesList" component={CasesScreen} options={{ title: 'Vakalar' }} />
      <CaseStack.Screen name="CreateCase" component={CreateCaseScreen} options={{ title: 'Yeni Vaka Oluştur' }} />
      <CaseStack.Screen name="CaseDetail" component={CaseDetailScreen} options={{ title: 'Vaka Detayı' }} />
    </CaseStack.Navigator>
  );
}

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Reports" component={ReportNavigator} options={{ title: 'Raporlar', headerShown: false }} />
      <Tab.Screen name="Cases" component={CaseNavigator} options={{ title: 'Vakalar', headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profil' }} />
    </Tab.Navigator>
  );
};

export default AppTabs;
