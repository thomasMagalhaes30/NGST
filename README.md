# National Gabriel and Space Thomas

NGST est un projet de Licence Pro de l'IUT Clermont-Ferrand 2022. (Période 3 - Web Transverse)

[![Test](https://github.com/thomasMagalhaes30/NGST/actions/workflows/test.yml/badge.svg?branch=dev)](https://github.com/thomasMagalhaes30/NGST/actions/workflows/test.yml)

## Liens utiles

- [Web transverse](https://mavincent7.github.io/)
- [Documentation ionic avec angular](https://ionicframework.com/docs/angular/your-first-app)
- [Browser API Earth](https://api.nasa.gov/#earth)

## Installation
```bash
npm install
```

Pour une configuration local
aller dans `NGST/ngst/src/environments`
```bash
cp environment.ts environment.local.ts
```
puis completez le !

## Lancement
```bash
ionic serve
```
ou avec la configuration
```
ionic serve --configuration local
```

## Lancer les tests
```
ng test "--configuration" "ci" "--code-coverage" "--browsers" "ChromeHeadless"
```

## Auteurs
- [MAGALHAES Thomas](https://github.com/thomasMagalhaes30)
- [THEUWS Gabriel](https://github.com/Amiralgaby)
