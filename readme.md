<!-- Vergeet je niet de comments uit te zetten voordat je begint met typen? 💬 -->

# Procesverslag

## Over
* **Naam:** `Sjoerd Bindels`
* **Klas:** `vid-1`
* **Minor:** `Visual Interface Design`
* **Favoriete dier:** `Zeeotters zijn te gek!`
* **Startniveau:** `blauw'

## Concept

Zelf hou ik erg van muziek en vooral de elektronische kant dus techno. De duistere kant van van techno is wat mij het meeste aanspreek. Eigenschappen zoals distortion binnen tracks en harde kicks. Mijn concept heeft dan ook distortion door middel van noise of Perlin Noise algoritme. Als input kan de user zijn microfoon gebruik voor interactie binnen mijn concept.


https://user-images.githubusercontent.com/60451829/118878454-dda1e000-b8ef-11eb-98ed-c911b48cd0f5.mov




## Features

### Interactivity: 
In mijn concept gebruik in de p5.sound library hiermee kan ik de microfoon van een laptop gebruiken om interacties mogelijk te maken. Binnen de p5.sound library pak ik de AudioIn om geluid van een input source te krijgen. In de code heb ik een aantal aanpassingen gedaan in de parameters die de volume van de microfoon afmeten. Hierdoor verandert de vorm van de z-as in de sinus. 

Zoals hieronder te zien asign ik de library van p5.sound aan mijn mic variable. 
Met de start() methode is de mic klaar voor een audio input.

```

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES);
  mic = new p5.AudioIn();
  mic.start();
}

```
In mijn tweede shape heb ik een aantal parameters veranderd naar de input van de mic. 
Door de vermenigvuldigen van * 1000 maak ik het effect een stuk groter.

```
let z = sin(frameCount * 4 + i * vol*1000) * vol*1000;

```



https://user-images.githubusercontent.com/60451829/118879005-805a5e80-b8f0-11eb-8b43-2692493df06a.mov



### Generativity: 
Perlin Noise voegt randomness toe aan de code maar op een natuurlijke manier. In tegenstelling van de random functie in p5. Met perlin noise worden er random nummer gekozen die dicht bij elkaar liggen waardoor het dus meer natuurlijk overkomt.  

voorbeeld van een perlin noise line:

![image](https://user-images.githubusercontent.com/60451829/118874100-cf9d9080-b8ea-11eb-9002-300146fc2e22.png)



## Onderzoek & inspiratie


### Week-1
`Wat heb je gedaan? Wat ging goed? Wat kon beter?`

Deze week heb ik vooral inspiratie onderzoek gedaan naar generative art. Ik vond zelf de Noise Planets heel gaaf met de verschillende kleuren. 
bron: Noise Planets. (2021, 9 januari). Noise Planets. https://avinayak.github.io/art/2021/01/09/noise-planets.html

![image](https://user-images.githubusercontent.com/60451829/114768634-71204800-9d69-11eb-9d9c-3b529d942ee8.png)


https://user-images.githubusercontent.com/60451829/114769163-20f5b580-9d6a-11eb-813c-be785751a89c.mp4

Inspiratie van p5 showcase:

En to Oto: 
Interactie website waar als je klikt random circles in het beeld komen. Ook kun je je toetsenbord gebruiken. Bij elke klik verschijnen er verschillende circles met geluiden.

https://showcase.p5js.org/#/2020-All/project-11/

https://en2oto.netlify.app/


Audio visualizer: 
https://showcase.p5js.org/#/2020-Visual/project-25/

https://samantharuizdesign.com/audio-visualizer/

![image](https://user-images.githubusercontent.com/60451829/114768811-a9278b00-9d69-11eb-936f-5fca8a38193c.png)

Daarnaast ben ik al gaan kijken naar p5.js via Daniel Shiffman The Coding Train. 
bron: The Coding Train. (2021, 8 mei). Code! Programming with p5.js [Video]. Code! Programming with p5.js by Daniel Shiffman. https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA

M'n volgende stappen zijn om door te gaan met de playlist van The Coding Train. 

Link naar mijn p5.js web editor: https://editor.p5js.org/Sbindels/sketches/svuaKXXQZ

Webinar gekeken/meegedaan van Github Summit: 
GitHub. (2020, 8 mei). Creative Coding in p5.js - GitHub Satellite 2020 [Video]. YouTube. https://www.youtube.com/watch?v=sRLWIAPaiRI

mijn editor: https://editor.p5js.org/Sbindels/sketches/9ZHSI11o0

## Kleurgebruik: 

Binnen mijn artwork wilde ik toch kleuren gebruiken ook al denk je snel aan zwart bij techno. Voor de kleuren maak het gebruik van de map() functie in p5. Ik heb 3 variabelen voor de RGB gedeclareerd en hieruit komt steeds een random waarden uit. Die doe ik met map().
Bij de map() functie verandert er het nummer of value naar een range tussen de -1 en 255.

```
  for (var i = 0; i < 20; i++) {
    var r = map(sin(frameCount / 2), -1, 1, 0, 255);
    var g = map(i, 0, 20, 0, 255);
    var b = map(cos(frameCount), -1, 1, 255, 0);

    stroke(r, g, b);
    
```


## Bronnenlijst 

Dit zijn de bronnen die mij erg hebben geholpen tijdens het proces:

* The Coding Train. (2016, 17 oktober). 17.8: Microphone Input - p5.js Sound Tutorial. YouTube. https://www.youtube.com/watch?v=q2IDNkUws-A
* The Coding Train. (2019, 25 februari). Coding Challenge #136.1: Polar Perlin Noise Loops. YouTube. https://www.youtube.com/watch?v=ZI1dmHv3MeM&t=803s
* Shiffman, D. (2021, 8 maart). Code! Programming with p5.js. YouTube. https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA
* Colorful Coding. (2020, 28 oktober). Sine wave structures in p5.js | Coding Project #1. YouTube. https://www.youtube.com/watch?v=vmhRlDyPHMQ
* p5js. (z.d.). reference | p5.js. P5.Js. Geraadpleegd op 19 mei 2021, van https://p5js.org/reference/
* The Coding Train. (2015, 27 juli). I.5: Perlin Noise - The Nature of Code. YouTube. https://www.youtube.com/watch?v=8ZEMLCnn8v0
* GeeksforGeeks. (2021, 17 februari). p5.js map() Function. https://www.geeksforgeeks.org/p5-js-map-function/
