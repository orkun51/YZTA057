
import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { Card, Title, Button, Paragraph, Avatar } from 'react-native-paper';
import apiClient from '../services/api';

const HomeScreen = ({ navigation }) => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await apiClient.get('/api/v1/reports/');
        setReports(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchReports();
  }, []);

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Title
        title={`Rapor #${item.id}`}
        subtitle={`Oluşturulma: ${new Date(item.created_at).toLocaleDateString()}`}
        left={(props) => <Avatar.Icon {...props} icon="chart-bar" />}
      />
      <Card.Content>
        <Paragraph>Bu rapor, federasyon öğrenme modeli tarafından oluşturulan analiz sonuçlarını içerir.</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Button mode="contained" onPress={() => navigation.navigate('ReportDetail', { reportId: item.id })}>
          Detayları Görüntüle
        </Button>
      </Card.Actions>
    </Card>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {reports.length === 0 ? (
        <View style={styles.centered}>
          <Text style={styles.emptyText}>Henüz analiz raporu bulunmuyor.</Text>
        </View>
      ) : (
        <FlatList
          data={reports}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      )}
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
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: '#888',
  },
});

export default HomeScreen;
