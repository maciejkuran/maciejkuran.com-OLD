# Super strong password generator –npm

Get a strong, unique, and secure password immediately.

### BUG FIX! Update your package to version 2.0.0

Versions below 2.0.0 contain a bug. The recursive function `lowercase_PW` stored generated letters in a global variable. Without reloading the browser, this variable held all the characters. Therefore, the recursive function did not allow generation of new characters. This is because a global variable already met the function condition. That's put simply.

All other functions rely on the recursive function `lowercase_PW`. <b>In version 2.0.0, I eliminated this bug.</b> The generated characters are unique every time whether you reload the browser or not. The global variables in the recursive function clean themselves to an empty array.

Errors occurred when using this package in building web applications and working with the DOM. This is a good example of how, when working with just a browser console, you can fail to anticipate such problems.

Feel free to submit ideas for improvement. Thank you.

# Installation

This library can be imported as Node.js modules or as ES modules.
`npm i super-strong-password-generator --save`
`npm i super-strong-password-generator-es --save`

\*To save as `devDependencies` use `--save-dev`

##### Node.js modules

```
const pw = require('super-strong-password-generator');
//then just call the function
pw.caseSensitive_numbs_PW(15)
```

```
//Using @Parcel bundler
import {caseSensitive_numbs_PW} from 'super-strong-password-generator'
//then just call the function
caseSensitive_numbs_PW(15)
```

##### ES modules

```
import {caseSensitive_numbs_PW} from '/node_modules/super-strong-password-generator-es/pw-generator.js';
//then just call the function
caseSensitive_numbs_PW(15)
```

```
//Using @Parcel bundler
import {caseSensitive_numbs_PW} from 'super-strong-password-generator-es'
//then just call the function
caseSensitive_numbs_PW(15)
```

## Options

The function takes one argument – the length of the password.
There are multiple options for password generation.

- `lowercase_PW` - generates lowercase random letters
- `caseSensitive_PW` - generates case sensitive random letters
- `caseSensitive_numbs_PW` - generates case sensitive letters + numbers
- `caseSensitive_SpecialCharacters_PW` - generates case sensitive letters + special characters
- `caseSensitive_Numbs_SpecialCharacters_PW` - generates case sensitive letters + numbers + special characters (recommended option due security reasons)

## Issues

Report any inconveniences or bring suggestions for improvement. Thank you in advance.
