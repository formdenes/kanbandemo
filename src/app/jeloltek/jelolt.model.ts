export class JeloltClass {
  'Teljes név'?:string = '';
  'Nem'?:string = '';
  'Csapatszám'?:string = '';
  'Csapatnév'?:string = '';
  'Kerület'?:string = '';
  'Email'?:string = '';
  'Facebook'?:string = '';
  'Születési hely'?:string = '';
  'Születés év'?:string = '';
  'Születés hónap'?:string = '';
  'Születés nap'?:string = '';
  'Iskola'?:string = '';
  'Vallás'?:string = '';
  'Ételallergia'?:string = '';
  'EÜ tudnivaló'?:string = '';
  'Gondviselő név'?:string = '';
  'Gondviselő telefon'?:string = '';
  'Gondviselő email'?:string = '';
  'Lakcím'?:string = '';
  'ECSET kód'?:string = '';
  'TAJ szám'?:string = '';
  'Bizonyítvány'?:string = '';
  'Pólóméret'?:string = '';
  'ŐVK összekötő'?:string = '';
  'ŐVK összekötő email'?:string = '';
  'ŐVK összekötő telefon'?:string = '';
  'Cspk'?:string = '';
  'Cspk email'?:string = '';
  'Cspk telefon'?:string = '';
  'Fogadalom éve'?:string = '';
  'Névnap'?:string = '';
  'Vezetett korosztály'?:string = '';
  'Őrs várhatólétszáma'?:string = '';
  'Tábor'?:string = '';
  'Becenév'?:string = '';
  'Altábori kérés'?:string = '';
  'ŐVK'?:string = '';
  'Altábor'?:string = '';
}

export interface Jelolt extends JeloltClass { };

export const viewOptions = [
  ["Teljes név", "Nem", "Csapatszám", "Csapatnév", "Kerület", "Email", "Facebook"],
  ["Teljes név", "Nem", "Csapatszám", "Csapatnév", "Kerület", "Születési hely", "Születés év", "Születés hónap", "Születés nap", "Iskola", "Vallás"]
]