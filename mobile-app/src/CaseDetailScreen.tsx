
import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, Image, Alert, ActivityIndicator, ScrollView } from 'react-native';
import { Button, Card, Title, Paragraph, Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import apiClient from '../services/api';
import { useFocusEffect } from '@react-navigation/native';

const CaseDetailScreen = ({ route }) => {
  const { caseId } = route.params;
  const [caseDetails, setCaseDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCaseDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await apiClient.get(`/api/v1/cases/${caseId}`);
      setCaseDetails(response.data);
    } catch (err) {
      setError('Vaka detayları yüklenirken bir hata oluştu.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [caseId]);

  useFocusEffect(
    useCallback(() => {
      fetchCaseDetails();
    }, [fetchCaseDetails])
  );

  const handleImagePick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('İzin Gerekli', 'Görüntüleri yüklemek için galeri erişimine ihtiyacımız var!');
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      uploadImage(result.assets[0].uri);
    }
  };

  const uploadImage = async (uri) => {
    setUploading(true);
    try {
      const formData = new FormData();
      const uriParts = uri.split('.');
      const fileType = uriParts[uriParts.length - 1];

      formData.append('file', {
        uri,
        name: `image_${Date.now()}.${fileType}`,
        type: `image/${fileType}`,
      });

      await apiClient.post(`/api/v1/cases/${caseId}/images`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      Alert.alert('Başarılı', 'Görüntü başarıyla yüklendi.');
      fetchCaseDetails(); // Detayları yenile
    } catch (err) {
      console.error('Görüntü yükleme hatası:', err.response?.data || err.message);
      Alert.alert('Yükleme Başarısız', 'Görüntü yüklenirken bir sorun oluştu.');
    } finally {
      setUploading(false);
    }
  };

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

  if (!caseDetails) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Vaka bulunamadı.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Vaka Detayları: #{caseDetails.id}</Title>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>Hasta ID:</Text>
            <Text style={styles.value}>{caseDetails.patient_id}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Vaka Tarihi:</Text>
            <Text style={styles.value}>{new Date(caseDetails.case_date).toLocaleDateString()}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Durum:</Text>
            <Text style={styles.value}>{caseDetails.status}</Text>
          </View>

          <Paragraph style={styles.additionalInfo}>
            Bu alana vaka ile ilgili ek notlar veya detaylı açıklamalar eklenebilir.
          </Paragraph>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Görüntüler</Title>
          <Button mode="contained" onPress={handleImagePick} loading={uploading} style={styles.button}>
            Mamogram Yükle
          </Button>
          {caseDetails.images && caseDetails.images.length > 0 ? (
            <FlatList
              data={caseDetails.images}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2} // İki sütunlu ızgara
              renderItem={({ item }) => (
                <View style={styles.imageContainer}>
                  <Image source={{ uri: item.image_path }} style={styles.image} />
                  {/* Görüntüye özel detaylar veya eylemler eklenebilir */}
                </View>
              )}
              contentContainerStyle={styles.imageList}
            />
          ) : (
            <Text style={styles.noImagesText}>Bu vakaya ait henüz görüntü bulunmuyor.</Text>
          )}
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
  button: {
    marginTop: 15,
    marginBottom: 10,
  },
  imageList: {
    marginTop: 10,
  },
  imageContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  noImagesText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#888',
  },
});

export default CaseDetailScreen;
