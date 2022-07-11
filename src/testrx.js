import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';
//map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`Output is: ${v}`));
//let myPromise = new Promise(promiseHandler);
let newsFeed = from(new Promise(resolve => setTimeout(() => resolve(1000), 2000)));
console.log('just before subscribe');
newsFeed.subscribe({
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
});
console.log('just after subscribe');