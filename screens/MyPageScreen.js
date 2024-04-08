import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const MyPageScreen = ({ navigation }) => {
  const [userInfo, setUserInfo] = useState({}); // 사용자 정보 상태
  const [userBooks, setUserBooks] = useState([]); // 사용자가 읽은 책 목록 상태

  useEffect(() => {
    // 여기에 사용자 정보와 책 목록을 불러오는 로직을 추가합니다.
    // 예: 서버에서 사용자 정보와 책 목록을 불러와서 상태에 저장합니다.
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileSection}>
        <Text style={styles.title}>프로필</Text>
        {/* 사용자 정보를 표시합니다. */}
        <Text>{userInfo.name}</Text>
        {/* 기타 프로필 정보 */}
      </View>
      <View style={styles.booksSection}>
        <Text style={styles.title}>읽은 책 목록</Text>
        {/* 사용자가 읽은 책 목록을 표시합니다. */}
        {userBooks.map((book) => (
          <Text key={book.id}>{book.title}</Text>
        ))}
      </View>
      {/* 리뷰, 커뮤니티 참여 내역 등 추가 섹션 */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileSection: {
    padding: 20,
    // 스타일 정의
  },
  booksSection: {
    padding: 20,
    // 스타일 정의
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  // 기타 스타일 정의
});

export default MyPageScreen;
