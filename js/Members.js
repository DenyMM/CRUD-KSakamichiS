const url = "https://raw.githubusercontent.com/DenyMM/CRUD-SakamichiS/master/webcrudbde1-Sakamichi-export.jsont ";
fetch(url).then(result => result.json())
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("No puede acceder" + url + " bloqueado por exploradorS"))
