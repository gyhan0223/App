import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const CommunityScreen = ({ navigation }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // 여기에 커뮤니티 토픽을 불러오는 로직을 추가합니다.
    // 예: 서버에서 토픽 목록을 불러와서 상태에 저장합니다.
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>커뮤니티</Text>
      <FlatList
        data={topics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.topicItem}
            onPress={() => navigation.navigate('TopicDetail', { topicId: item.id })}>
            <Text style={styles.topicTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  topicItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  topicTitle: {
    fontSize: 18,
  },
});

export default CommunityScreen;
