const objConsJp = [["やくそう", "薬草"], ["かぎ", "鍵"], ["たいまつ", "松明"], ["せいすい", "聖水"], ["キメラのつばさ", "キメラの翼"]];
//消費可能なアイテム : objets consommables/usables
const objConsFr = ["Herbe", "Clé", "Torche", "Eau bénite", "Aile de chimère"];
const objSpeJp = [["ようせいのふえ", "妖精の笛"], ["おうじょのあい", "王女の愛"]];
const objSpeFr = ["Flûte des fées", "L'amour de la princesse"];
const objAccJp = [["りゅうのうろこ", "竜の鱗"], ["せんしのゆびわ", "戦士の指輪"], ["しのくびかさり", "死の首飾り"], ["のろいのベルト", "呪いのベルト"]];
//装飾品 アックセサリ
const objAccFr = ["Écaille de dragon", "Bague des guerriers", "Collier de mort", "Ceinture maudite"];
const objArmeJp = [["たけざお", "竹竿"], ["こんぼう", "棍棒"], ["どうのつるぎ", "銅の斧"], ["はがねのつるぎ", "鋼の剣"], ["ほのおのつるぎ", "炎の剣"], ["ロトのつるぎ", "ロトの剣"]];
//装備アイテム
const objArmeFr = ["Tige de bambou", "Gourdin", "Épée de cuivre", "Hache de fer", "Épée d'acier", "Épée de feu", "Épée de Loto"];
const objArmuJp = [["ぬののふく", "布の服"], ["かわのふく", "革の服"], ["くさりかたびら", "鎖帷子"], ["てつのよろい", "鉄の鎧"], ["はがねのよろい", "鋼の鎧"], ["まほうのよろい", "魔法の鎧"], ["ロトのよろい", "ロトの鎧"]];
const objArmuFr = ["Vêtement en tissue", "Vêtement en cuir", "Cotte de mailles", "Armure de fer", "Armure d'acier", "Armure magique", "Armure de Loto"];
const objBoucJp = [["かわのたて", "皮の盾"], ["てつのたて", "鉄の盾"], ["みかがみのたて", "水鏡の盾"]];
const objBoucFr = ["Bouclier en cuir", "Bouclier d'acier", "Bouclier aqua-mirroir"];
const objCleJp = [["ぎんのたてごと", "銀の竪琴"], ["たいようのいし", "太陽の石"], ["あまぐものつえ", "雨雲の杖"], ["ロトのしるし", "ロトの印"], ["にじのしずく", "虹の滴"]];
//重要アイテム
const objCleFr = ["Harpe argentée", "Pierre solaire", "Bâton nébuleux", "Signe de Loto", "Goutte d'arc-en-ciel"];
const objGraiJp = [["ちからのたね", "力の種"], ["まもりのたね", "守りの種"], ["すばやさのたね", "素早さの種"], ["いのちのきのみ", "命の木の実"], ["ふしぎなきのみ", "不思議な木の実"]];
//たね¤きなみ
const objGraiFr = ["Graine de puissance", "Graine de défense", "Graine de vitesse", "Noix de vie", "Noix étrange"];
const tousJp = [objConsJp, objSpeJp, objAccJp, objArmeJp, objArmuJp, objBoucJp, objGraiJp];
const tousFr = [objConsFr, objSpeFr, objAccFr, objArmeFr, objArmuFr, objBoucFr, objGraiFr];


let donneesDeTableau = "<tr><th>Nom JP</th><th>Traduction FR</th></tr>"

for (let i=0; i<tousJp.length; i++) {for (let j=0; i<tousJp[i].length; j++) {
donneesDeTableau+="<tr><td>"+tousJp[i][j][0]+"<br><i>("+tousJp[i][j][1]+")</i></td><td>"+tousFr[i][j]+"</td></tr>";}}

document.getElementById("tableau").innerHTML = donneesDeTableau;
