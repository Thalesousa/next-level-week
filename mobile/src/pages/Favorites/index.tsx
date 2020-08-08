import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import TeacherItem, { Teacher } from '../../components/TeacherList';
import { useFocusEffect } from '@react-navigation/native'

import PageHeader from '../../components/PageHeader';

import styles from './styles';

function Favorites(){
  const [favorites, setFavorites] = useState([]);

  function loadfavorites() {
    AsyncStorage.getItem('favorites').then(res => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);

        setFavorites(favoritedTeachers);
      };
    });
  }


  useFocusEffect(() => {
    loadfavorites();
  })


  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />

      <ScrollView 
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited
            />
          )
        })}
        
      </ScrollView>
    </View>
  )
}

export default Favorites;