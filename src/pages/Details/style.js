import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  label: {
    width: "90%",
    marginTop: 20,
    fontSize: 16,
    marginLeft: 20,
    color: "#F92E6a"
  },

  inputText: {
    width: "90%",
    marginTop: 10,
    padding: 10,
    height: 50,
    marginLeft: "auto",
    marginRight: "auto",
    borderBottomWidth: 1,
    borderBottomColor: "#F92e6a"
  },

  buttonNewTask: {
    width: 60,
    height: 60,
    position:"absolute",
    bottom: 20,
    left: 20,
    backgroundColor:"#F92e6a",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  iconButton:{
    color: "#fff",
    fontSize: 18,
    fontWeight:"bold"
  }

})

export default styles