import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10,2,3,-5,-10]);
const sorter = new Sorter(numbersCollection)
sorter.sort();
console.log(numbersCollection.data)

