// Part 1 Humble Beginnings



const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact", 'hat', 'sunglasses'],
companion: {
    name: ["Leo",'Frank'],
    type: ["Cat", "Flea"],
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
    {}
        adventurer.roll()
        {console.log(`${this.name} rolled a ${result}.`)}
    }  
}
};
// for (i = 0; i < adventurer.inventory.length; i++){
//     console.log(adventurer.inventory[i]);
// }
  