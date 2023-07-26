let graph = {}
graph.a = { b: 2, c: 1 }
graph.b = { f: 7 }
graph.c = { d: 5, e: 2 }
graph.d = { f: 2 }
graph.e = { f: 1 }
graph.f = { g: 1 }
graph.g = {}
let count = 0
function dijkstra(graph, start, end) {
    const costs = {}
    let neighbours = {}
    const processed = []
    Object.keys(graph).forEach(key => {
        if (key !== start) {

            value = graph[start][key]

            costs[key] = value || 1e6
        }
    })
    let node = lowestPath(costs, processed)
    while (node) {
        count++
        const cost = costs[node]
        console.log(cost)
        neighbours = graph[node]
        Object.keys(neighbours).forEach(neighbour => {
            let newCost = cost + neighbours[neighbour]
            
            if (newCost < costs[neighbour]) {
                
                costs[neighbour] = newCost
            }
        })
        processed.push(node)
        node = lowestPath(costs, processed)
    }
    return costs
}
function lowestPath(costs, processed) {
    count++
    let lowestCost = 1e6
    let lowestNode
    Object.keys(costs).forEach(key => {
        let cost = costs[key]
        if (cost < lowestCost && !processed.includes(key)) {
            lowestCost = cost
            lowestNode = key
        }
    })
    return lowestNode
}
console.log(dijkstra(graph, 'a', 'g'))
console.log('c ' + count)