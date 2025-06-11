# 🚀 Problem Solving with TypeScript

Welcome to my **Problem Solving** repository! This repo contains self-made coding utility tools and small problem-solving projects written in **TypeScript**. The goal is to improve logic-building skills, code quality, and TypeScript mastery through hands-on practice.

---

## ✅ Projects List

### 🔐 1. Password Generator
A flexible and reusable password/hash generator class written in TypeScript.

#### Features:
- Generate mixed character passwords (a-z, A-Z, 0-9)
- Generate only uppercase, lowercase, or numeric
- UUID-style generator
- Custom character source support

#### How to Use:

```ts
import hashClass from './HashGenerator';

hashClass.generate();         // Default: 5-character password
hashClass.uppercase(8);      // Only uppercase characters
hashClass.uuid();            // UUID format: xxxx-xxxx-xxxx-xxxx
hashClass.custom(6, '@#$%'); // Custom source
```


####  ✅ small prblems
- remove duplicate item from array
- find largest number in the array
