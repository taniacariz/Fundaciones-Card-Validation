# Proyecto para recaudación de donaciones

_Proyecto orientado en facilitar las donaciones a distintas fundaciones de rescate animal a través de una plataforma amigable que explique el tipo de labor que desempeñan, dónde se ubican y cómo ayudarlos._

## Pruebas iniciales 🐭

_Se desarrollo la idea principal en papel y luego en Figma para poder darle un esqueleto general al protótipo y avanzar sobre una base.
Se utilizaron diseños propios relacionados a las mismas fundaciones o tiendas de animales, por lo cual se utilizo una paleta de colores amigable con el esquema general de desarrollo visual y el perfil de usuario al que apunta llegar._

![Figma protótipo inicial](https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/figmageneral.jpg)

<div align="center">Link de Figma: https://www.figma.com/proto/bCeFoMai8qapVZnef6mNCB/Donaciones-uvu?node-id=5%3A17&scaling=min-zoom</div>

### Cambios en la interfaz 🐹

_Para facilitar la experiencia del usuario se agrego una imagen explicativa del código verificador._


![Tarjeta](https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/Tarjeta.png)


## Cambios en el código HTML ⚙️

_Como recomendación se me indico que era recomendable trabajar todo mi código html en sólo un archivo y no linkear entre archivos._

 <p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/muchoshtml.png">
 </p>


_Se juntaron todos los archivos html en uno principal trabajando el flujo de páginas a través de JS. La única página que quedo excenta fue la del Código Verificador debido a que en esta ocasión no logre vincularla al flujo principal._

 <p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/pocoshtml.png">
 </p>

## Uso de JavaScript 🔐

_Lo primero que se trabajo en JS fue la vinculación de las páginas a través de apagar y encender secciones del código._

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS.jpg">
 </p>

_Y en paralelo los botones bajo la etiqueta "volver" se redireccionaron hacía "Home"._

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS1.jpg">
 </p>
  
_En última instancia se trabajo en el Validator, dividido en dos pasos. "IsValid" para la validación y "Maskify", el cual se encarga de esconder los números de la tarjeta de crédito ingresada

_Para poder iniciar el Validator lo vinculamos al botón de "¿Confirmar?". 

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS2.jpg">
 </p>

_1. Si los carácteres ingresados no son números, son menos de 16 o no es una tarjeta de Crédito Válida nos arroja un "alert" con un mensaje que nos solicita intentar nuevamente.

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS3.jpg">
 </p>
 
_2. En caso de que sea "true", nos arroja un "alert" que nos indica que los datos ingresados son correctos, ejecutando así el maskify sobre el número ingresado. En esta instancia no logré enmascarar el número en el mismo input, dejándolo como una oportunidad pendiente para otro proyecto.

<p align="center"> 
    <img src="https://github.com/tanimikyu/FundacionesCV/blob/master/src/images/JS4.jpg">
 </p>
