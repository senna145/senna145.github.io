let SHEET_ID = '2PACX-1vTzWExNS8fFPsqH1DWS95q6e4hrjfkx2cYkodu0GJNr9ydo4xR-6Sk9GaIzfRXbWgjwyHmUDQVptJlE';
let API_KEY = secrets.GOOGLE_API_KEY;

function fetchSheet({ spreadsheetId, sheetName, apiKey, complete }) {
    let url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;
    return fetch(url).then(response => 
        response.json().then(result => {
            let data = Papa.parse(Papa.unparse(result.values), { header: true });
            complete(data);
        })
    );
}

function init() {
    fetchSheet({
        spreadsheetId: SHEET_ID,
        sheetName: 'Suggesties Programma Explorers Najaar 2021',
        apiKey: API_KEY,
        complete: showInfo
    });
}

function showInfo(results) {
    let data = results.data;
    console.log(data)
}