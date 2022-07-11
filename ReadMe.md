# Running RxJs in Node + Javascript project (using VSCode Terminal)
Create a folder and open it in VSCode

## Run following command in Terminal Window
<pre>
<code>
node init                 (Press Enter for all options)
npm install rxjs
npm install esm
</code>
</pre>

Add script.js file to folder.
Add following code to script.js file

<pre>
<code>
import { from } from 'rxjs';
const array = [1, 2, 'three', true];
from(array).subscribe((val) => console.log(val));
</code>
</pre>

## Run following command in Terminal Window
<pre>
<code>
node -r esm script.js                (FYI: -r is same as --require)
</code>
</pre>

### Reference Links:
https://www.tutorialspoint.com/rxjs/rxjs_environment_setup.htm
https://www.npmjs.com/package/esm
https://medium.com/litslink/rxjs-basics-in-examples-73c3c3c415b7