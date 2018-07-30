const getAllVisitors = () => {
    const allVisitors = firebase.database().ref('visitors').once('value');

    return allVisitors
  }

