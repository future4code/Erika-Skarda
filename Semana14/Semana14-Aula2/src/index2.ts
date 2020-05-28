import * as fs from 'fs'


const fileName: string = 'tarefa.txt';
const data: string = `\n Tarefa: ${process.argv[2]}`
// const data: string = `Tarefa: ${tarefa}`;

try {
  fs.appendFileSync(fileName, data, 'utf8');
  console.log('Tarefa inserida')
} catch (e) {
  console.log(e)
}
