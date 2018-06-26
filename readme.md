# Convert units  
Conversion of units from one number system to another, in free form.  
  
## Install
`git clone https://github.com/anstag/convert-units.git`  
`npm install`

## Usage
**Run server:**  
`npm start`  
  
**Send GET request (example):**  
`http://localhost:3000/?value=15&source=kelvin&target=degree_fahrenheit`  
  
**Get an answer (JSON):**  
`{"source":"kelvin","target":"degree_fahrenheit","value":15,"result":-432.66999999999996}`

## Supported units
`http://localhost:3000/units`