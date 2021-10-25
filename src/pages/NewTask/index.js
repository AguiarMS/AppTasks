import database from "../../config/firebaseconfig";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../NewTask/style";

export default function NewTask({ navigation }) {

  const [description, setDescription] = useState(null)



  function addTask(id) {
    database.collection("Tasks").add({
      description: description,
      status: false
    })
    navigation.navigate("Tasks")
  }


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Descrição da Task"
        onChangeText={setDescription}
        value={description}
      />

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={()=>{addTask()}}
      >


        <Text style={styles.iconButton}>Save</Text>

      </TouchableOpacity>
    </View>
  )
}
