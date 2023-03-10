

const bundeslandInfo = document.querySelector('#bundeslandInfo')
const bundeslandInfoErgebnis = document.querySelector('#bundeslandInfoErgebnis')

function check() {
    const input = bundeslandInfo.value
    let text;

    switch (input) {
        case "BadenWürttemberg":
            text = "Baden-Württemberg hat 10,880 Mio Einwohner und Stuttgart ist die Hauptstadt";
            break;
        case "Bayern":
            text = "Bayern hat 12,844 Mio Einwohner und München ist die Hauptstadt";
            break;
        case "Berlin":
            text = "Berlin hat 3,520 Mio Einwohner und Berlin ist die Hauptstadt";
            break;
        case "Brandenburg":
            text = "Brandenburg hat 2,485 Mio Einwohner und Potsdam ist die Hauptstadt";
            break;
        case "Bremen":
            text = "Bremen hat 0,671 Mio Einwohner und Bremen ist die Hauptstadt";
            break;
        case "Hamburg":
            text = "Hamburg hat 1,787 Mio Einwohner und Hamburg ist die Hauptstadt";
            break;
        case "Hessen":
            text = "Hessen hat 6,176 Mio Einwohner und Wiesbaden ist die Hauptstadt"
            break;
        case "Mecklenburg-Vorpommern":
            text = "Mecklenburg-Vorpommern hat 1,612 Mio Einwohner und Schwerin ist die Hauptstadt";
            break;
        case "Niedersachsen":
            text = "Niedersachsen hat 7,927 Mio Einwohner und Hannover ist die Hauptstadt";
            break;
        case "Nordrhein-Westfalen":
            text = "Nordrhein-Westfalen hat 17,865 Mio Einwohner und Düsseldorf ist die Hauptstadt";
            break;
        case "Rheinland-Pfalz":
            text = "Rheinland-Pfalz hat 4,053 Mio Einwohner und Mainz ist die Hauptstadt";
            break;
        case "Saarland":
            text = "Saarland hat 0,996 Mio Einwohner und Saarbrücken ist die Hauptstadt";
            break;
        case "Sachsen":
            text = "Sachsen hat 4,085 Mio Einwohner und Dresden ist die Hauptstadt";
            break;
        case "Sachsen-Anhalt":
            text = "Schleswig-Holstein hat 2,859 Mio Einwohner und Kiel ist die Hauptstadt"
            break;
        case "Thüringen":
            text = "Thüringen hat 2,171 Mio Einwohner und Erfurt ist die Hauptstadt"
            break;
        default: "Ein solches Bundesland gibt es in Deutschland nicht."

    }
    document.getElementById('bundeslandInfoErgebnis').innerHTML = text;
}


