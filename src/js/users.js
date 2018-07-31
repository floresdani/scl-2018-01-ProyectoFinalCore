function createVisitorRecord() {

    visitor = {
        visitName: "",
        email: "",
        companyToVisit: "",
        toVisit: "",
        reasonToVisit: "",
    }

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    companyToVisit = document.getElementById("companyToVisit").value;
    toVisit = document.getElementById("toVisit").value;
    reasonToVisit = document.getElementById("reasonToVisit").value;

    visitor.visitName = name;
    visitor.email = email;
    visitor.companyToVisit = companyToVisit;
    visitor.toVisit = toVisit;
    visitor.reasonToVisit = reasonToVisit;

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
