import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyButton from "./src/components/MyButton";

export default function App() {
  const checkMyBtn = () => {
    console.log('點擊成功!!')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <MyButton 
        title={ 'Click' }
        click={() => checkMyBtn()}
        style={ [styles.btn, styles.btnText] }
      ></MyButton>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 15
  },
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 30,
    color: '#fff'
  }
});
