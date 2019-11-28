
// blue print of type script on what a recipe should look like
export class Recipe{
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(name: string, desc: string, imagePath: string){
       this.name = name;
       this.description = desc;
       this.imagePath = imagePath;
    }

    getName(){
        return this.name;
    }

    getDescription(){
        return this.description
    }

    getImagePath(){
        return this.imagePath;
    }
}