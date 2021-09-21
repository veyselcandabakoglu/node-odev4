const fs = require("fs");


// CREATE FILE

let json = JSON.stringify([{ "name": "Employee 1 Name", "salary": 2000 }]);
fs.writeFile('employees.json', json, 'utf8', err => {
    if (err)
        console.log(err);
    else
        console.log("DOSYA BAŞARILI BİR ŞEKİLDE OLUŞTURULDU.");
});

// READ FILE

fs.readFile('employees.json', 'utf8', (err, data) => {
    if (err)
        console.log(err);
    else {
        console.log(data);
        console.log("DOSYA OKUNDU.");
    }
});

// UPDATE FILE

let data = [{ "name": "Employee 2 Name", "salary": 2300 }];
json = JSON.stringify(data);

fs.writeFile('employees.json', json, 'utf8', err => {
    if (err) console.log(err);
    else console.log("VERİ GÜNCELLENDİ.");
})

// DELETE FILE

fs.unlink('employees.json', err => {
    if (err) console.log(err);
    else console.log("DOSYA SİLİNDİ.");
})

