1. Kas yra CRUD? (pagrindinė idėja)

CRUD = keturios pagrindinės operacijos su duomenimis

C – Create → sukurti / pridėti naujus duomenis
R – Read → gauti / peržiūrėti duomenis
U – Update → pakeisti esamus duomenis
D – Delete → ištrinti duomenis (dažnai su patvirtinimu)
* Trinant dažniausiai klausiama: „Ar tikrai norite ištrinti?“

Beveik kiekviena programa atlieka šias keturias operacijas.

2. Realus gyvenimo pavyzdys 

Užrašų knygelė / Excel / Kontaktų sąrašas

| Veiksmas                  | CRUD   |
| ------------------------- | ------ |
| Pridėti naują kontaktą    | Create |
| Atidaryti kontaktų sąrašą | Read   |
| Redaguoti telefono numerį | Update |
| Pašalinti kontaktą        | Delete |

3. CRUD internetinėse aplikacijose (bendras vaizdas)

Tipinė eiga:

Vartotojas → Vartotojo sąsaja (UI) → Backend → Duomenų bazė

CRUD vyksta, kai:

vartotojas paspaudžia mygtuką
pateikiama forma
puslapis užkrauna duomenis

4. CRUD + HTTP metodai (būtina žinoti)

| CRUD   | HTTP Method     | Meaning       |
| ------ | --------------- | ------------- |
| Create | **POST**        | Send new data |
| Read   | **GET**         | Get data      |
| Update | **PUT / PATCH** | Change data   |
| Delete | **DELETE**      | Remove data   |

PUT – pakeičia visą objektą
PATCH – pakeičia tik konkrečius laukus

5. CRUD JavaScript’e (front-end mąstymas)

Create (Sukurti)
// let students = []; // turime masyvą

students.push({ name: "Anna", age: 20 });

Read (Skaityti)
console.log(students);

Update (Atnaujinti)
students[0].age = 21;

Delete (Ištrinti)
students.splice(0, 1); // ištrina pirmą masyvo elementą

splice(startIndex, deleteCount)
0 → pradėti nuo 0 indekso (pirmas elementas)
1 → ištrinti 1 elementą

6. CRUD ir ID (labai svarbi sąvoka)

Norint atnaujinti arba ištrinti, reikia tiksliai žinoti, ką keičiame.
Todėl naudojami ID.

Pavyzdys:

{ id: 7, name: "Tomas", age: 30 }
Update → id = 7
Delete → id = 7

ID leidžia tiksliai identifikuoti objektą.

7. CRUD klaidos

Dažniausios problemos:

Create: trūksta privalomų laukų

Read: duomenys nerasti

Update: objektas neegzistuoja

Delete: jau ištrinta / neteisingas ID



Testavimo mąstymas (Testing mindset)

„Kas nutiks, jei kažkas nepavyks?“

Testavimo mąstymas reiškia:

Testavimo mąstysena reiškia, kad jūs nedarote prielaidos, jog viskas veikia.
Jūs specialiai bandot sulaužyti sistemą

❝ Programuotojas klausia: Ar tai veiks?
Testuotojas klausia: Kaip tai gali neveikti? ❞

Pagrindinė idėja
Vietoje tik „laimingo kelio“ tikrinimo, visada klausk:
„Kas nutiks, jei kažkas bus ne taip?“


Kaip testavimo mąstymas taikomas CRUD
1️⃣ CREATE (POST)

Klausk:
O jeigu trūksta privalomo lauko?
O jeigu reikšmė tuščia? 
O jeigu duomenų tipas neteisingas? 
O jeigu siunčiu papildomus laukus?

Tikėtinas elgesys:
Aiški klaidos žinutė
Teisingas statuso kodas (dažniausiai 400)
Duomenys nesukuriami

2️⃣ READ (GET)

Klausk:
O jeigu ID neegzistuoja?
O jeigu sąrašas tuščias?
O jeigu bandau gauti duomenis, kurių neturiu teisės matyti?

Tikėtinas elgesys:
404 Not Found
Tuščias masyvas vietoje klaidos (arrays)
Sistema nenulūžta

3️⃣ UPDATE (PUT / PATCH)

Klausk:
O jeigu objektas neegzistuoja?
O jeigu siunčiu neteisingus duomenis?
O jeigu su PUT siunčiu tik dalį duomenų?
O jeigu realiai niekas nepasikeičia?

Tikėtinas elgesys:
404, jei objektas nerastas
Validacijos klaidos (400)
Jokio netyčinio duomenų praradimo

4️⃣ DELETE (DELETE)

Klausk:
O jeigu tą patį objektą trinu antrą kartą?
O jeigu ID neteisingas?
O jeigu objektas jau ištrintas?

Tikėtinas elgesys:
Tvarkinga klaida arba saugus atsakymas
Sistema išlieka stabili
Jokio netikėto elgesio

1. CRUD NĖRA framework’as

❌ CRUD nėra:

biblioteka

framework’as

programavimo kalba

✅ CRUD yra koncepcija / šablonas (pattern)

Naudojamas:

JavaScript
Java
Python
PHP
Duomenų bazėse
API
Testavime
