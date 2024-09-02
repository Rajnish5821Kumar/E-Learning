import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "../Screen/LoginScreen";
import { ClerkProvider, SignedIn, SignedOut} from "@clerk/clerk-expo";
// import { SignedIn, SignedOut } from '@clerk/clerk-expo'
import { Link} from 'expo-router'
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "@/components/navigation/TabNavigation";


export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_YXdhaXRlZC1jcmF5ZmlzaC04OC5jbGVyay5hY2NvdW50cy5kZXYk"}>
    <View style={Styles.container}>
      <SignedIn>
        <NavigationContainer independent={true}>
          <TabNavigation/>
        </NavigationContainer>

      </SignedIn>
      <SignedOut>
      <LoginScreen/>
      </SignedOut>
    </View>
    </ClerkProvider>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
