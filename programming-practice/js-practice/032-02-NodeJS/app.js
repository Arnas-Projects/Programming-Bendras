

import { v4 as myUuid } from 'uuid'; // paimu ne default metodą v4 ir pavadinu jį myUuid
import axios from 'axios';


console.log('Labas, ką tu?', 5 * 5);


const naujasId = myUuid();
console.log('Sugeneruotas UUID:', naujasId);


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res.data));


