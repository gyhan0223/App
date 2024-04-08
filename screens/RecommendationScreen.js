import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const RecommendationScreen = ({ navigation }) => {
  const [recommendedBooks, setRecommendedBooks] = useState([]);

  useEffect(() => {
    // 여기에 사용자의 데이터를 기반으로 책 추천을 불러오는 로직을 추가합니다.
    // 예: 서버에서 추천 알고리즘을 통해 책 목록을 불러와서 상태에 저장합니다.
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>추천 도서</Text>
      <FlatList
        data={recommendedBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.bookItem}
            onPress={() => navigation.navigate('BookDetail', { bookId: item.id })}>
            <Text style={styles.bookTitle}>{item.title}</Text>
            {/* 책의 추가 정보를 표시 */}
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
  bookItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  bookTitle: {
    fontSize: 18,
  },
  // 기타 스타일 정의
});

export default RecommendationScreen;
