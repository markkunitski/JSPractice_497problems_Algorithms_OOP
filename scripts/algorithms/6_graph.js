const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']
let count = 0
function breadthSeacrh(graph, start, end) {
    let queue = []
    queue.push(start)
    while (queue.length > 0) {
        count++
        const current = queue.shift()
        console.log(graph[current])
        if (!graph[current]) {
            graph[current] = []
        }
        if (graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
    }
}

console.log(breadthSeacrh(graph, 'a', 'g'))