import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "../Details/style";
import database from "../../config/firebaseconfig";


export default function Details({navigation, route}) {

  const [descriptionEdit, setDescriptionEditid] = useState(route.params.description)


  const idTask = route.params.id


  //Função para poder editar no firebase
  function editTask(desciption, id){
    database.collection("Tasks").doc(id).update({
      description: descriptionEdit
    })
    navigation.navigate("Tasks")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Description</Text>
      <TextInput
        style={styles.inputText}
        placeholder="Descrição da Task"
        onChangeText={setDescriptionEditid}
        value={descriptionEdit}
      />

      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => { 
          editTask(descriptionEdit, idTask)
        }}
        
      >

        <Text style={styles.iconButton}>Save</Text>
      </TouchableOpacity>
    </View>
  )
}