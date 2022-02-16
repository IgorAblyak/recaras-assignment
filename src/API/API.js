export default class Api {

  constructor(URL = "http://localhost:5000/") {
    this.hostURL = URL;
    this.catalogURL = `${this.hostURL}api/parts`;
  }
  
  async getParts() {
    try {
      const response = await fetch(
        `${this.catalogURL}`, {
          method: 'GET',
          headers: {
            'Authorization': 'RecarSecretTokenOMG'
          }
        });
      if (!response.ok) throw Error(response.statusText);
      const parts = await response.json();

      return parts.data;
    } catch (err) {
      console.log('Can not get parts!', err);
    }
  }
}