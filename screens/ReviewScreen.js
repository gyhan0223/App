import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

const ReviewScreen = ({ route, navigation }) => {
  const [bookReviews, setBookReviews] = useState([]);
  const [newReview, setNewReview] = useState("");

  useEffect(() => {
    // 여기에 선택된 책의 리뷰를 불러오는 로직을 추가합니다.
    // 예: 서버에서 책의 리뷰 데이터를 불러와서 상태에 저장합니다.
    // const bookId = route.params.bookId;
  }, []);

  const handleReviewSubmit = () => {
    // 여기에 새 리뷰를 서버에 제출하는 로직을 추가합니다.
    // 예: 서버로 새 리뷰 데이터를 보내고, 상태를 업데이트합니다.
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.reviewSection}>
        <Text style={styles.title}>책 리뷰</Text>
        {bookReviews.map((review, index) => (
          <Text key={index} style={styles.reviewText}>{review.content}</Text>
        ))}
        <TextInput
          style={styles.input}
          placeholder="리뷰를 작성하세요"
          value={newReview}
          onChangeText={setNewReview}
        />
        <Button
          title="리뷰 제출"
          onPress={handleReviewSubmit}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  reviewSection: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewText: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  // 기타 스타일 정의
});

export default ReviewScreen;
