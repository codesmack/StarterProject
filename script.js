import { from } from 'rxjs';
const array = [1, 2, 'three', true];
from(array).subscribe((val) => console.log(val));