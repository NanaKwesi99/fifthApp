import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.InputEdit}>ADD TO CART</Text>
        <Text style={styles.Input}>
          lorem Ipsum is simple dummy text
          of the printing and type setting industry. lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took
        </Text>
      </View>
      <View style={styles.fileContainer}>
        <Image source={require("../../assets/Cart.png")} style={styles.image} />
      </View>
      <View style={styles.btns}>
        <TouchableOpacity onPress={() => navigate("Payment")} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.bottom}>
        <View>
          <TouchableOpacity onPress={() => navigate("Online")}>
            <Text>Previous</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inner}>
          <View style={styles.arr1}></View>
          <View style={styles.arr2}></View>
          <View style={styles.arr3}></View>
        </View>
        <TouchableOpacity onPress={() => navigate("Payment")}>
          <Text>Skip</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,

  },

  InputEdit: {
    fontSize: 25,
    color: "black",
  },

  Input: {
    fontSize: 15,
    color: "black",
  },

  profileContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 0,
  },

  fileContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: "100%",
  },
  btns: {
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
  },

  button: {
    backgroundColor: 'royalblue',
    justifyContent: 'center',
    borderRadius: 20,
  },

  buttonText: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  bottom: {
    flex: .1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  arr1: {
    width: 10,
    height: 10,
    marginRight: 5,
    backgroundColor: '#E9E8F7',
    borderRadius: 20,
  },
  arr2: {
    width: 20,
    height: 10,
    marginRight: 5,
    borderRadius: 20,
    backgroundColor: 'blue'
  },
  arr3: {
    width: 10,
    height: 10,
    marginRight: 5,
    borderRadius: 20,
    backgroundColor: '#E9E8F7'
  },
  inner: {
    flexDirection: 'row',
  }
});
