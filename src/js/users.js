

function createVisitorRecord() {

    visitor = {
        name: "",
        email: "",
        companyToVisit: "",
        toVisit: ""
    }

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    companyToVisit = document.getElementById("companyToVisit").value;
    toVisit = document.getElementById("toVisit").value;

    visitor.name = name;
    visitor.value = email;
    visitor.companyToVisit = companyToVisit;
    visitor.toVisit = toVisit;

    return visitor;
}

function updateToVisitSelect(event) {
    let value = event.target.value;
    espacioIf[value]

    for (let i = 0; i < espacioIf[value].length; i++) {

        document.getElementById("toVisit").innerHTML = `<option value="${espacioIf[value][0]}"></option>`
    }

}