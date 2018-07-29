
function visitorRecord() {
    
    let visitor = {}

    document.getElementById("name").value = name;
    document.getElementById("email").value = email;
    document.getElementById("companyToVisit").value = companyToVisit;
    document.getElementById("toVisit").value = toVisit;

    visitor.push({
        name : name,
        email: email,
        companyToVisit: companyToVisit,
        toVisit: toVisit,
    })
}

function updateToVisitSelect(event) {
    var value = event.target.value;
    espacioIf[value]
}