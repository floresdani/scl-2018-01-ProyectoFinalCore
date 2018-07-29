

let visitor = {
    name: "",
    email: "",
    companyToVisit: "",
    toVisit: "",
}

function visitorRecord() {
    
    document.getElementById("name").value = visitor.name;
    document.getElementById("email").value = visitor.email;
    document.getElementById("companyToVisit").value = visitor.companyToVisit;
    document.getElementById("toVisit").value = visitor.toVisit;

    console.log("hola")
}