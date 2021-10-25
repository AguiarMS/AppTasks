import React, { useState, useEffect } from "react";
import { TouchableOpacity, FlatList, View, Text } from "react-native";
import database from "../../config/firebaseconfig";
import { FontAwesome } from "@expo/vector-icons"
import styles from "./style"


export default function Task({ navigation }) {
  // Carrega no userEffect as task quando elas carregar do banco
  const [task, setTask] = useState([])



  function deleteTask(id) {
    database.collection("Tasks").doc(id).delete()
  }



  useEffect(() => {
    database.collection("Tasks").onSnapshot((query) => {
      const list = []
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id })
      })
      setTask(list)
    })
  }, [])



  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false} // Oculta a barra de scroll da tela
        data={task}
        renderItem={({ item }) => {
          return (
            <View style={styles.Tasks}>
              <TouchableOpacity
                style={styles.deleteTask}
                onPress={() => {
                  deleteTask(item.id)
                }}
              >

                <FontAwesome
                  name="star"
                  size={23}
                  color="#F92e6A"
                >

                </FontAwesome>
              </TouchableOpacity>

              <Text
                style={styles.DescriptonTask}
                onPress={() => {
                  navigation.navigate("Details", {
                    id: item.id,
                    description: item.description
                  })
                }}
              >
                {item.description}
              </Text>

            </View>
          )

        }}
      />



      <TouchableOpacity
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("New Task")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>


    </View>
  )
}