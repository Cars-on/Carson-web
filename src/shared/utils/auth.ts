export function getToken() {
  const token = localStorage.getItem('@crs:token')?.replaceAll('"', '');

  return token;
}
