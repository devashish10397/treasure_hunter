# treasure_hunter
Unleash your coding prowess in the Treasure Hunter project! Craft a TypeScript agent to conquer a dynamically generated game environment. Navigate obstacles, stack blocks strategically, and reach the treasure atop a tower. Evaluate performance metrics and document your journey. Let the hunt begin! 🎮💎
# Treasure Hunter Project

## Overview
Welcome to the Treasure Hunter project! Your task is to develop the intelligence for an agent in a dynamic game environment. The goal is to locate and obtain a hidden treasure by strategically stacking blocks to reach the tower's summit.

## Project Objectives
1. **Code Implementation:**
   - Craft clean and functional TypeScript code for the agent.
   - Develop a class named `Stacker` with a `turn` method, accepting a JSON object and returning the agent's action.

2. **Performance Metrics:**
   - Evaluate key metrics in the provided testing environment, including average turns and runtime for 100 maps.

3. **Documentation:**
   - Provide a rough estimate of your solution development time.

## Project Details
- Explore game mechanics in the testing engine using arrow keys.
- The testing engine references `solution.js` for automated testing.

## Implementation Guidelines
- Implement the `Stacker` class with a `turn` method.
- JSON object structure:

```json
{
  "left": { "type": someValue, "level": someValue },
  "up": { "type": someValue, "level": someValue },
  "right": { "type": someValue, "level": someValue },
  "down": { "type": someValue, "level": someValue },
  "type": someValue,
  "level": someValue
}
