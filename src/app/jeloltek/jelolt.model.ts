export class JeloltClass {
  'teljes név'?:string = '';
  'nem'?:string = '';
  'csapatszám'?:string = '';
  'csapatnév'?:string = '';
  'kerület'?:string = '';
  'email'?:string = '';
  'facebook'?:string = '';
  'születési hely'?:string = '';
  'születés év'?:string = '';
  'születés hónap'?:string = '';
  'születés nap'?:string = '';
  'iskola'?:string = '';
  'vallás'?:string = '';
  'ételallergia'?:string = '';
  'eü tudnivaló'?:string = '';
  'gondviselő név'?:string = '';
  'gondviselő telefon'?:string = '';
  'gondviselő email'?:string = '';
  'lakcím'?:string = '';
  'ecset kód'?:string = '';
  'taj szám'?:string = '';
  'bizonyítvány'?:string = '';
  'pólóméret'?:string = '';
  'ővk összekötő'?:string = '';
  'ővk összekötő email'?:string = '';
  'ővk összekötő telefon'?:string = '';
  'cspk'?:string = '';
  'cspk email'?:string = '';
  'cspk telefon'?:string = '';
  'fogadalom éve'?:string = '';
  'névnap'?:string = '';
  'vezetett korosztály'?:string = '';
  'őrs várhatólétszáma'?:string = '';
  'tábor'?:string = '';
  'becenév'?:string = '';
  'altábori kérés'?:string = '';
  'ővk'?:string = '';
  'altábor'?:string = '';
}

export interface Jelolt extends JeloltClass { };

export const viewOptions = [
  ["teljes név", "nem", "csapatszám", "csapatnév", "kerület", "email", "facebook"],
  ["teljes név", "nem", "csapatszám", "csapatnév", "kerület", "születési hely", "születés év", "születés hónap", "születés nap", "iskola", "vallás"],
  ["teljes név", "nem", "csapatszám", "csapatnév", "iskola", "vallás", "altábori kérés"]
]