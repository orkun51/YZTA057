
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { TextInput, Button, Text, RadioButton } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import apiClient from '../services/api';

const CreateCaseScreen = ({ navigation }) => {
  const [patientId, setPatientId] = useState('');
  const [caseDate, setCaseDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [status, setStatus] = useState('Aktif');
  const [loading, setLoading] = useState(false);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || caseDate;
    setShowDatePicker(false);
    setCaseDate(currentDate);
  };

  const handleCreateCase = async () => {
    if (!patientId || !caseDate) {
      Alert.alert('Hata', 'Lütfen tüm alanları doldurun.');
      return;
    }

    setLoading(true);
    try {
      const formattedDate = caseDate.toISOString().split('T')[0]; // YYYY-MM-DD formatı
      const response = await apiClient.post('/api/v1/cases/', {
        patient_id: patientId,
        case_date: formattedDate,
        status: status,
      });
      Alert.alert('Başarılı', 'Yeni vaka başarıyla oluşturuldu.');
      navigation.goBack();
    } catch (error) {
      console.error('Vaka oluşturulurken hata:', error.response?.data || error.message);
      Alert.alert('Hata', 'Vaka oluşturulurken bir sorun oluştu.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Hasta ID (Anonim)"
        value={patientId}
        onChangeText={setPatientId}
        style={styles.input}
        mode="outlined"
      />

      <View style={styles.datePickerContainer}>
        <TextInput
          label="Vaka Tarihi"
          value={caseDate.toLocaleDateString()}
          onFocus={() => setShowDatePicker(true)}
          style={styles.input}
          mode="outlined"
          showSoftInputOnFocus={false} // Klavyenin açılmasını engelle
        />
        {showDatePicker && (
          <DateTimePicker
            value={caseDate}
            mode="date"
            display="default"
            onChange={onDateChange}
          />
        )}
      </View>

      <Text style={styles.radioGroupLabel}>Durum:</Text>
      <RadioButton.Group onValueChange={newValue => setStatus(newValue)} value={status}>
        <View style={styles.radioButtonRow}>
          <RadioButton value="Aktif" />
          <Text>Aktif</Text>
        </View>
        <View style={styles.radioButtonRow}>
          <RadioButton value="Beklemede" />
          <Text>Beklemede</Text>
        </View>
        <View style={styles.radioButtonRow}>
          <RadioButton value="Kapandı" />
          <Text>Kapandı</Text>
        </View>
      </RadioButton.Group>

      <Button mode="contained" onPress={handleCreateCase} loading={loading} style={styles.button}>
        Vaka Oluştur
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
  input: {
    marginBottom: 15,
  },
  datePickerContainer: {
    marginBottom: 15,
  },
  radioGroupLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  radioButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  button: {
    marginTop: 20,
  },
});

export default CreateCaseScreen;
