# Enmarcha Generator - YO ENMARCHA!
Generador [Yeoman](http://yeoman.io) para crear proyectos .NET con el framework [Enmarcha](https://github.com/Encamina/Enmarcha-SharePoint) instalado. Este generador ayuda al desarrollador a generar proyectos ágilmente con Enmarcha instalado y listo para funcionar. La estructura
del proyecto generado es la de un proyecto SharePoint vacío, pero con el NuGet de Enmarcha instalado y listo para ser utilizado.

Para aprender a utilizar Enmarcha, existe un [proyecto con samples](https://github.com/Encamina/Enmarcha-SharePoint/tree/master/Samples) que contiene varios ejemplos de uso del framework.

## YO Enmarcha Demo (screenshot)
![](docs/assets/generatorEnmarcha.png)

***

## Instalación

Instala `yo` (Yeoman) y `generator-enmarcha` globalmente utilizando NPM (Esto tambien requere [Node.js](https://nodejs.org)). 

```bash
$ npm install -g yo generator-enmarcha
```

## Modo de uso

```bash
$ yo enmarcha
```
Asegúrate de ejecutar este comando dentro de la carpeta en la que deseas crear la solución con Enmarcha.

## Testing

Ejecutando `mocha` desde la carpeta del generador, lanzara los test utilizando Mocha.

## Licencia

[Licencia MIT](https://github.com/Encamina/generator-enmarcha/blob/master/LICENSE)

