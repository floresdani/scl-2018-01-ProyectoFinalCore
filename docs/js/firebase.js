const saveVisitor = (visitor) => {
  const newVisitorKey = firebase.database()
      .ref().child('visitors')
      .push().key;//crea uno vacío para obtener la llave

  visitor.id = newVisitorKey;

  return firebase.database()
      .ref('visitors/' + newVisitorKey)
      .set(visitor); //set actualiza el valor en esta dirección
}

//saveVisitor(createVisitorRecord());
firebase.database().ref('visitors')
  .on('child_added', (newVisit) => {
      const visitContainer = document.createElement('div');
      dashboardAdmin.appendChild(visitContainer)
      visitContainer.innerHTML +=  `<div class="divider"></div>
                                      <div class="section">
                                      <p>Visitante: ${newVisit.val().visitName}</p>
                                      <p>Empresa visitada: ${newVisit.val().companyToVisit}</p>
                                      <p>Visitó a: ${newVisit.val().toVisit}</p>
                                   </div>`
  });

/*firebase es una colección donde meto más colecciones, como las carpetas y directorias
objeto<id... me pongo en el directorio y creo un fichero vacío poniendo un id... Y la guarda en tal var
le creo la prop con la key a mi objeto, id...
ahora debo tomar el objeto y guardarlo  */