const Stack = require('./stack.ts')

const stackSource = new Stack()
const stackTemp = new Stack()
const stackTarget = new Stack()


stackSource.push(1)
stackSource.push(2)
stackSource.push(3)
console.log('A:', stackSource.toString(),' B:', stackTemp.toString(),' C:', stackTarget.toString())

while(!stackSource.isEmpty()){
    let sourcePeek = stackSource.pop()
    let targetPeek = stackTarget.peek()
    if(!targetPeek||sourcePeek<targetPeek){
        targetPeek.push(sourcePeek)
    }
}
stackTarget.push(stackSource.pop())
stackTemp.push(stackSource.pop())
stackTemp.push(stackTarget.pop()) 
stackTarget.push(stackSource.pop())
stackSource.push(stackTemp.pop())
stackTarget.push(stackTemp.pop())
stackTarget.push(stackSource.pop())

console.log('A:', stackSource.toString(),' B:', stackTemp.toString(),' C:', stackTarget.toString())