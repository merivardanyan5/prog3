class Character1 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.energy = 5;
        this.directions = [];
    }


    chooseDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    eat() {
        this.chooseDirections()
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];

            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == 1) {
                    for (var i in xotArr) {
                        if (x == xotArr[i].x && y == xotArr[i].y) {
                            xotArr.splice(i, 1);
                        }
                    }
                }

                else if (matrix[y][x] == 2) {
                    for (var i in eatArr) {
                        if (x == eatArr[i].x && y == eatArr[i].y) {
                            eatArr.splice(i, 1);
                        }
                    }
                }
                else if (matrix[y][x] == 3) {
                    for (var i in grasseatereater) {
                        if (this.x == grasseatereater[i].x && this.y == grasseatereater[i].y) {
                            grasseatereater.splice(i, 1);
                        }
                    }


                }
                matrix[y][x] = 0;
            }

        }
        this.die()
        this.born()
    }
    born() {

        var x = Math.floor(random(matrix[0].length ))
        var y = Math.floor(random(matrix.length ))
        let ch = new Character1(x, y)
        character1.push(ch)
        matrix[y][x]=4
    }

    die() {

        matrix[this.y][this.x] = 0;

        for (var i in character1) {
            if (this.x == character1[i].x && this.y == character1[i].y) {
                character1.splice(i, 1);
            }
        }
    }
}