import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TaskProps {
  text: string;
}

export const Task: React.FC<TaskProps> = ({ text }) => {
  return (
    <View style={styles.item}>
      <View
        style={{ flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}
      >
        <View style={styles.square}></View>
        <Text style={styles.text}>{text}</Text>
      </View>

      <View style={styles.circle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: '#55bcf6',
    opacity: 0.4,
    borderRadius: 5,
    marginRight: 12,
  },
  circle: {
    width:12,
    height:12,
    borderColor:'#55bcf6',
    borderWidth:2,
    borderRadius:5,
  },
  text: {
    maxWidth: '80%',
  },
});
