import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';

const SearchScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // 여기에 검색 로직을 추가합니다.
    // 예: 서버에 검색 쿼리를 보내고 결과를 받아옵니다.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>책 검색</Text>
      <TextInput
        style={styles.input}
        placeholder="제목, 저자, 장르 등으로 검색"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleSearch}>
        <Text>검색</Text>
      </TouchableOpacity>
      {/* 검색 결과를 보여주는 FlatList를 여기에 추가합니다. */}
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
});

export default SearchScreen;
