Day #52<br>

Looked into how to update state when working with nested objects, arrays, and arrays of objects in React.<br>

  - For nested objects, shallow copy alone won’t work, so we need to spread the nested object as well. It can get messy if the nesting goes deep, so a flat structure is usually preferred.<br>

  - For arrays, instead of mutating directly with push, we use spread for adding, filter for removing, and map for updating.<br>

  - For arrays of objects, again map is used to update specific objects by id or condition.<br>
