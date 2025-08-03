
import React, { useState, useEffect, useCallback } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Button, Card, Title, Paragraph, Avatar, FAB, ActivityIndicator } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import apiClient from '../services/api';

const CasesScreen = ({ navigation }) => {
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCases = async () => {
    setLoading(true);
    try {
      const response = await apiClient.get('/api/v1/cases/');
      setCases(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchCases();
    }, [])
  );

  const renderItem = ({ item }) => (
    <Card style={styles.card} onPress={() => navigation.navigate('CaseDetail', { caseId: item.id })}>
      <Card.Title
        title={`Vaka #${item.id}`}
        subtitle={`Hasta ID: ${item.patient_id}`}
        left={(props) => <Avatar.Icon {...props} icon="folder-account" />}
      />
      <Card.Content>
        <Paragraph>Vaka Tarihi: {new Date(item.case_date).toLocaleDateString()}</Paragraph>
        <Paragraph>Durum: <Text style={styles.status}>{item.status || 'Bilinmiyor'}</Text></Paragraph>
      </Card.Content>
    </Card>
  );

  if (loading && cases.length === 0) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {cases.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Henüz vaka kaydı bulunmuyor.</Text>
        </View>
      ) : (
        <FlatList
          data={cases}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          onRefresh={fetchCases}
          refreshing={loading}
        />
      )}
      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => navigation.navigate('CreateCase')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    padding: 16,
  },
  card: {
    marginVertical: 8,
    borderRadius: 12,
    elevation: 4,
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
  status: {
    fontWeight: 'bold',
    color: '#007bff'
  }
});

export default CasesScreen;
