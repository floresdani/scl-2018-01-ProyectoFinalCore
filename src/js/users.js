

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
    var value = event.target.value;
    espacioIf[value]
}