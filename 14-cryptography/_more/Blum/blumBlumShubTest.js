import {seed, next} from './blumBlumShub.js'
seed(132747)
for (let i=0; i<10; i++) {
    console.log(next())
}
