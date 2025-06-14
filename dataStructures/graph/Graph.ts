/**
 * Represents an undirected graph using an adjacency list.
 */
export class Graph {
    private numberOfNodes: number;
    private adjacentList: Record<string, string[]>;

    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    /**
     * Adds a new vertex to the graph.
     * @param node - The identifier for the vertex (e.g., a string like 'A', '1', etc.)
     */
    public addVertex(node: string): void {
        if (!this.adjacentList[node]) {
            this.adjacentList[node] = [];
            this.numberOfNodes++;
        } else {
            console.warn(`Vertex "${node}" already exists.`);
        }
    }

    /**
     * Adds an undirected edge between two vertices.
     * @param node1 - First vertex identifier.
     * @param node2 - Second vertex identifier.
     */
    public addEdge(node1: string, node2: string): void {
        if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
            console.error(
                `Cannot add edge, one or both vertices not found: "${node1}", "${node2}".`
            );
            return;
        }

        // Prevent duplicate edges
        if (!this.adjacentList[node1].includes(node2)) {
            this.adjacentList[node1].push(node2);
        }
        if (!this.adjacentList[node2].includes(node1)) {
            this.adjacentList[node2].push(node1);
        }
    }

    /**
     * Prints all connections in the graph.
     * For each vertex, prints its directly connected neighbors.
     */
    public showConnections(): void {
        const allNodes = Object.keys(this.adjacentList);

        for (const node of allNodes) {
            const connections = this.adjacentList[node].join(" ");
            console.log(`${node} --> ${connections}`);
        }
    }

    /**
     * Returns the current number of nodes in the graph.
     */
    public getNodeCount(): number {
        return this.numberOfNodes;
    }

    /**
     * Returns the adjacency list representing the graph.
     */
    public getAdjacencyList(): Record<string, string[]> {
        return this.adjacentList;
    }
}
