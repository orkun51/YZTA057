import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Card, Title, Paragraph, Button, Text } from 'react-native-paper';
import * as Keychain from 'react-native-keychain';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { Card, Title, Paragraph, Button, Text } from 'react-native-paper';
import * as Keychain from 'react-native-keychain';
import * as Notifications from 'expo-notifications';
import apiClient from '../services/api';

const ProfileScreen = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('/api/v1/users/me');
        setUserProfile(response.data);
      } catch (err) {
        setError('Profil bilgileri yüklenirken bir hata oluştu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      'Çıkış Yap',
      'Hesabınızdan çıkış yapmak istediğinizden emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Evet',
          onPress: async () => {
            await Keychain.resetGenericPassword();
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };

  const sendTestNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Test Bildirimi!",
        body: "Bu bir test bildirimidir.",
      },
      trigger: null,
    });
  };

  const registerPushToken = async () => {
    try {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
        Alert.alert('İzin Gerekli', 'Push bildirimleri için izin verilmedi!');
        return;
      }
      const token = (await Notifications.getExpoPushTokenAsync()).data;
      console.log('Expo Push Token:', token);
      // TODO: Bu token'ı backend'inize kaydedin
      // await apiClient.post('/api/v1/users/register-push-token', { token });
      Alert.alert('Başarılı', 'Bildirim token'ı alındı ve kaydedilmeye hazır.');
    } catch (e) {
      console.error('Bildirim token'ı alınırken hata:', e);
      Alert.alert('Hata', 'Bildirim token'ı alınırken bir sorun oluştu.');
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

  if (!userProfile) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Profil bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Kullanıcı Profili</Title>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>E-posta:</Text>
            <Text style={styles.value}>{userProfile.email}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Hesap Durumu:</Text>
            <Text style={styles.value}>{userProfile.is_active ? 'Aktif' : 'Pasif'}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Yönetici Durumu:</Text>
            <Text style={styles.value}>{userProfile.is_admin ? 'Yönetici' : 'Kullanıcı'}</Text>
          </View>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={sendTestNotification} style={styles.testNotificationButton}>
        Test Bildirimi Gönder
      </Button>

      <Button mode="contained" onPress={registerPushToken} style={styles.registerTokenButton}>
        Bildirim Token'ı Kaydet
      </Button>

      <Button mode="contained" onPress={handleLogout} style={styles.logoutButton}>
        Çıkış Yap
      </Button>
    </View>
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
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#dc3545',
  },
  testNotificationButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
  },
  registerTokenButton: {
    marginTop: 10,
    backgroundColor: '#007bff',
  },
});

export default ProfileScreen;

import apiClient from '../services/api';

const ProfileScreen = ({ navigation }) => {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await apiClient.get('/api/v1/users/me');
        setUserProfile(response.data);
      } catch (err) {
        setError('Profil bilgileri yüklenirken bir hata oluştu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    Alert.alert(
      'Çıkış Yap',
      'Hesabınızdan çıkış yapmak istediğinizden emin misiniz?',
      [
        { text: 'İptal', style: 'cancel' },
        {
          text: 'Evet',
          onPress: async () => {
            await Keychain.resetGenericPassword();
            navigation.navigate('Login'); // Giriş ekranına yönlendir
          },
        },
      ],
      { cancelable: false }
    );
  };

  const sendTestNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Test Bildirimi!",
        body: "Bu bir test bildirimidir.",
      },
      trigger: null, // Hemen gönder
    });
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

  if (!userProfile) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Profil bulunamadı.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Kullanıcı Profili</Title>
          
          <View style={styles.detailRow}>
            <Text style={styles.label}>E-posta:</Text>
            <Text style={styles.value}>{userProfile.email}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Hesap Durumu:</Text>
            <Text style={styles.value}>{userProfile.is_active ? 'Aktif' : 'Pasif'}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.label}>Yönetici Durumu:</Text>
            <Text style={styles.value}>{userProfile.is_admin ? 'Yönetici' : 'Kullanıcı'}</Text>
          </View>
        </Card.Content>
      </Card>

      <Button mode="contained" onPress={sendTestNotification} style={styles.testNotificationButton}>
        Test Bildirimi Gönder
      </Button>

      <Button mode="contained" onPress={handleLogout} style={styles.logoutButton}>
        Çıkış Yap
      </Button>
    </View>
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
  logoutButton: {
    marginTop: 20,
    backgroundColor: '#dc3545',
  },
  testNotificationButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
  },
});

export default ProfileScreen;
