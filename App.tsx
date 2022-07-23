import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity , View } from 'react-native';
import { Task } from './components/Task';
export default function App() {

  const [task, setTask] = useState<string>('');
  const [items, setItems] = useState<string[]>([]);

  const completeTask = (i) => {
    const itemsCopy = [...items];
    itemsCopy.splice(i,1)
    setItems(itemsCopy)
  }

  const handleAddTask = () => {
    Keyboard.dismiss();
    if(!task.length){
      alert('Wtf dawg')
      return
    }
    setItems([...items, task])
    setTask('')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={{fontSize:24, fontWeight: '700', marginLeft:20}}>Todays Tasks</Text>
        <ScrollView style={styles.items}>
          {
            items.map((text,i)=>
            <TouchableOpacity onPress={() => completeTask(i)}>
              <Task text={text} key={i}/>

            </TouchableOpacity>
              )
          }
        </ScrollView>
      </View>
      <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.writeTaskWrapper}

      >
        <TextInput style={styles.input} placeholder={'Write a task'} value={task} onChangeText={text => setTask(text)}/>
        <TouchableOpacity onPress={()=> handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop:80,
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:32,
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal: 24,

  },
  input:{
    paddingVertical:12,
    flexGrow:1,
    paddingHorizontal:24,
    backgroundColor:'#fff',
    borderRadius:60,
    marginRight:20
    
  },

  items:{
    padding:20,
    marginBottom:124,
    
  },

  addWrapper:{
    width:52,
    height:52,
    backgroundColor:'#fff',
    borderRadius: 50,
    justifyContent:'center',
    alignItems:'center'

  },
  addText:{},
});
