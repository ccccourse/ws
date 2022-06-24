import { prompt } from '../prompt.ts'

while (true) {
  var line = await prompt("> ")
  console.log('you type: ', line)
}
