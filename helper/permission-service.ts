import * as Location from 'expo-location';

class PermissionsServiceDef {
  private hasLocation = false;
  public async checkLocationPermissions() {
    if (this.hasLocation) return this.hasLocation;
    const permissions = await Location.requestForegroundPermissionsAsync();
    return (this.hasLocation = permissions.granted);
  }
}

export const PermissionsService = new PermissionsServiceDef();
