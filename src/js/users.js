function createVisitorRecord() {
    let time = new Date().getTime();
    let date = new Date(time).toLocaleString();

    visitor = {
        visitName: "",
        email: "",
        companyToVisit: "",
        toVisit: "",
        reasonToVisit: "",
        rut: "",
        //foto: ,
        date: date,
        patente: ""
    }

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    companyToVisit = document.getElementById("companyToVisit").value;
    toVisit = document.getElementById("toVisit").value;
   // reasonToVisit = document.getElementById("reasonToVisit").value;
    rut = document.getElementById("rut").value;
    patente = document.getElementById("patente").value;

    visitor.visitName = name;
    visitor.email = email;
    visitor.companyToVisit = companyToVisit;
    visitor.toVisit = toVisit;
    //visitor.reasonToVisit = reasonToVisit;
    visitor.date = date;
    visitor.rut = rut;
    visitor.patente = patente

    saveVisitor(visitor);

    return visitor;
    
}

function updateToVisitSelect(event) {
    let value = event.target.value;
    var innerHTML = "";

    for (let i = 0; i < espacioIf[value].length; i++) {

        innerHTML += `<option value="${espacioIf[value][i]}">${espacioIf[value][i]}</option>`
    }

    document.getElementById("toVisit").innerHTML = innerHTML;

}
