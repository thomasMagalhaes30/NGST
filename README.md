![NGST logo](ngst/src/assets/images/ngst.png)

# National Gabriel and Space Thomas

NGST est un projet de Licence Pro de l'IUT Clermont-Ferrand 2022. (Période 3 - Web Transverse)


[![Test](https://github.com/thomasMagalhaes30/NGST/actions/workflows/test.yml/badge.svg?branch=dev)](https://github.com/thomasMagalhaes30/NGST/actions/workflows/test.yml)

## 🚀 API
- l'api apod de la Nasa
- wheretheiss.at
  * initialement utilsé pour trouver un satellite comme l'ISS, cependant ici nous l'avons seulement utilisé pour trouver une map url à partir d'une position (latitude, longitude)

## 🚀 Liens utiles

- [Web transverse support](https://mavincent7.github.io/)
- [Documentation ionic avec angular](https://ionicframework.com/docs/angular/your-first-app)

- [APOD API](https://github.com/nasa/apod-api)
- [wheretheiss.at](https://wheretheiss.at/w/developer)

## 🚀 Installation
```sh
cd ngst/
```

```bash
npm install
```
aller dans `NGST/ngst/src/environments`

Pour une configuration local
```bash
cp src/environments/environment.ts src/environments/environment.local.ts
```
puis completez le !

## 🚀 Lancement
```bash
ionic serve
```
ou avec la configuration
```
ionic serve --configuration local
```
lancer avec la configuration et sur une autre adresse que localhost (permet de tester sur navigateur depuis un portable par exemple)
```
ionic serve --address=$(hostname -I | cut -d" " -f1) --configuration=local
```

## 🚀 Lancer les tests
ℹ Commande utilisé pour vérifier le code coverage et pour test sur git
```
ng test "--configuration" "ci" "--code-coverage" "--browsers" "ChromeHeadless"
```

📸 **Dernier résultat**
```
=============================== Coverage summary ===============================
Statements   : 87.21% ( 116/133 )
Branches     : 68.18% ( 15/22 )
Functions    : 83.01% ( 44/53 )
Lines        : 86.66% ( 104/120 )
================================================================================
```

## 🛰 Auteurs
- [MAGALHAES Thomas](https://github.com/thomasMagalhaes30)
- [THEUWS Gabriel](https://github.com/Amiralgaby)

## 🛰 Technologies et outils
<img style="height:64px; padding-right:16px;" align="left"
     src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  alt="logo git"/>
<img style="height:64px; padding-right:16px;" align="left"
     src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"  alt="logo angular"/>
<img style="height:64px; padding-right:16px;" align="left"
     src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg" alt="logo ionic"/>
