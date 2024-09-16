import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const Settings = () => {
    const navigation = useNavigation();

    const navigateToEditProfile = () => {
        console.log("EditProfile")
    };

    const navigateToSecurity = () => {
        console.log("Security Function")
    };

    const navigateToNotofications = () => {
        console.log("Notification Function")
    };

    const navigateToPrivacy = () => {
        console.log("Privacy Function")
    };

    const navigateToSubscription = () => {
        console.log("Subscription")
    };

    const navigateToSupport = () => {
        console.log("Support Function")
    };

    const navigateToTermsAndPolicies = () => {
        console.log("Terms And Policies")
    };

    const navigateToFreeSpace = () => {
        console.log("Free space Function")
    };

    const navigateToDateSaver = () => {
        console.log("Date Saver")
    };

    const navigateToReportProblem = () => {
        console.log("Report a problem")
    };

    const addaccount = () => {
        console.log("addaccount")
    };

    const logout = () => {
        console.log("Logout")
    };

    const renderSettingsItem = ({ action, text, icon }) => {
        <TouchableOpacity
            onPress={action}
            style={{
                flexDirection: "row",
                alignItems: "center",
                paddingVertical: 8,
                paddingLeft: 12,
            }}
        >
            <MaterialIcons name={icon} size={27} />
            <Text
                style={{
                    marginLeft: 36,
                    fontWeight: 600,
                    fontSize: 16,
                }}
            >{text}</Text>
        </TouchableOpacity>
    }

    const accountItems = [
        { icon: "person-outline", text: "Edit Profile", action: navigateToEditProfile },
        { icon: "security ", text: "Security", action: navigateToSecurity },
        { icon: "notification-none ", text: "Notification", action: navigateToNotofications },
        { icon: "look-outline ", text: "Privacy", action: navigateToPrivacy },
    ];

    const supportItems = [
        { icon: "credit-card", text: "My Subscription", action: navigateToSubscription },
        { icon: "help-outline", text: "Help & Support", action: navigateToSupport },
        { icon: "info-outline", text: "Terms and Policies", action: navigateToTermsAndPolicies },

    ];

    const cacheAndCellularItems = [
        { icon: "delete-outline", text: "Free Up Space", action: navigateToFreeSpace },
        { icon: "save-alt", text: "Date Saver", action: navigateToDateSaver },
    ];

    const actionItems = [
        { icon: "outlined-flag", text: "Reported a problem", action: navigateToReportProblem },
        { icon: "people-outline", text: "Add Account", action: addaccount },
        { icon: "logout", text: "Log out", action: logout }
    ];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{ position: "absolute", left: 0 }}
                >
                    <MaterialIcons
                        name='keyboard-arrow-left'
                        size={26}
                        style={{marginTop: 10}}
                    />
                    <Text style={{ marginLeft: 170 , marginTop: -20, fontSize: 20}}>Setting</Text>
                </TouchableOpacity>
            </View>
            <ScrollView style={{ marginHorizontal: 12 }}>
                <View style={{ marginBottom: 4 }}>
                    <Text style={{ marginVertical: 40, fontFamily: 'bold', fontSize: 20 }}>Account</Text>
                    <View style={{ borderRadius: 12 }}>
                        <TouchableOpacity onPress={()=> navigation.navigate("EditProfile")}>
                            <Text>EditProfile</Text>
                        </TouchableOpacity>
                        <Text>Security</Text>
                        <Text>Notification</Text>
                        <Text>Privacy</Text>
                        {
                            accountItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    {renderSettingsItem(item)}
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{ marginVertical: 60 }}>Support</Text>
                    <View style={{ borderRadius: 12 }}>
                        <Text>EditProfile</Text>
                        <Text>Security</Text>
                        <Text>Notification</Text>
                        <Text>Privacy</Text>
                        {
                            supportItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    {renderSettingsItem(item)}
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>
                <View style={{ marginBottom: 10 }}>
                    <Text style={{ marginVertical: 60 }}>Cache</Text>
                    <View style={{ borderRadius: 12 }}>
                        <Text>EditProfile</Text>
                        <Text>Security</Text>
                        <Text>Notification</Text>
                        <Text>Privacy</Text>
                        {
                            cacheAndCellularItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    {renderSettingsItem(item)}
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>
                <View style={{ marginBottom: 12 }}>
                    <Text style={{ marginVertical: 60 }}>Actions</Text>
                    <View style={{ borderRadius: 12 }}>
                        <Text>EditProfile</Text>
                        <Text>Security</Text>
                        <Text>Notification</Text>
                        <Text>Privacy</Text>
                        {
                            actionItems.map((item, index) => (
                                <React.Fragment key={index}>
                                    {renderSettingsItem(item)}
                                </React.Fragment>
                            ))
                        }
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Settings;