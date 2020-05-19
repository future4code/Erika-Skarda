// Pré-história
// 4000 AC --> Idade Antiga
// 476 DC --> Idade Média
// 1453 DC --> Idade Moderna
// 1789 DC --> Idade Contemporânea
// enum LabenuClasses {
//     BOUMAN = "Bouman",	
//     SAGAN = "Sagan"
//     HAMILTON = "Hamilton"
//    }
function qualAEra(ano, sigla) {
    var idade;
    switch (sigla) {
        case "AC":
            if (ano > 4000) {
                idade = "Pré-história";
            }
            else {
                idade = "Idade Antiga";
            }
            break;
        case "DC":
            if (ano <= 475) {
                idade = "Idade Antiga";
            }
            else if (ano > 476 && ano <= 1452) {
                idade = "Idade Média";
            }
            else if (ano > 1453 && ano <= 1788) {
                idade = "Idade Moderna";
            }
            else if (ano >= 1789) {
                idade = "Idade Contemporânea";
            }
            break;
        default:
            "DC";
            break;
    }
    return ("" + idade);
}
console.log(qualAEra(2020, ""));
