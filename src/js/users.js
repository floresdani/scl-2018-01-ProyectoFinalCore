

function createVisitorRecord() {
    
    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("companyToVisit").value = companyToVisit;
    document.getElementById("toVisit").value = toVisit;

    return {
        name : name,
        email: email,
        companyToVisit: companyToVisit,
        toVisit: toVisit,
    };
}

function updateToVisitSelect(event) {
    var value = event.target.value;
    espacioIf[value]
}