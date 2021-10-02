class Player {
    constructor() {
        this.id = null;
        this.pos_x = null;
        this.pos_y = null;
        this.color = 'red';
        this.width = 40;
        this.height = 40;
        this.color = 'red';
        this.keysDown = [];
        this.lastShot = 0;
        this.bulletCooldown = 10;
        this.bulletCooldownLeft = this.bulletCooldown;
        this.velocity = 3;
        this.points = 0;
        this.currentHealth = 10;
        this.maxHealth = 10;
    }
    render(canvas) {
        canvas.draw(this.pos_x, this.pos_y, this.width, this.height, this.color);
        canvas.write(this.points, this.pos_x + 5, this.pos_y + 10);
        canvas.draw(this.pos_x + this.width + 2, this.pos_y, 6, this.height, 'white');
        canvas.draw(this.pos_x + this.width + 2, this.pos_y, 6 ,this.height * (this.bulletCooldownLeft / this.bulletCooldown) , 'green');
    }
}