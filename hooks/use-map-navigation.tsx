import * as React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { useState } from 'react';
import * as Location from 'expo-location';
import { IMapRegion } from '../components/map/map';
import { PermissionsService } from '../helper/permission-service';



export const useMapNavigation = () => {

  const mapRef = React.useRef<MapView>(null);



  const [chosenLocation, setChosenLocation] = useState<Region>({
    latitude: 55.953251,
    longitude: -3.188267,
    latitudeDelta: 5.5036,
    longitudeDelta: 5.5612,
  });

  const getUserLocatoin = async () => {
    const userLocation = await Location.getLastKnownPositionAsync();
    if(!userLocation) return; 
    setChosenLocation({
      latitude: userLocation.coords.latitude,
      longitude: userLocation.coords.longitude,
      latitudeDelta: 1.5036,
      longitudeDelta: 1.5612,
    })
  }


  const [chosenLocationText, setChosenLocationText] = useState<string>('');

  const onChange = (value: string) => {
    setChosenLocationText(value);
  };

  const onPress = () => {
    alert('batman');
  };

  const goToLocation = async () => {


    const hasLocationPermissions = await PermissionsService.checkLocationPermissions();
    if (!hasLocationPermissions) return;
    const foundLocations = await Location.geocodeAsync(chosenLocationText);

    if (!foundLocations || foundLocations.length === 0) {
      console.log('no results');
      return;
    }

    const region: Region = {
      latitude: foundLocations[0].latitude,
      longitude: foundLocations[0].longitude,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    };


    setChosenLocation(region);

    const camera = {
      center: {
        longitude: foundLocations[0].longitude,
        latitude: foundLocations[0].latitude,
      },
      altitude: 40000,
      zoom: 5,
    };
    mapRef.current?.animateCamera(camera, { duration: 1000 });
  };

  const onRegionChangeComplete = (region: IMapRegion) => {
    setChosenLocation(region);
  };




  const animateToCoordinat = (lat: number, lng: number) => {
    mapRef.current?.animateToRegion(
      {
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      1000
    );
  };



  return {
    animateToCoordinat,
    onRegionChangeComplete,
    onChange,
    onPress,
    goToLocation,
    chosenLocation,
    chosenLocationText,
    mapRef,
    getInitialRegion: getUserLocatoin,
  }
}




