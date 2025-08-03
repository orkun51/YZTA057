
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';
import { Card, Title, Paragraph, Text } from 'react-native-paper';
import apiClient from '../services/api';

const ReportDetailScreen = ({ route }) => {
  const { reportId } = route.params;
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      try {
        const response = await apiClient.get(`/api/v1/reports/${reportId}`);
        setReport(response.data);
      } catch (err) {
        setError('Rapor detayları yüklenirken bir hata oluştu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchReport();
  }, [reportId]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator animating={true} size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!report) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Rapor bulunamadı.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Rapor Detayları: #{report.id}</Title>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Oluşturulma Tarihi:</Text>
            <Text style={styles.value}>{new Date(report.created_at).toLocaleDateString()}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Ortalama Doğruluk:</Text>
            <Text style={styles.value}>{(report.avg_accuracy * 100).toFixed(2)}%</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Ortalama Kayıp:</Text>
            <Text style={styles.value}>{report.avg_loss.toFixed(4)}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Katılımcı İstemci Sayısı:</Text>
            <Text style={styles.value}>{report.num_clients}</Text>
          </View>

          <Paragraph style={styles.additionalInfo}>
            Bu alana raporla ilgili daha fazla detay, grafikler veya ek analizler eklenebilir.
          </Paragraph>
        </Card.Content>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  card: {
    marginVertical: 8,
    borderRadius: 12,
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  additionalInfo: {
    marginTop: 20,
    fontStyle: 'italic',
    color: '#777',
  },
});

export default ReportDetailScreen;
