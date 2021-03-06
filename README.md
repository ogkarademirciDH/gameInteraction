# gameInteraction
interaction with conditional and booleams
In this part of the game project, we'll add some interactive elements to your game to give it an objective.

Review criterialess 
1. Make a copy of your code from part 3 [0 marks]

2. Collectable item object [2 marks]

3. Draw the collectable item [2 marks]

4. Collectable item interaction [2 marks]

5. Draw the canyon [1 marks]

6. Falling down the canyon [2 marks]

7. Jumping over the canyon [1 marks]

Step-By-Step Assignment Instructionsless 
1. Make a copy of your code from part 3a [0 marks]

2. Collectable item object [2 marks]

Copy and paste the collectable item code from part 2b.
Add a property `isFound` to the object and initialise it to `false`.
3. Draw the collectable item [2 marks]

Add your collectable item code from part 2b to the `draw` function.
Adjust the properties of `collectable` to make the collectable item appear in a sensible place.
Write a conditional statement so that the collectable item is only drawn when `isFound` is `false`.
4. Collectable item interaction [2 marks]

Write an `if` statement in `draw` with a condition that is `true` when the character is in range of the item. HINT: the [`dist function`]('https://p5js.org/reference/#/p5/dist') is useful here.
When the condition is `true`, set the value of `isFound` in the `collectable` to `true`.
The result should be that when your character comes into contact with the collectable item it disappears.
5. Draw the canyon [1 marks]

Add your canyon code from part 2b to the `draw` function.
Adjust the properties of `canyon` to make the collectable item appear in a sensible place.
6. Falling down the canyon [2 marks]

Write a conditional statement within `draw` to detect when the character is over the canyon. HINT: use gameChar_x and the > and < operators.
When the condition is met set `isPlummeting` to `true`.
Write another conditional statement within `draw` which detects when `isPlummeting` is `true`.
When this condition is met increment `gameChar_y` so that the game character falls quickly.
Test that your character falls down the canyon when they pass over it.
7. Jumping over the canyon [1 marks]

We also want our game character to be able to jump over the canyon.
Adjust the conditional statement which detects whether the game character is over the canyon so that it also requires the game character to be on the ground. HINT: use `gameChar_y` and the `>=` operator
Test that your character is able to jump over the canyon as well as fall down it
Once you're done record a short video (max 1 min) talking through the the code and demonstrating that the interaction works.
