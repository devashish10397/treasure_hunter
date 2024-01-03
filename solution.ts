enum CellType {
    EMPTY = 0,
    WALL = 1,
    BLOCK = 2,
    GOLD = 3
}

interface Cell {
    type: CellType;
    surroundings: { [direction: string]: CellType };
    carrying: number;
}

class Stacker {
    turn(cell: Cell): string {
        const { surroundings, carrying } = cell;
    
        // If on a block, pick it up
        if (cell.type === CellType.BLOCK) {
            return "pickup";
        }
    
        // If on a gold, drop all blocks
        if (cell.type === CellType.GOLD) {
            return "drop";
        }
    
        // If there's a block or gold nearby, move towards it
        if (surroundings.left === CellType.BLOCK || surroundings.left === CellType.GOLD) {
            return "left";
        }
        if (surroundings.up === CellType.BLOCK || surroundings.up === CellType.GOLD) {
            return "up";
        }
        if (surroundings.right === CellType.BLOCK || surroundings.right === CellType.GOLD) {
            return "right";
        }
        if (surroundings.down === CellType.BLOCK || surroundings.down === CellType.GOLD) {
            return "down";
        }
    
        // If there's a wall nearby, move away from it
        if (surroundings.left === CellType.WALL) {
            return "right";
        }
        if (surroundings.up === CellType.WALL) {
            return "down";
        }
        if (surroundings.right === CellType.WALL) {
            return "left";
        }
        if (surroundings.down === CellType.WALL) {
            return "up";
        }
    
        // If none of the above, move randomly
        const n = Math.floor(Math.random() * 4);
        if (n === 0) return "left";
        if (n === 1) return "up";
        if (n === 2) return "right";
        if (n === 3) return "down";
    
        // Default return
        return "stay";
    }
}