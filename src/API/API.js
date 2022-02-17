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
      if (!response.ok) throw Error(response.message);
      const parts = await response.json();

      return parts.data;
    } catch (err) {
      console.log('Can not get parts!', err);
    }
  }

  async deletePart(id) {
    try {
      const response = await fetch(
        `${this.catalogURL}/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': 'RecarSecretTokenOMG'
          }
        });
      if (!response.ok) throw Error(response.message);
    } catch (err) {
      console.log('Can not delete part!', err);
    }
  }

  async addPart(body) {
    try {
      const response = await fetch(
        `${this.catalogURL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'RecarSecretTokenOMG'
          },
          body: JSON.stringify({...body})
        });
      if (!response.ok) throw Error(response.message);
      const part = await response.json();

      return part.data;
    } catch (err) {
      console.log('Can not add part!', err);
    }
  }

}