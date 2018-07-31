
firebase.database().ref('visitors')
    .once('value')
    .then((allVisitors) => {
        JSON.stringify(allVisitors);
    })
    .catch(() => {
    });

/* const getAllVisitors = () => {


}

getAllVisitors();
 */
firebase.database().ref('visitors')
    .on('child_added', (newVisit) => {
        const visitContainer = document.createElement('div');
        admin.appendChild(visitContainer)
        visitContainer.innerHTML += `<div>
                                        <p>Visitante: ${newVisit.val().visitName}</p>
                                        <p>Empresa visitada: ${newVisit.val().companyToVisit}</p>
                                        <p>Visitó a: ${newVisit.val().toVisit}</p>
                                     </div>`
    });
