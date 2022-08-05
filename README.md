# JSON logical engine

## **This lib still under development**

---

## Core concepts

We have 3 main components that you need to understand:

---

### Engine

- The engine is the component that will run the operators with operations
- Can be customized with a certain set of options like logging or custom operators (TODO)

### Operators

- The functions that can be executed during the engine execution
- **Can be async**
- Supports schema validation

### Operations

- The instructions of what will be executed
- Can be nested within other operation
- The arguments can be other operations

---

## Pre built operators

We have a set of pre built opreators:

### Logic Operations

`if:` If the operations  
`eq:` Deep equality check  
`neq:` Negation of the deep equality check  
`or:` || Behaviour  
`and:` && Behaviour

---

### Arithmetic Operations

`add:` Adds a list of numbers  
`subtract:` Subtracts two numbers  
`divide:` Divides one number by other  
`multiply:` Multiplies a list of numbers

---

### Numeric Operations

`gt:` Greater than  
`gte:` Greater than or equal  
`lt:` Less than  
`lte:` Less than or equal

---
