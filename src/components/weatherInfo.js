import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  const img = weatherData.weather[0];
  console.log(img);
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>Weather in {weatherData.name}</Text>
      <Text style={styles.temperature}>{weatherData.main.temp}°C</Text>
      <View style={styles.weatherDetails}>
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png` }}
          style={styles.weatherIcon}
        />
        <Text style={styles.weatherMain}>{weatherData.weather[0].main}</Text>
      </View>
      <Text style={styles.description}>{weatherData.weather[0].description}</Text>
      <View style={styles.additionalInfo}>
        <Text style={styles.label}>Visibility:</Text>
        <Text style={styles.value}>{weatherData.visibility} km</Text>
      </View>
      <View style={styles.additionalInfo}>
        <Text style={styles.label}>Wind Speed:</Text>
        <Text style={styles.value}>{weatherData.wind.speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  cityName: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  temperature: {
    fontSize: 60,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF6347',
    marginVertical: 10,
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  weatherMain: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  description: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginVertical: 5,
  },
  additionalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  value: {
    fontSize: 16,
    color: '#666',
  },
});

export default WeatherInfo;
