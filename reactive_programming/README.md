## Reactive programming

Reaktiivinen ohjelmointi on ohjelmointiparadigma, jota käytetään mm. interaktiivisten käyttöliittymien rakentamiseen.

Tässä tutkitaan erityisesti ReactiveX:n JavaScript-kirjastoa. ReactiveX on useille eri kielille kirjoitettu ohjelmointirajapinta, joka käyttää asynkronista ohjelmointia ja tietovirtoja tapahtumien tutkimiseen ja näihin reagointiin.

Tyypillinen rxjs-käyttötapaus:

Muutos DOM:ssa -> 
Tietovirta lähettää tapahtuman -> 
Tietovirran tilanneet kuuntelijat saavat tiedon tapahtumasta -> 
Tapahtuma lähetetään käsiteltäväksi

Tietovirrat ovat muuten samanlaisia kuin perinteiset event emitterit, mutta ne lähettävät vain kolmenlaisia tapahtumia:
* next
* error
* complete

Huom! Tietovirrat eivät lähetä tapahtumia, mikäli tietovirralla ei ole yhtäkään tilaajaa (engl. subscribers). Ne eivät siis syö taustalla muistia jos niitä ei käytetä.