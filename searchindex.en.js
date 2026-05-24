var relearn_searchindex = [
  {
    "breadcrumb": "Learn C — solved exercises",
    "content": "Collection of C exercises focused on real practice: pointers, data structures, dynamic memory, files, and more.\nWhat you will find \u003c/\u003e Practical exercises Real class, interview, and project problems with code you can compile and run immediately.\n📘 Step-by-step explanation Each solution walks from statement to implementation so you understand the reasoning, not just the output.\n📈 Progressive difficulty Every exercise includes a difficulty badge so you can move from fundamentals to advanced topics.\nIf you want the full path with 100 structured exercises by difficulty, see Programming in C in 100 Solved Exercises.",
    "description": "Solved C programming exercises with clear explanations and compilable code on pointers, linked lists, recursion, dynamic memory, and file handling.",
    "tags": [],
    "title": "Solved C programming exercises (step by step)",
    "uri": "/en/ejercicios/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Fundamentals",
    "uri": "/en/ejercicios/fundamentos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Resources \u0026 guides",
    "content": "Online C compiler: which option should you choose? If you are searching for an online C compiler, using one tool for everything is rarely optimal. The right choice depends on your learning stage and workflow.\nQuick comparison of online C compilers Tool Main strength Best for Main limitation OnlineGDB Compile + debug in browser Step-by-step solved practice Less lightweight UI Replit Full online IDE and collaboration Daily practice and small projects Heavier startup Programiz Very simple UX First C programs Fewer advanced options JDoodle Fast snippet execution Quick function checks Free-tier limits Ideone Share code with a link Fast review loops Less comfortable for longer tasks Wandbox Multiple compiler versions Behavior comparison Slightly steeper setup Compiler Explorer Inspect generated assembly Optimization and low-level learning Not beginner-first Fast recommendation by profile Beginner: Programiz or OnlineGDB. Daily practice: Replit or OnlineGDB. Performance focus: Compiler Explorer. Interview prep: JDoodle/Ideone for quick trial-and-error. Practical workflow for C training Solve the task in OnlineGDB or local setup. Validate edge cases (null pointers, bounds, size assumptions). Share your snippet in Ideone/JDoodle for feedback. Save final solutions in a repo to track progress. Common mistakes Relying on one compiler for every context. Skipping edge-case testing. Ignoring compiler warnings. Recommended next resource Pointers in C: solved pass-by-reference exercises malloc and realloc in C: solved dynamic array exercise memset in C: solved exercise All C exercises Guided practice and full book If you want a complete route with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) Flutter exercises to expand your stack FAQ What is the best online C compiler for beginners? OnlineGDB and Programiz are usually the easiest starting points.\nCan online compilers replace a local C setup? For quick practice, yes. For larger projects, local tooling is still recommended.\nHow can this topic help SEO? Useful comparisons plus internal links to solved exercises can capture both informational and practical intent.",
    "description": "Practical guide to choose an online C compiler based on your goal: solved practice, quick snippets, or technical interview prep.",
    "tags": [
      "Online C Compiler",
      "Practice C Online",
      "Learn C",
      "C Programming Tools",
      "C Coding"
    ],
    "title": "Online C compiler: 7 options to practice C without installing anything",
    "uri": "/en/ejercicios/recursos/c-online-compiler-para-practicar-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Fundamentals",
    "content": "Data types in C: solved exercise If you searched for data types in C solved exercise, this example helps you understand type sizes and basic casts.\nProblem statement Create a program that:\nprints sizes of common numeric types, casts float to int, casts int to double. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 #include \u003cstdio.h\u003e int main(void) { int n = 42; float x = 7.75f; printf(\"sizeof(char): %zu\\n\", sizeof(char)); printf(\"sizeof(int): %zu\\n\", sizeof(int)); printf(\"sizeof(float): %zu\\n\", sizeof(float)); printf(\"sizeof(double): %zu\\n\", sizeof(double)); int truncated = (int)x; double converted = (double)n; printf(\"float -\u003e int: %d\\n\", truncated); printf(\"int -\u003e double: %.2f\\n\", converted); return 0; } Expected output 1 2 3 4 5 6 sizeof(char): 1 sizeof(int): 4 sizeof(float): 4 sizeof(double): 8 float -\u003e int: 7 int -\u003e double: 42.00 Common mistakes Assuming fixed sizes across every platform. Mixing types without casts and losing precision. Ignoring truncation when converting float to int. Practical use Understanding types and casts in C helps prevent precision bugs, overflow issues, and unexpected behavior.\nRecommended next exercise Struct in C: solved exercise Pointers in C: solved exercises Arrays in C: solved exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is sizeof(int) always 4? Not always. It is often 4 in practice, but it depends on architecture and compiler.\nWhat happens when casting float to int? The decimal part is truncated, not rounded.\nWhen should I use explicit casts? When you want predictable conversions and to avoid ambiguous implicit behavior.",
    "description": "Solved C data types exercise using sizeof and explicit casts to prevent common mistakes.",
    "tags": [
      "Data Types in C",
      "Sizeof in C",
      "Casts in C",
      "Solved C Exercise",
      "Basic C"
    ],
    "title": "Data types in C: solved exercise with sizeof and casts",
    "uri": "/en/ejercicios/fundamentos/tipos-de-datos-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Arrays \u0026 strings",
    "content": "Arrays and vectors in C: solved exercises step by step If you are looking for vector exercises in C, this guide gives practical training around the most common beginner tasks in classes and technical screenings.\nYou will practice safe input, cumulative sum, maximum search, and conditional counting.\nProblem statement Build a program that:\nreads and validates the vector size, reads all elements from input, computes the total sum, finds the maximum value, counts how many elements are greater than a given threshold. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 #include \u003cstdio.h\u003e #define MAX_SIZE 100 int read_size(void) { int n; do { printf(\"Enter vector size (1..%d): \", MAX_SIZE); scanf(\"%d\", \u0026n); } while (n \u003c 1 || n \u003e MAX_SIZE); return n; } void read_vector(int v[], int n) { for (int i = 0; i \u003c n; i++) { printf(\"v[%d] = \", i); scanf(\"%d\", \u0026v[i]); } } int sum_vector(const int v[], int n) { int sum = 0; for (int i = 0; i \u003c n; i++) { sum += v[i]; } return sum; } int max_vector(const int v[], int n) { int max_value = v[0]; for (int i = 1; i \u003c n; i++) { if (v[i] \u003e max_value) { max_value = v[i]; } } return max_value; } int count_greater_than(const int v[], int n, int threshold) { int count = 0; for (int i = 0; i \u003c n; i++) { if (v[i] \u003e threshold) { count++; } } return count; } int main(void) { int v[MAX_SIZE]; int n = read_size(); read_vector(v, n); int sum = sum_vector(v, n); int max_value = max_vector(v, n); int threshold = 10; int greater = count_greater_than(v, n, threshold); printf(\"\\nTotal sum: %d\\n\", sum); printf(\"Maximum: %d\\n\", max_value); printf(\"Greater than %d: %d\\n\", threshold, greater); return 0; } Expected output 1 2 3 4 5 6 7 8 9 10 Enter vector size (1..100): 5 v[0] = 4 v[1] = 12 v[2] = 7 v[3] = 20 v[4] = 10 Total sum: 53 Maximum: 20 Greater than 10: 2 Common mistakes Not validating input size and causing out-of-bounds access. Using i \u003c= n instead of i \u003c n. Initializing max incorrectly (for example using 0 with negative values). Mixing input and processing in one hard-to-debug block. Practical use These array exercises in C are useful for:\nsimple statistics over data lists, condition-based filters, fundamentals required for sorting, searching, and matrix work. They are a practical bridge from basic syntax to real problem solving.\nRecommended next exercise For loop in C: solved exercises with accumulators and counters Matrices in C: solved exercises Binary search in C: solved exercise on sorted arrays All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ What is the difference between a vector and an array in C? In C practice, both terms are often used for contiguous elements of the same type stored in memory.\nHow do I avoid index out-of-range bugs? Validate size, use i \u003c n consistently, and cap input with a fixed maximum like MAX_SIZE.\nWhat should I practice after these exercises? Move to sorting and search problems on arrays, then continue with matrices and file processing.",
    "description": "Solved array and vector exercises in C with safe input, sum, max value, and conditional counting.",
    "tags": [
      "Vectors in C Exercises",
      "Arrays in C Solved Exercises",
      "Array Traversal in C",
      "Console Input in C",
      "Basic C Exercises"
    ],
    "title": "Arrays and vectors in C: solved beginner exercises",
    "uri": "/en/ejercicios/arrays-cadenas/arreglos-vectores-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Structs \u0026 files",
    "content": "Struct in C: solved exercise If you searched for struct in C solved exercise, this example helps you model real entities in C.\nProblem statement Define a Student struct with name and grade. Store multiple students in an array and compute average grade.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 #include \u003cstdio.h\u003e typedef struct { char name[20]; float grade; } Student; int main(void) { Student s[] = { {\"Ana\", 8.0f}, {\"Luis\", 7.5f}, {\"Marta\", 9.0f} }; float sum = 0.0f; int n = sizeof(s) / sizeof(s[0]); for (int i = 0; i \u003c n; i++) sum += s[i].grade; printf(\"Average: %.2f\\n\", sum / n); return 0; } Expected output 1 Average: 8.17 Common mistakes Incorrect field initialization. Mixing up . and -\u003e access. Repeating logic instead of helper functions. Practical use struct is the base for modeling domain entities (users, orders, events) in C.\nRecommended next exercise Pointers in C: solved pass-by-reference exercises Malloc and free in C: solved dynamic memory exercise Binary search in C: solved exercise on sorted arrays All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved struct exercise in C to model student records and compute averages with struct arrays.",
    "tags": [
      "Struct in C",
      "Struct in C Solved Exercise",
      "Array of Structs",
      "Data Types in C",
      "Basic C"
    ],
    "title": "Struct in C: solved exercise with arrays of structs",
    "uri": "/en/ejercicios/struct-ficheros/struct-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Data structures",
    "content": "Singly linked list in C: solved exercise If you searched for singly linked list in C solved exercise, this example covers real core operations: insert, search, and delete.\nProblem statement Implement a singly linked list with functions to:\ninsert at head, search a value, delete a node, free memory. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 #include \u003cstdio.h\u003e #include \u003cstdlib.h\u003e typedef struct Node { int value; struct Node *next; } Node; Node *insert_head(Node *head, int value) { Node *n = malloc(sizeof(Node)); if (!n) return head; n-\u003evalue = value; n-\u003enext = head; return n; } Node *delete_value(Node *head, int value) { Node *cur = head, *prev = NULL; while (cur \u0026\u0026 cur-\u003evalue != value) { prev = cur; cur = cur-\u003enext; } if (!cur) return head; if (!prev) head = cur-\u003enext; else prev-\u003enext = cur-\u003enext; free(cur); return head; } int contains(Node *head, int value) { while (head) { if (head-\u003evalue == value) return 1; head = head-\u003enext; } return 0; } void print_list(Node *head) { while (head) { printf(\"%d \", head-\u003evalue); head = head-\u003enext; } printf(\"\\n\"); } void free_list(Node *head) { while (head) { Node *tmp = head; head = head-\u003enext; free(tmp); } } int main(void) { Node *list = NULL; list = insert_head(list, 30); list = insert_head(list, 20); list = insert_head(list, 10); printf(\"Contains 20: %d\\n\", contains(list, 20)); list = delete_value(list, 20); print_list(list); free_list(list); return 0; } Expected output 1 2 Contains 20: 1 10 30 Common mistakes Losing updated head after insert/delete. Not handling deletion of first node. Forgetting final cleanup. Practical use Singly linked lists still appear in lightweight job queues and incremental event pipelines.\nRecommended next exercise Queue in C: solved exercise with circular array Stack in C: solved exercise with push, pop, and peek Binary search in C: solved exercise on sorted arrays All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved singly linked list exercise in C with head insertion, value search, and node deletion.",
    "tags": [
      "Singly Linked List in C",
      "Linked List C Solved Exercise",
      "C Data Structures",
      "Pointers in C",
      "Intermediate C"
    ],
    "title": "Singly linked list in C: solved exercise with insert and delete",
    "uri": "/en/ejercicios/estructuras-datos/lista-simplemente-enlazada-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Pointers \u0026 memory",
    "content": "Pointers in C: solved exercise If you came from pointers in C solved exercises, this page targets a core skill: changing values from a function via pass-by-reference.\nProblem statement Create a swap function that receives two integers by reference and swaps them. Print values before and after.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 #include \u003cstdio.h\u003e void swap(int *a, int *b) { int tmp = *a; *a = *b; *b = tmp; } int main(void) { int x = 12; int y = 45; printf(\"Before: x=%d, y=%d\\n\", x, y); swap(\u0026x, \u0026y); printf(\"After: x=%d, y=%d\\n\", x, y); return 0; } Expected output 1 2 Before: x=12, y=45 After: x=45, y=12 Recommended edge case Also test equal values:\n1 2 Before: x=7, y=7 After: x=7, y=7 This confirms behavior is still correct when no visible change occurs.\nWhat this exercise teaches address operator \u0026, dereference operator *, pass-by-reference in C, modifying external values from a function. Common mistakes Passing x instead of \u0026x. Using uninitialized pointers. Confusing *p (value) with p (address). Calling broader pointer APIs with NULL without defensive checks. Time and space complexity Time: O(1). Extra space: O(1). Practical use This pattern is everywhere in performance-critical code and systems software where you need in-place updates without copying large data.\nRecommended next exercise Struct in C: solved exercise with arrays of structs Malloc and free in C: solved dynamic memory exercise Binary search in C: solved exercise on sorted arrays All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this good as a first C pointers exercise? Yes. It is one of the first exercises you should master before dynamic memory and linked lists.\nWhere should I continue practicing? Continue with Programming in C in 100 Solved Exercises and Kindle Unlimited option: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved pointers exercise in C to master pass-by-reference, variable swap, and common pointer mistakes.",
    "tags": [
      "Pointers in C",
      "Pointers in C Solved Exercises",
      "Pass by Reference in C",
      "Swap Variables C",
      "Intermediate C"
    ],
    "title": "Pointers in C: solved pass-by-reference exercises",
    "uri": "/en/ejercicios/punteros-memoria/punteros-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Algorithms",
    "content": "Recursion in C: solved exercise If you searched for recursion in C solved exercise, this example teaches the classic pattern: base case, recursive call, and work during unwind.\nProblem statement Implement a recursive function that prints a string in reverse without auxiliary arrays.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 #include \u003cstdio.h\u003e void print_reverse(const char *s) { if (*s == '\\0') { return; } print_reverse(s + 1); putchar(*s); } int main(void) { const char *text = \"programming\"; printf(\"Original: %s\\n\", text); printf(\"Reversed: \"); print_reverse(text); putchar('\\n'); return 0; } Expected output 1 2 Original: programming Reversed: gnimmargorp Recommended edge case Test two minimum inputs:\n1 2 3 4 5 Original: \"\" Reversed: \"\" Original: \"A\" Reversed: A This confirms the base case stops recursion correctly.\nHow to reason about this recursion base case: empty string, step: s + 1, unwind phase: print current character. Common mistakes Missing base case. Infinite recursion. Printing in the wrong order (before vs after recursive call). Not advancing the pointer (s + 1) and recursing on the same address. Time and space complexity Time: O(n), each character is visited once. Extra space: O(n) due to recursive call stack. Practical use Recursion is still common in tree traversal, nested data parsing, and hierarchical data analysis pipelines.\nRecommended next exercise Binary search in C: solved exercise on sorted arrays Queue in C: solved exercise with circular array Files in C: solved exercise to count lines and characters All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ When should I use recursion in C? Use recursion when the problem is naturally recursive. For simple linear tasks, iterative code is often faster.\nWhere can I find more recursion and C exercises? At Programming in C in 100 Solved Exercises and the C Exercises section. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved recursion exercise in C to reverse strings, understand base case flow, and avoid common recursion mistakes.",
    "tags": [
      "Recursion in C",
      "Recursion in C Solved Exercise",
      "Reverse String in C",
      "Recursive Functions in C",
      "Intermediate C"
    ],
    "title": "Recursion in C: solved exercise to reverse a string",
    "uri": "/en/ejercicios/algoritmos/recursividad-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Fundamentals",
    "content": "Sequential programming in C: solved exercises to start If you are looking for sequential programming in C, this post gives beginner-friendly solved exercises using the core model: input, processing, and output.\nThey are simple by design, but critical for building strong fundamentals before loops, advanced conditionals, and data structures.\nProblem statement Solve these 4 sequential mini exercises:\nconvert Celsius to Fahrenheit, compute rectangle area and perimeter, compute average of 3 scores, compute final price with 21% VAT. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 #include \u003cstdio.h\u003e double celsius_to_fahrenheit(double c) { return (c * 9.0 / 5.0) + 32.0; } void rectangle(double base, double height, double *area, double *perimeter) { *area = base * height; *perimeter = 2.0 * (base + height); } double average_three(double a, double b, double c) { return (a + b + c) / 3.0; } double price_with_vat(double base_price) { const double VAT = 0.21; return base_price * (1.0 + VAT); } int main(void) { double c = 25.0; printf(\"%.2f C = %.2f F\\n\", c, celsius_to_fahrenheit(c)); double area, perimeter; rectangle(8.0, 3.0, \u0026area, \u0026perimeter); printf(\"Rectangle -\u003e area: %.2f, perimeter: %.2f\\n\", area, perimeter); printf(\"Average of 7.5, 8.0, 6.5 = %.2f\\n\", average_three(7.5, 8.0, 6.5)); double base = 100.0; printf(\"Base price %.2f -\u003e final price with VAT: %.2f\\n\", base, price_with_vat(base)); return 0; } Expected output 1 2 3 4 25.00 C = 77.00 F Rectangle -\u003e area: 24.00, perimeter: 22.00 Average of 7.5, 8.0, 6.5 = 7.33 Base price 100.00 -\u003e final price with VAT: 121.00 Common mistakes Using integer division where decimal precision is required. Mixing units or formula steps in conversions. Keeping all logic inside main instead of using helper functions. Not validating results with simple reference cases. Practical use Sequential C programming is useful for:\nfirst calculator-style scripts, beginner academic practice, reinforcing syntax and numeric operations. Mastering this base makes loops, conditionals, and modular design much easier.\nRecommended next exercise If else in C: solved exercises with nested conditions For loop in C: solved exercises with accumulators and counters While and do while in C: solved exercises All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ What does sequential programming mean in C? It means executing instructions in order, top to bottom, without complex branching. It is the base of all programs.\nWhy begin with sequential exercises? They help you lock in syntax, variable handling, and numeric operations before adding extra control-flow complexity.\nWhat should I study after this? Move to conditionals and loops, then practice arrays and functions with real problem sets.",
    "description": "Solved sequential programming exercises in C using input, processing, and output for complete beginners.",
    "tags": [
      "Sequential Programming in C",
      "C Exercises for Beginners",
      "Input Process Output in C",
      "C Fundamentals",
      "Basic C Exercises"
    ],
    "title": "Sequential programming in C: solved exercises from scratch",
    "uri": "/en/ejercicios/fundamentos/programacion-secuencial-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Structs \u0026 files",
    "content": "Classes in C with struct: solved exercise step by step If you are searching for classes in C with struct, this guide shows a practical object-like pattern in plain C: struct + functions + separated files.\nThe goal is to simulate encapsulation and clean responsibilities without native OOP features.\nProblem statement Design a Cuenta module that:\ndefines an entity with owner name and balance, exposes functions to create, deposit, withdraw, and print state, separates interface (cuenta.h) and implementation (cuenta.c), uses main.c to test the full workflow. C solution cuenta.h\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 #ifndef CUENTA_H #define CUENTA_H typedef struct { char titular[64]; double saldo; } Cuenta; Cuenta cuenta_crear(const char *titular, double saldo_inicial); int cuenta_depositar(Cuenta *c, double importe); int cuenta_retirar(Cuenta *c, double importe); void cuenta_imprimir(const Cuenta *c); #endif cuenta.c\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 #include \"cuenta.h\" #include \u003cstdio.h\u003e #include \u003cstring.h\u003e Cuenta cuenta_crear(const char *titular, double saldo_inicial) { Cuenta c; strncpy(c.titular, titular, sizeof(c.titular) - 1); c.titular[sizeof(c.titular) - 1] = '\\0'; c.saldo = (saldo_inicial \u003e= 0.0) ? saldo_inicial : 0.0; return c; } int cuenta_depositar(Cuenta *c, double importe) { if (!c || importe \u003c= 0.0) return 0; c-\u003esaldo += importe; return 1; } int cuenta_retirar(Cuenta *c, double importe) { if (!c || importe \u003c= 0.0 || importe \u003e c-\u003esaldo) return 0; c-\u003esaldo -= importe; return 1; } void cuenta_imprimir(const Cuenta *c) { if (!c) return; printf(\"Owner: %s | Balance: %.2f\\n\", c-\u003etitular, c-\u003esaldo); } main.c\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 #include \"cuenta.h\" #include \u003cstdio.h\u003e int main(void) { Cuenta c = cuenta_crear(\"Rodrigo\", 1000.0); cuenta_imprimir(\u0026c); cuenta_depositar(\u0026c, 250.0); cuenta_retirar(\u0026c, 400.0); cuenta_imprimir(\u0026c); if (!cuenta_retirar(\u0026c, 2000.0)) { printf(\"Withdrawal rejected due to insufficient funds.\\n\"); } return 0; } Build:\n1 gcc -Wall -Wextra -std=c11 main.c cuenta.c -o cuenta_demo Expected output 1 2 3 Owner: Rodrigo | Balance: 1000.00 Owner: Rodrigo | Balance: 850.00 Withdrawal rejected due to insufficient funds. Common mistakes Putting all business logic in main.c and losing modularity. Skipping pointer and amount validation. Copying strings without bounds checks. Assuming this is full OOP: C still has no native inheritance or methods. Practical use This pattern helps you:\ndesign maintainable C modules, separate public API from implementation details, build cleaner foundations for larger projects. It is a practical way to get object-like structure while staying in idiomatic C.\nRecommended next exercise Struct in C: solved exercise with arrays of structures Malloc and free in C: solved exercises Pointer to pointer in C: solved exercise with reference updates All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Can you build real object-oriented design in C? Not natively. You can simulate parts of it with struct, function APIs, and pointers, but there is no built-in inheritance or method system.\nWhy separate .h and .c in this exercise? Because it improves maintainability, reuse, and clarity of the module public contract.\nIs this pattern useful for interviews or only large projects? Both. In interviews it shows structured thinking, and in production it prevents monolithic code.",
    "description": "Solved exercise to simulate classes in C with struct and functions, separating header interface and source implementation.",
    "tags": [
      "Classes in C With Struct",
      "Struct in C Solved Exercise",
      "Modular C Design",
      "Encapsulation in C",
      "Intermediate C Exercises"
    ],
    "title": "Classes in C with struct: solved modular design exercise",
    "uri": "/en/ejercicios/struct-ficheros/simular-clases-con-struct-en-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Arrays \u0026 strings",
    "uri": "/en/ejercicios/arrays-cadenas/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Resources \u0026 guides",
    "content": "Best books to learn C in 2026 If you are searching for best books to learn C, the best approach is not a single title. It works better to combine a fundamentals classic with guided practice.\nThis guide gives you a practical comparison by level and goal.\nPractical ranking by goal Book Recommended level Main strength Main limitation When to pick it C Programming: A Modern Approach (K. N. King) Beginner-intermediate Clear and progressive Less interview-focused If you are starting from scratch The C Programming Language (Kernighan and Ritchie) Intermediate Canonical and concise reference Dense for beginners If you already know syntax and want stronger fundamentals Expert C Programming: Deep C Secrets (van der Linden) Intermediate-advanced Real pitfalls and subtle mistakes Not a zero-to-one path If you want to avoid common production bugs Modern C (Jens Gustedt) Intermediate-advanced Modern C style (C11/C17) Higher entry difficulty If you care about contemporary C practices Programming in C in 100 Solved Exercises Beginner-advanced Guided daily practice Less theory history If you want to learn by solving exercises from day one How to choose based on your starting point New to C: prioritize clarity plus progressive exercises. Already coding: pair a classic (King or K\u0026R) with focused drills on pointers, memory, and data structures. Interview prep: prioritize books with problem-solving and complexity mindset. Recommended study path (6 to 8 weeks) Week 1-2: syntax, flow control, and functions. Week 3-4: pointers, arrays, and dynamic memory. Week 5-6: core data structures (lists, stacks, queues). Week 7-8: files, debugging, and interview-style exercises. Guided practice and full book If you want measurable progress, use this combination:\nProgramming in C in 100 Solved Exercises Free C exercises on this site View on Amazon (included in Kindle Unlimited) FAQ What is the best C book for beginners? The one that lets you practice daily with fast feedback. Without exercises, C progress is much slower.\nAre classic C books still useful in 2026? Yes. They are still excellent for fundamentals, but you should pair them with practical and modern exercise-based material.\nIs Kindle Unlimited worth it for learning C? If you already use Kindle Unlimited, it is often a cost-effective way to access technical books.",
    "description": "Useful comparison of classic and modern C books in 2026 by level, exercises, practical focus, and recommended learning path.",
    "tags": [
      "Best Books to Learn C",
      "Best C Programming Book",
      "Learn C From Scratch",
      "C Learning Resources",
      "C Programming"
    ],
    "title": "Best books to learn C in 2026: comparison by level and learning style",
    "uri": "/en/ejercicios/recursos/mejores-libros-para-aprender-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Pointers \u0026 memory",
    "content": "Pointer to pointer in C: solved exercise If you searched for pointer to pointer in C solved exercise, this page shows how to update an original pointer inside a function.\nProblem statement Create a function that receives int **p and redirects *p to another integer.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 #include \u003cstdio.h\u003e void redirect(int **p, int *new_target) { *p = new_target; } int main(void) { int a = 10; int b = 99; int *p = \u0026a; printf(\"Before: %d\\n\", *p); redirect(\u0026p, \u0026b); printf(\"After: %d\\n\", *p); return 0; } Expected output 1 2 Before: 10 After: 99 Practical use functions that allocate memory and return pointers, linked-list head insert/delete operations, APIs that need to rewrite references. Common mistakes Passing p instead of \u0026p. Mixing up p, *p, and **p. Dereferencing uninitialized pointers. Recommended next exercise Malloc and free in C: solved dynamic memory exercise Pointers in C: solved pass-by-reference exercises Binary tree in C: solved insertion and search exercise All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved pointer-to-pointer exercise in C to safely update addresses from inside a function.",
    "tags": [
      "Pointer to Pointer in C",
      "Double Pointer in C",
      "Pointers in C Solved Exercise",
      "Dynamic Memory in C",
      "Intermediate C"
    ],
    "title": "Pointer to pointer in C: solved exercise with reference update",
    "uri": "/en/ejercicios/punteros-memoria/puntero-a-puntero-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Algorithms",
    "content": "Binary search in C: solved exercise If you searched for binary search in C solved exercise, this page includes a clean iterative implementation and complexity notes.\nProblem statement Given a sorted array, return the target index or -1 if missing.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 #include \u003cstdio.h\u003e int binary_search(int a[], int n, int target) { int l = 0, r = n - 1; while (l \u003c= r) { int m = l + (r - l) / 2; if (a[m] == target) return m; if (a[m] \u003c target) l = m + 1; else r = m - 1; } return -1; } int main(void) { int a[] = {2, 5, 9, 12, 18, 25}; int idx = binary_search(a, 6, 12); printf(\"Index: %d\\n\", idx); return 0; } Expected output 1 Index: 3 Complexity Time: O(log n) Space: O(1) Common mistakes Running it on unsorted arrays. Wrong midpoint calculation. Incorrect range updates (l, r). Practical use Binary search appears in ordered catalogs, index systems, and high-performance query paths.\nRecommended next exercise Merge sort in C: solved exercise with divide and conquer Bubble sort in C: solved exercise step by step Queue in C: solved exercise with circular array All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved binary search exercise in C to find target indices in sorted arrays with O(log n) complexity.",
    "tags": [
      "Binary Search in C",
      "Binary Search C Solved Exercise",
      "Algorithms in C",
      "Arrays in C",
      "Intermediate C"
    ],
    "title": "Binary search in C: solved exercise on sorted arrays",
    "uri": "/en/ejercicios/algoritmos/busqueda-binaria-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Data structures",
    "content": "Doubly linked list in C: solved exercise If you searched for doubly linked list in C solved exercise, this example covers the exact interview and exam pattern: insert nodes, traverse both directions, and free memory correctly.\nProblem statement Implement a doubly linked list where each node contains:\nvalue next pointer prev pointer Create functions to:\nappend at the end, traverse forward, traverse backward, free the full list. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 #include \u003cstdio.h\u003e #include \u003cstdlib.h\u003e typedef struct Node { int value; struct Node *next; struct Node *prev; } Node; Node *append(Node *head, int value) { Node *newNode = (Node *)malloc(sizeof(Node)); if (newNode == NULL) { fprintf(stderr, \"Memory allocation error.\\n\"); return head; } newNode-\u003evalue = value; newNode-\u003enext = NULL; newNode-\u003eprev = NULL; if (head == NULL) { return newNode; } Node *current = head; while (current-\u003enext != NULL) { current = current-\u003enext; } current-\u003enext = newNode; newNode-\u003eprev = current; return head; } Node *getTail(Node *head) { if (head == NULL) { return NULL; } while (head-\u003enext != NULL) { head = head-\u003enext; } return head; } void traverseForward(Node *head) { printf(\"Forward traversal:\\n\"); while (head != NULL) { printf(\"%d \", head-\u003evalue); head = head-\u003enext; } printf(\"\\n\"); } void traverseBackward(Node *tail) { printf(\"Backward traversal:\\n\"); while (tail != NULL) { printf(\"%d \", tail-\u003evalue); tail = tail-\u003eprev; } printf(\"\\n\"); } void freeList(Node *head) { while (head != NULL) { Node *tmp = head; head = head-\u003enext; free(tmp); } } int main(void) { Node *list = NULL; list = append(list, 10); list = append(list, 20); list = append(list, 30); traverseForward(list); traverseBackward(getTail(list)); freeList(list); return 0; } Expected output 1 2 3 4 Forward traversal: 10 20 30 Backward traversal: 30 20 10 Complexity and key takeaways append: O(n) due to tail search. traverseForward and traverseBackward: O(n). Extra space: O(1) excluding node storage. Common mistakes Forgetting to update prev when linking new nodes. Losing the head reference. Skipping memory cleanup. Practical use This pattern appears in modern event-processing tasks (logs, change streams, history navigation) where two-way traversal is useful.\nRecommended next exercise Binary tree in C: solved insertion and search exercise Circular linked list in C: solved insert and traversal exercise fread and fwrite in C: solved binary file exercise All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this doubly linked list exercise advanced? It is intermediate-to-advanced. If you already know basic pointers, this is a strong next step.\nWhere can I find more solved C exercises? At Programming in C in 100 Solved Exercises and in the C Exercises section. Kindle Unlimited option: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Learn doubly linked list in C with a solved exercise: append, forward/backward traversal, and leak-free memory cleanup.",
    "tags": [
      "Doubly Linked List in C",
      "Doubly Linked List C Solved Exercise",
      "C Data Structures",
      "Pointers in C",
      "Dynamic Memory in C",
      "Advanced C"
    ],
    "title": "Doubly linked list in C: solved exercise with insert and traversal",
    "uri": "/en/ejercicios/estructuras-datos/lista-doblemente-enlazada-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Arrays \u0026 strings",
    "content": "Matrices in C: solved exercise If you are searching for matrices in C solved exercises, this is one of the best tasks to master indexing in 2D arrays.\nProblem statement Given a 3x3 square matrix, compute:\nmain diagonal sum, secondary diagonal sum. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 #include \u003cstdio.h\u003e int main(void) { int m[3][3] = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} }; int main_sum = 0; int secondary_sum = 0; for (int i = 0; i \u003c 3; i++) { main_sum += m[i][i]; secondary_sum += m[i][2 - i]; } printf(\"Main diagonal: %d\\n\", main_sum); printf(\"Secondary diagonal: %d\\n\", secondary_sum); return 0; } Expected output 1 2 Main diagonal: 15 Secondary diagonal: 15 Recommended edge case Also test a 1x1 matrix:\n1 2 3 { {7} } Main diagonal: 7 Secondary diagonal: 7 Common mistakes Swapping formulas: main is m[i][i] and secondary is m[i][n - 1 - i]. Hardcoding 2 - i and breaking the logic for non-3x3 sizes. Not resetting accumulators to 0 between test runs. Using a non-square matrix and expecting diagonal logic to hold. Time and space complexity Time: O(n) to compute both diagonals in an n x n matrix. Extra space: O(1) with only accumulator variables. Practical use This indexing pattern appears in table analytics, data transforms, and matrix-based optimization tasks.\nRecommended next exercise Strings in C: solved exercises with strlen, strcpy, and strcmp Files in C: solved exercise to count lines and characters Bubble sort in C: solved exercise step by step All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this matrices exercise beginner-friendly? Yes, this is basic-to-intermediate and excellent for loop and index practice.\nWhere can I find more solved C exercises? At Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved matrices exercise in C to compute main and secondary diagonal sums in square matrices.",
    "tags": [
      "Matrices in C",
      "Matrices in C Solved Exercises",
      "Main and Secondary Diagonal",
      "Two Dimensional Arrays in C",
      "Basic C"
    ],
    "title": "Matrices in C: solved main and secondary diagonal exercise",
    "uri": "/en/ejercicios/arrays-cadenas/matrices-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises",
    "content": "Programming in C in 100 Solved Exercises Learn C by doing: 100 exercises explained step by step Want to truly master C? This book teaches you practical programming from fundamentals to advanced techniques. Each exercise includes a clear statement, reasoned solution and detailed explanation.\n📚 Buy on Amazon 🇪🇸 📖 Spanish Version Programación en C Buy on Amazon.es 🇪🇸 🇺🇸 🇬🇧 📄 English Version Programming in C Buy on Amazon.com 🇺🇸 You can also read it on Kindle Unlimited (free with an active subscription or trial period).\nWhat you'll learn Strong C fundamentals Variables, data types, and operators to understand how C works from the ground up.\nControl flow and logic Conditionals and loops (`if`, `switch`, `for`, `while`) to solve practical problems step by step.\nFunctions and recursion Problem decomposition, code reuse, and recursive techniques applied with clear reasoning.\nPointers and dynamic memory Address handling, `malloc/free`, and practices that prevent common memory bugs.\nArrays, strings, and structs Data modeling with arrays, strings, and `struct` to build more complete solutions.\nFiles and input/output File reading/writing plus resource handling for robust command-line programs.\nNot just theory: real practice Each exercise is designed so you write code from day one. You don't just read, you program and learn by doing.\n🎁 Complementary resources included In addition to the book, you have access to free resources that will help you learn faster:\nAvailable resources 🎁 📦 Reader Pack Receive free by email:\nA4 C Language Cheat Sheet in PDF Project template with tests Devcontainer configured for VS Code Request free pack 🐙📁 💻 Source code Access the complete code for all 100 exercises:\nGitHub repository Direct ZIP download Ready-to-use template View code on GitHub 📄🔎 🐛 Errata and corrections Found an error in the book?\nReport errata Check published corrections Keep your book updated View errata Did you like the book? Sign up for the newsletter: technology, education, programming, internet culture and useful tools.\nSolved C exercises you can start today If you want to practice before buying, here is a curated set of solved C programming exercises by core topic:\nPointers in C: solved exercises Recursion in C: solved exercises Stack in C: solved exercise Queue in C: solved exercise Singly linked list in C: solved exercise Doubly linked list in C: solved exercise Matrices in C: solved exercises Files in C: solved exercises Browse all C exercises If you want the full guided progression path, get the book on Amazon and read it with Kindle Unlimited.",
    "description": "Learn C programming with 100 exercises explained step by step. Clear statements, reasoned solutions and practical resources to progress with confidence.",
    "tags": [],
    "title": "Programming in C in 100 Solved Exercises",
    "uri": "/en/c100/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Structs \u0026 files",
    "content": "Inheritance in C with composition: solved exercise If you are searching for inheritance in C, the practical approach is composition plus function pointers, since C has no native inheritance model.\nThis pattern lets you model simple hierarchies and runtime behavior in plain C.\nProblem statement Model a basic hierarchy:\nbase type Animal with name and speak behavior, Dog and Cat types that extend Animal through composition, iterate over an Animal* array and execute polymorphic behavior. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 #include \u003cstdio.h\u003e typedef struct Animal Animal; typedef void (*SpeakFn)(const Animal *); struct Animal { const char *name; SpeakFn speak; }; typedef struct { Animal base; int energy; } Dog; typedef struct { Animal base; int lives; } Cat; void dog_speak(const Animal *a) { const Dog *d = (const Dog *)a; printf(\"Dog %s: woof (energy=%d)\\n\", d-\u003ebase.name, d-\u003eenergy); } void cat_speak(const Animal *a) { const Cat *c = (const Cat *)a; printf(\"Cat %s: meow (lives=%d)\\n\", c-\u003ebase.name, c-\u003elives); } Dog dog_create(const char *name, int energy) { Dog d; d.base.name = name; d.base.speak = dog_speak; d.energy = energy; return d; } Cat cat_create(const char *name, int lives) { Cat c; c.base.name = name; c.base.speak = cat_speak; c.lives = lives; return c; } int main(void) { Dog d = dog_create(\"Toby\", 80); Cat c = cat_create(\"Misu\", 9); Animal *group[] = {(Animal *)\u0026d, (Animal *)\u0026c}; int n = (int)(sizeof(group) / sizeof(group[0])); for (int i = 0; i \u003c n; i++) { group[i]-\u003espeak(group[i]); } return 0; } Expected output 1 2 Dog Toby: woof (energy=80) Cat Misu: meow (lives=9) Common mistakes Copying only the base type instead of using pointers to composed objects. Forgetting to initialize the function pointer. Casting between incompatible types. Trying to replicate full OOP inheritance complexity in C when not needed. Practical use This pattern is useful for:\ncallback-driven engines and libraries, plugin systems with a shared interface, reducing coupling across modules. It is a practical design skill for systems-level C code.\nRecommended next exercise Classes in C with struct: solved modular design exercise Struct in C: solved exercise with arrays of structures Pointer to pointer in C: solved exercise with reference updates All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Does C have native inheritance? No. In C, inheritance-like design is simulated with composition, pointers, and function tables or callbacks.\nWhen should I use function pointers? When you need swappable runtime behavior, such as strategy patterns, callbacks, or driver abstractions.\nCan this pattern fully replace OOP? Not fully. C does not provide all OOP abstractions, but this approach covers many practical modular-design cases.",
    "description": "Solved inheritance-style exercise in C using composition and function pointers to simulate polymorphic behavior.",
    "tags": [
      "Inheritance in C",
      "Composition in C",
      "Function Pointers in C",
      "Polymorphism in C",
      "Intermediate C Exercises"
    ],
    "title": "Inheritance in C: solved exercise with composition and pointers",
    "uri": "/en/ejercicios/struct-ficheros/simular-herencia-en-c-con-composicion/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Arrays \u0026 strings",
    "content": "memset in C: solved exercise If you searched for memset in C solved exercise, this example covers text buffers and integer array initialization.\nProblem statement Create a program that:\ninitializes a text buffer with '*', initializes an integer array to 0, prints both outputs to verify the final state. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 #include \u003cstdio.h\u003e #include \u003cstring.h\u003e int main(void) { char buffer[11]; int nums[5]; memset(buffer, '*', 10); buffer[10] = '\\0'; memset(nums, 0, sizeof(nums)); printf(\"Buffer: %s\\n\", buffer); printf(\"Nums: \"); for (int i = 0; i \u003c 5; i++) printf(\"%d \", nums[i]); printf(\"\\n\"); return 0; } Expected output 1 2 Buffer: ********** Nums: 0 0 0 0 0 Common mistakes Using memset to set non-zero values in int arrays. Passing element count instead of byte count. Forgetting the \\0 terminator for text buffers. Practical use memset is used to reset structs, clear buffers, and prepare memory before processing.\nRecommended next exercise Data types in C: solved exercise malloc and realloc in C: solved exercise Files in C: solved exercise Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Does memset work for every data type? It writes bytes. It is ideal for zero-initialization, but not for every non-zero numeric value.\nWhy is sizeof(array) important with memset? Because memset expects bytes, not element count.\nIs memset faster than a loop? Often yes, since it is usually optimized at low level.",
    "description": "Solved memset exercise in C to initialize memory correctly and safely.",
    "tags": [
      "Memset in C",
      "Memory Initialization C",
      "Arrays in C",
      "Solved C Exercise",
      "Basic C"
    ],
    "title": "memset in C: solved exercise to initialize arrays and buffers",
    "uri": "/en/ejercicios/arrays-cadenas/memset-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Fundamentals",
    "content": "If else in C: solved exercises If you are searching for conditional exercises in C, this guide covers practical cases with if, if else, if else if, and nested conditions.\nThe goal is to write clear decisions and avoid unnecessary branches.\nProblem statement Solve these 4 mini exercises:\nclassify a number as positive, negative, or zero, map a numeric score to a grade range, determine whether a year is leap year, validate access using two logical conditions. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 #include \u003cstdio.h\u003e void classify_number(int n) { if (n \u003e 0) { printf(\"%d is positive\\n\", n); } else if (n \u003c 0) { printf(\"%d is negative\\n\", n); } else { printf(\"%d is zero\\n\", n); } } const char *grade_label(int score) { if (score \u003e= 90) return \"Excellent\"; else if (score \u003e= 70) return \"Good\"; else if (score \u003e= 50) return \"Pass\"; else return \"Fail\"; } int is_leap_year(int year) { if (year % 400 == 0) return 1; if (year % 100 == 0) return 0; if (year % 4 == 0) return 1; return 0; } int access_allowed(int age, int has_permission) { if (age \u003e= 18 || (age \u003e= 16 \u0026\u0026 has_permission)) { return 1; } return 0; } int main(void) { classify_number(-8); printf(\"Score 76 =\u003e %s\\n\", grade_label(76)); printf(\"Year 2024 leap: %s\\n\", is_leap_year(2024) ? \"yes\" : \"no\"); printf(\"Access (17, permission=1): %s\\n\", access_allowed(17, 1) ? \"allowed\" : \"denied\"); return 0; } Expected output 1 2 3 4 -8 is negative Score 76 =\u003e Good Year 2024 leap: yes Access (17, permission=1): allowed Common mistakes Using separate if blocks when you need else if. Writing long logical conditions without parentheses. Missing edge cases (for example exact boundaries like 50 or 70). Over-nesting instead of simplifying conditions. Practical use Conditionals are core in:\ninput validation, business rules, access control, result classification by ranges. Strong if else fundamentals improve all control-flow problem solving in C.\nRecommended next exercise While and do while in C: solved exercises For loop in C: solved exercises with accumulators and counters Sequential programming in C: solved exercises from scratch All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ When should I use if else if instead of multiple if blocks? Use if else if when conditions are mutually exclusive. Use separate if blocks when multiple conditions can be true at the same time.\nWhat if the condition becomes too long? Split it into well-named intermediate boolean variables. This improves readability and lowers bug risk.\nAre nested conditionals bad in C? Not by default, but deep nesting usually signals that you should simplify rules or extract helper functions.",
    "description": "Solved if else exercises in C covering simple conditions, nested branches, and logical operators.",
    "tags": [
      "If Else in C Exercises",
      "Conditionals in C",
      "Nested if in C",
      "Logical Operators in C",
      "Basic C Exercises"
    ],
    "title": "If else in C: solved exercises with nested conditions",
    "uri": "/en/ejercicios/fundamentos/if-else-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Pointers \u0026 memory",
    "uri": "/en/ejercicios/punteros-memoria/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Resources \u0026 guides",
    "content": "Is learning C worth it in 2026? If you are asking is learning C worth it in 2026, the short answer is yes for technical paths that involve performance, systems, or hardware.\nC is not mandatory for everyone, but it still builds strong engineering judgment.\nWhere C still gives you an edge Embedded and firmware work (microcontrollers, automotive, IoT). Systems software and low-level tooling. Performance-critical libraries. Security work where memory behavior matters. Technical interviews with pointers, memory, and data structures. When C is not your first choice You only need fast high-level web/product prototyping. You will never work near low-level constraints. Your immediate target is scripting-heavy automation. Practical ROI of learning C Goal What C gives you Better interview performance Strong pointer, memory, and complexity fundamentals Embedded career path Direct foundation for firmware roles Deeper software understanding Better model of memory, CPU, and performance Better decisions in other languages Stronger engineering choices in Rust, Go, C++, Python, or Java 30-day practical plan Days 1-7: core syntax and functions. Days 8-14: pointers, arrays, and strings. Days 15-21: dynamic memory and common pitfalls. Days 22-30: core data structures and interview-style exercises. Guided practice and full book If you want measurable progress, combine free drills with a structured 100-exercise path:\nProgramming in C in 100 Solved Exercises Free C exercises on this site View on Amazon (included in Kindle Unlimited) FAQ Does C still have career value in 2026? Yes, especially in systems, firmware, performance tooling, and parts of security.\nCan I learn C without university background? Yes. With daily exercises and consistency, it is realistic.\nShould I start with C or Python? It depends on your goal. For fast short-term output, Python is often easier. For deeper systems fundamentals, C has higher long-term payoff.",
    "description": "Useful guide to decide whether learning C in 2026 is worth it based on real career paths, technical ROI, and a practical study plan.",
    "tags": [
      "Is Learning C Worth It",
      "Learn C in 2026",
      "Is C Still Relevant",
      "Systems Programming",
      "C Programming"
    ],
    "title": "Is learning C worth it in 2026? Practical decision guide",
    "uri": "/en/ejercicios/recursos/merece-la-pena-aprender-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Data structures",
    "content": "Circular linked list in C: solved exercise If you need a circular linked list in C solved exercise, this example covers insertion, traversal, and cleanup without infinite loops.\nProblem statement Implement a circular singly linked list with:\ntail insertion, full traversal, memory deallocation. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 #include \u003cstdio.h\u003e #include \u003cstdlib.h\u003e typedef struct Node { int value; struct Node *next; } Node; void insert_end(Node **head, int x) { Node *n = malloc(sizeof(Node)); if (!n) return; n-\u003evalue = x; if (*head == NULL) { n-\u003enext = n; *head = n; return; } Node *cur = *head; while (cur-\u003enext != *head) cur = cur-\u003enext; cur-\u003enext = n; n-\u003enext = *head; } void print_list(Node *head) { if (!head) return; Node *cur = head; do { printf(\"%d \", cur-\u003evalue); cur = cur-\u003enext; } while (cur != head); printf(\"\\n\"); } void free_list(Node **head) { if (!*head) return; Node *cur = (*head)-\u003enext; while (cur != *head) { Node *tmp = cur; cur = cur-\u003enext; free(tmp); } free(*head); *head = NULL; } int main(void) { Node *head = NULL; insert_end(\u0026head, 5); insert_end(\u0026head, 10); insert_end(\u0026head, 15); print_list(head); free_list(\u0026head); return 0; } Expected output 1 5 10 15 Common mistakes Using while (cur != NULL) instead of do-while. Forgetting to close the cycle back to head. Freeing nodes without respecting circular traversal. Practical use Circular lists are useful for round-robin scheduling and rotating buffer workflows.\nRecommended next exercise Binary tree in C: solved insertion and search exercise Doubly linked list in C: solved exercise with insert and traversal fread and fwrite in C: solved binary file exercise All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ What is the difference between singly and circular linked lists? In a circular list, the last node points back to the first. In a standard singly list, it points to NULL.\nWhere are circular lists useful in real projects? They are useful for turn rotation, repeated task scheduling, and cyclic processing structures.\nHow do I avoid infinite loops while traversing? Keep a start pointer and stop when traversal reaches that pointer again.",
    "description": "Solved circular linked list exercise in C with tail insertion, safe traversal, and memory cleanup.",
    "tags": [
      "Circular Linked List in C",
      "Linked List C Solved Exercise",
      "C Data Structures",
      "Advanced C Exercises"
    ],
    "title": "Circular linked list in C: solved insert and traversal exercise",
    "uri": "/en/ejercicios/estructuras-datos/lista-circular-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Pointers \u0026 memory",
    "content": "Malloc and free in C: solved exercise If you searched for malloc and free in C solved exercises, this example covers allocation, resize, and cleanup safely.\nProblem statement Allocate an integer array dynamically, fill it, resize with realloc, print values, and free memory.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 #include \u003cstdio.h\u003e #include \u003cstdlib.h\u003e int main(void) { int n = 3; int *a = malloc(n * sizeof(int)); if (a == NULL) { fprintf(stderr, \"Allocation error\\n\"); return 1; } for (int i = 0; i \u003c n; i++) a[i] = (i + 1) * 10; int new_n = 5; int *tmp = realloc(a, new_n * sizeof(int)); if (tmp == NULL) { free(a); fprintf(stderr, \"Resize error\\n\"); return 1; } a = tmp; for (int i = n; i \u003c new_n; i++) a[i] = (i + 1) * 10; for (int i = 0; i \u003c new_n; i++) printf(\"%d \", a[i]); printf(\"\\n\"); free(a); return 0; } Expected output 1 10 20 30 40 50 Common mistakes Not checking malloc/realloc return value. Overwriting original pointer directly on realloc. Double-free or missing final free. Practical use Dynamic memory is essential in stream processing, variable-size buffers, and adaptive data structures.\nRecommended next exercise Pointer to pointer in C: solved exercise with reference update Pointers in C: solved pass-by-reference exercises Binary tree in C: solved insertion and search exercise All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved dynamic memory exercise in C with malloc checks, realloc resizing, and safe free cleanup.",
    "tags": [
      "Malloc and Free in C",
      "Dynamic Memory in C",
      "Malloc Free C Solved Exercise",
      "Pointers in C",
      "Intermediate C"
    ],
    "title": "Malloc and free in C: solved dynamic memory exercise",
    "uri": "/en/ejercicios/punteros-memoria/malloc-free-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Algorithms",
    "content": "Bubble sort in C: solved exercise If you searched for bubble sort in C solved exercise, this page explains the algorithm and its common optimization.\nProblem statement Sort an integer array ascending using bubble sort and stop early when no swaps happen.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 #include \u003cstdio.h\u003e void bubble_sort(int a[], int n) { for (int i = 0; i \u003c n - 1; i++) { int swapped = 0; for (int j = 0; j \u003c n - 1 - i; j++) { if (a[j] \u003e a[j + 1]) { int tmp = a[j]; a[j] = a[j + 1]; a[j + 1] = tmp; swapped = 1; } } if (!swapped) break; } } int main(void) { int a[] = {9, 3, 7, 1, 4}; int n = sizeof(a) / sizeof(a[0]); bubble_sort(a, n); for (int i = 0; i \u003c n; i++) printf(\"%d \", a[i]); printf(\"\\n\"); return 0; } Expected output 1 1 3 4 7 9 Complexity Worst case: O(n^2) Best case (optimized): O(n) Common mistakes Not shrinking inner range with - i. Forgetting to reset swap flag. Confusing stability with speed. Practical use Not the fastest algorithm, but great for teaching, sanity checks, and tiny datasets.\nRecommended next exercise Binary search in C: solved exercise on sorted arrays Merge sort in C: solved exercise with divide and conquer Strings in C: solved exercises with strlen, strcpy, and strcmp All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved bubble sort exercise in C with comparisons, swaps, and early-exit optimization.",
    "tags": [
      "Bubble Sort in C",
      "Sorting in C Solved Exercise",
      "Sorting Algorithms",
      "Basic C"
    ],
    "title": "Bubble sort in C: solved exercise step by step",
    "uri": "/en/ejercicios/algoritmos/ordenacion-burbuja-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Resources \u0026 guides",
    "content": "C vs Rust vs C++ vs C#: quick answer If you are researching C vs Rust, C vs C++, or C vs C#, the right choice depends on the product constraints and your delivery timeline.\nComparison by key criteria Language Performance Memory safety Learning curve Typical use cases C Very high Low (manual) Medium Embedded, systems, core libraries Rust Very high High (by design) High Modern systems and safer tooling C++ Very high Medium-low (discipline dependent) High Engines, trading, high-performance software C# High High (managed runtime) Medium Enterprise backend, desktop apps, Unity Recommendation by real goal Deep memory fundamentals: start with C. Safety + performance: Rust is often the best fit. Legacy/performance-heavy ecosystem: C++. Fast product development in managed stack: C#. Practical path if you choose C first Master pointers, dynamic memory, and core data structures. Solve list, stack, queue, and file exercises. Move to Rust or C++ with stronger fundamentals. Recommended next resource Pointers in C: solved pass-by-reference exercises Malloc and free in C: solved dynamic memory exercise Doubly linked list in C: solved exercise All C exercises Guided practice and full book If you want a structured C path you can use as a technical base:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) Flutter exercises to expand your stack FAQ Will Rust fully replace C soon? Not in the short term. Rust is growing fast, but C remains foundational in many systems and embedded domains.\nIs C++ better than C for beginners? It depends on your objective. If memory fundamentals are your focus, C is often cleaner to start with.\nDoes C# compete directly with C? Not in every context. C# optimizes productivity in managed environments, while C focuses on low-level control.",
    "description": "Clear comparison of C, Rust, C++, and C# by performance, memory safety, learning curve, and real-world project fit.",
    "tags": [
      "C vs Rust",
      "C vs C++",
      "C vs C#",
      "Language Comparison",
      "Systems Programming"
    ],
    "title": "C vs Rust vs C++ vs C#: practical comparison to choose in 2026",
    "uri": "/en/ejercicios/recursos/c-vs-rust-vs-cpp-vs-csharp-comparativa-practica/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Structs \u0026 files",
    "uri": "/en/ejercicios/struct-ficheros/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Pointers \u0026 memory",
    "content": "malloc and realloc in C: solved exercise If you searched for malloc and realloc in C solved exercise, this is a practical dynamic array pattern with capacity growth.\nProblem statement Implement a dynamic integer array in C that:\nstarts with capacity 4, inserts 8 values, doubles capacity using realloc when full. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 #include \u003cstdio.h\u003e #include \u003cstdlib.h\u003e int main(void) { size_t cap = 4; size_t n = 0; int *v = malloc(cap * sizeof(int)); if (!v) return 1; for (int x = 10; x \u003c= 80; x += 10) { if (n == cap) { cap *= 2; int *tmp = realloc(v, cap * sizeof(int)); if (!tmp) { free(v); return 1; } v = tmp; } v[n++] = x; } printf(\"Size: %zu | Capacity: %zu\\n\", n, cap); for (size_t i = 0; i \u003c n; i++) printf(\"%d \", v[i]); printf(\"\\n\"); free(v); return 0; } Expected output 1 2 Size: 8 | Capacity: 8 10 20 30 40 50 60 70 80 Common mistakes Overwriting the original pointer with realloc without a temporary pointer. Skipping NULL checks on malloc and realloc. Forgetting final free. Practical use This pattern appears in dynamic lists, buffers, and runtime-sized data structures.\nRecommended next exercise malloc and free in C: solved exercises Pointers in C: solved exercises Struct in C: solved exercise Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ When should I use realloc in C? When you need to resize already allocated memory without manual block-by-block copying.\nIs v = realloc(v, ...) safe? It is risky. Use a temporary pointer to avoid losing the original allocation on failure.\nWhat growth strategy is practical? Doubling capacity is a common and efficient approach for repeated append operations.",
    "description": "Solved malloc and realloc exercise in C to build a growing dynamic integer array.",
    "tags": [
      "Malloc in C",
      "Realloc in C",
      "Dynamic Memory C",
      "Solved C Exercise",
      "Intermediate C"
    ],
    "title": "malloc and realloc in C: solved dynamic array exercise",
    "uri": "/en/ejercicios/punteros-memoria/malloc-realloc-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Fundamentals",
    "content": "For loop in C: solved exercises step by step If you searched for for loop in C solved exercises, this post gives practical patterns that appear in beginner classes and early interview screens.\nThe main goal is to master three key loop patterns: accumulation, counting, and array traversal.\nProblem statement Solve these 4 mini exercises with for:\ncompute the sum 1..n, count how many even numbers are in an array, find the maximum value in an array, compute the average of an array. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 #include \u003cstdio.h\u003e int sum_1_n(int n) { int sum = 0; for (int i = 1; i \u003c= n; i++) { sum += i; } return sum; } int count_even(const int a[], int n) { int count = 0; for (int i = 0; i \u003c n; i++) { if (a[i] % 2 == 0) { count++; } } return count; } int max_array(const int a[], int n) { int max_value = a[0]; for (int i = 1; i \u003c n; i++) { if (a[i] \u003e max_value) { max_value = a[i]; } } return max_value; } double avg_array(const int a[], int n) { int sum = 0; for (int i = 0; i \u003c n; i++) { sum += a[i]; } return (double)sum / n; } int main(void) { int n = 10; int data[] = {7, 2, 9, 4, 6, 3}; int len = (int)(sizeof(data) / sizeof(data[0])); printf(\"sum_1_n(%d) = %d\\n\", n, sum_1_n(n)); printf(\"even_in_array = %d\\n\", count_even(data, len)); printf(\"max_array = %d\\n\", max_array(data, len)); printf(\"avg_array = %.2f\\n\", avg_array(data, len)); return 0; } Expected output 1 2 3 4 sum_1_n(10) = 55 even_in_array = 3 max_array = 9 avg_array = 5.17 Common mistakes Wrong loop range (i \u003c= n versus i \u003c n). Not initializing accumulators or counters to zero. Using integer division while computing averages. Going out of bounds in arrays. Practical use These for patterns appear in almost every early C exercise:\nlist processing, basic statistics, filtering by conditions. Once these patterns are stable, arrays, sorting, and matrix exercises become easier.\nRecommended next exercise While and do while in C: solved exercises Arrays and vectors in C: solved exercises Insertion sort in C: solved exercise All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is for better than while for beginners? Neither is universally better, but for is usually clearer when the number of iterations is known.\nWhat is the difference between an accumulator and a counter? An accumulator combines values (for example sum += a[i]). A counter tracks occurrences (count++).\nHow can I improve loop skills faster? Start with single-variable loops, then move to arrays, and finally combine multiple conditions inside one loop.",
    "description": "Solved for-loop exercises in C covering accumulators, counters, maximum value, and average calculation.",
    "tags": [
      "For Loop in C Exercises",
      "For in C Solved Exercises",
      "Accumulator in C",
      "Counter in C",
      "Basic C Exercises"
    ],
    "title": "For loop in C: solved exercises with accumulators and counters",
    "uri": "/en/ejercicios/fundamentos/for-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Algorithms",
    "content": "Insertion sort method in C If you are searching for an insertion sort in C solved exercise, this post gives you both the implementation and the reasoning.\nThe idea is similar to sorting cards in your hand: take the next value and insert it into the correct position within the already sorted part.\nProblem statement Implement insertion sort to sort an integer array in ascending order.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 #include \u003cstdio.h\u003e void insertion_sort(int a[], int n) { for (int i = 1; i \u003c n; i++) { int key = a[i]; int j = i - 1; while (j \u003e= 0 \u0026\u0026 a[j] \u003e key) { a[j + 1] = a[j]; j--; } a[j + 1] = key; } } int main(void) { int a[] = {12, 11, 13, 5, 6}; int n = (int)(sizeof(a) / sizeof(a[0])); insertion_sort(a, n); for (int i = 0; i \u003c n; i++) { printf(\"%d \", a[i]); } printf(\"\\n\"); return 0; } Expected output 1 5 6 11 12 13 Common mistakes Forgetting to store the current value in key before shifting. Writing the final position incorrectly (a[j + 1] = key). Using j \u003e 0 instead of j \u003e= 0. Ignoring that runtime cost mainly comes from shifts. Practical use Insertion sort is useful when:\narrays are small, input is nearly sorted, you want a clear baseline before shell sort or merge sort. It is also common in beginner assignments and junior interview screens.\nRecommended next exercise Shell sort in C: solved exercise step by step Binary insertion sort in C: solved exercise Bubble sort in C: solved exercise All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is insertion sort in C good for beginners? Yes. It is one of the best first algorithms to learn loops, comparisons, and shifts.\nWhat is insertion sort complexity? Worst and average case: O(n²). Best case (nearly sorted input): O(n).\nHow should I practice insertion sort effectively? Trace small arrays manually and count shifts per iteration. That makes performance behavior very clear.",
    "description": "Solved insertion sort exercise in C with step-by-step logic, complexity analysis, and common mistakes.",
    "tags": [
      "Insertion Sort in C",
      "Insercion Directa en C",
      "C Solved Exercise",
      "Sorting Algorithms in C",
      "Basic C Exercises"
    ],
    "title": "Insertion sort in C: solved exercise",
    "uri": "/en/ejercicios/algoritmos/insercion-directa-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Arrays \u0026 strings",
    "content": "Strings in C: solved exercise If you searched for strings in C solved exercises, this example covers core string.h operations.\nProblem statement Compare two strings, copy one of them, and print its length.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 #include \u003cstdio.h\u003e #include \u003cstring.h\u003e int main(void) { char a[32] = \"hello\"; char b[32] = \"hello\"; char copy[32]; int cmp = strcmp(a, b); strcpy(copy, a); printf(\"cmp=%d\\n\", cmp); printf(\"copy=%s\\n\", copy); printf(\"len=%zu\\n\", strlen(copy)); return 0; } Expected output 1 2 3 cmp=0 copy=hello len=5 Recommended edge case Test strings near buffer limits to validate null termination:\n1 a = \"1234567890123456789012345678901\" // 31 chars If you forget room for \\0, you get overflow risk.\nCommon mistakes Not allocating room for \\0. Using strcpy without size checks. Comparing strings with == instead of strcmp. Forgetting to trim trailing \\n from fgets input before comparisons. Time and space complexity strlen, strcpy, strcmp: O(n) with respect to string length. Extra space: O(1) (excluding input/output buffers). Practical use String handling is essential for parsing logs, commands, and text-based inputs.\nRecommended next exercise Matrices in C: solved main and secondary diagonal exercise Files in C: solved exercise to count lines and characters Bubble sort in C: solved exercise step by step All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved strings exercise in C using strlen, strcpy, and strcmp for comparison, copy, and validation.",
    "tags": [
      "Strings in C",
      "C Strings Solved Exercises",
      "Strlen Strcpy Strcmp",
      "String Handling C",
      "Basic C"
    ],
    "title": "Strings in C: solved exercises with strlen, strcpy, and strcmp",
    "uri": "/en/ejercicios/arrays-cadenas/cadenas-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Data structures",
    "content": "Stack in C: solved exercise If you searched for stack in C solved exercise, this implementation covers core operations with safety checks.\nProblem statement Implement an integer stack with:\npush, pop, peek, state-check helpers. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 #include \u003cstdio.h\u003e #define CAP 5 typedef struct { int data[CAP]; int top; } Stack; void init(Stack *s) { s-\u003etop = -1; } int is_empty(Stack *s) { return s-\u003etop \u003c 0; } int is_full(Stack *s) { return s-\u003etop == CAP - 1; } int push(Stack *s, int x) { if (is_full(s)) return 0; s-\u003edata[++s-\u003etop] = x; return 1; } int pop(Stack *s, int *out) { if (is_empty(s)) return 0; *out = s-\u003edata[s-\u003etop--]; return 1; } int peek(Stack *s, int *out) { if (is_empty(s)) return 0; *out = s-\u003edata[s-\u003etop]; return 1; } int main(void) { Stack s; int v; init(\u0026s); push(\u0026s, 10); push(\u0026s, 20); push(\u0026s, 30); peek(\u0026s, \u0026v); printf(\"Top: %d\\n\", v); pop(\u0026s, \u0026v); printf(\"Pop: %d\\n\", v); peek(\u0026s, \u0026v); printf(\"Top: %d\\n\", v); return 0; } Expected output 1 2 3 Top: 30 Pop: 30 Top: 20 Recommended edge case Test these two scenarios in one run:\ncall pop on an empty stack (underflow), call push when top == CAP - 1 (overflow). This confirms error paths return 0 without corrupting stack state.\nCommon mistakes Not checking overflow on push. Not checking underflow on pop. Forgetting to initialize top to -1. Updating top in the wrong order and reading out of bounds. Time and space complexity push, pop, and peek: O(1). Total space: O(n) for the fixed-capacity CAP array. Practical use Stacks appear in parsing, undo/redo systems, and expression evaluation.\nRecommended next exercise Queue in C: solved exercise with circular array Singly linked list in C: solved exercise with insert and delete Binary search in C: solved exercise on sorted arrays All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved stack exercise in C with push, pop, and peek on a fixed array, including overflow/underflow checks.",
    "tags": [
      "Stack in C",
      "Stack in C Solved Exercise",
      "C Data Structures",
      "Intermediate C"
    ],
    "title": "Stack in C: solved exercise with push, pop, and peek",
    "uri": "/en/ejercicios/estructuras-datos/pila-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Structs \u0026 files",
    "content": "Files in C: solved exercise If you are searching for files in C solved exercises, this example covers a very common real-world task: open a text file, scan characters, and compute basic metrics.\nProblem statement Open a text file in read mode and count:\nnumber of lines, total number of characters. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 #include \u003cstdio.h\u003e int main(void) { FILE *f = fopen(\"data.txt\", \"r\"); if (f == NULL) { perror(\"Could not open data.txt\"); return 1; } int c; int lines = 0; int chars = 0; while ((c = fgetc(f)) != EOF) { chars++; if (c == '\\n') { lines++; } } fclose(f); printf(\"Lines: %d\\n\", lines); printf(\"Chars: %d\\n\", chars); return 0; } Expected output 1 2 Lines: 3 Chars: 74 Exact values depend on the contents of data.txt.\nRecommended edge case Test a file without a trailing newline.\nExample content:\n1 2 3 one two three If the file does not end with \\n, line counting can be off by one unless your logic handles it.\nCommon mistakes Not checking whether fopen returned NULL. Forgetting to call fclose. Treating EOF as a real file character. Assuming every line ends with \\n and miscounting the final line. Time and space complexity Time: O(n), scanning each character once. Extra space: O(1). Practical use This pattern is used in log processing, tracing pipelines, and event-file analysis in modern observability workflows.\nRecommended next exercise Strings in C: solved exercises with strlen, strcpy, and strcmp fread and fwrite in C: solved binary file exercise Binary search in C: solved exercise on sorted arrays All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this good to learn file I/O in C? Yes. It is a direct base before writing files (fprintf) and binary I/O (fread/fwrite).\nWhere can I continue with guided practice? At Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved files-in-C exercise using fopen and fgetc to count lines and characters with proper error handling.",
    "tags": [
      "Files in C",
      "Files in C Solved Exercises",
      "Fopen in C",
      "Fgetc in C",
      "Text File C",
      "Intermediate C"
    ],
    "title": "Files in C: solved exercise to count lines and characters",
    "uri": "/en/ejercicios/struct-ficheros/ficheros-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Fundamentals",
    "content": "While and do while in C: solved exercises step by step If you are looking for while and do while exercises in C, this post gives solved examples with practical loop scenarios.\nCore difference:\nwhile checks the condition before running, do while runs at least once and then checks the condition. Problem statement Solve these 4 mini exercises:\nread a positive number using do while, count digits of a number using while, sum values until 0 is entered using while, build a simple menu loop using do while. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 #include \u003cstdio.h\u003e int read_positive(void) { int n; do { printf(\"Enter a positive number: \"); scanf(\"%d\", \u0026n); } while (n \u003c= 0); return n; } int count_digits(int n) { int count = 0; if (n == 0) return 1; if (n \u003c 0) n = -n; while (n \u003e 0) { n /= 10; count++; } return count; } int sum_until_zero(void) { int sum = 0; int value; printf(\"Enter values (0 to stop):\\n\"); while (1) { scanf(\"%d\", \u0026value); if (value == 0) break; sum += value; } return sum; } void simple_menu(void) { int option; do { printf(\"\\nMenu:\\n\"); printf(\"1) Say hello\\n\"); printf(\"2) Show info\\n\"); printf(\"0) Exit\\n\"); printf(\"Option: \"); scanf(\"%d\", \u0026option); if (option == 1) { printf(\"Hello, still practicing C.\\n\"); } else if (option == 2) { printf(\"Do while guarantees at least one execution.\\n\"); } } while (option != 0); } int main(void) { int positive = read_positive(); printf(\"Valid number: %d\\n\", positive); printf(\"Digits of %d: %d\\n\", positive, count_digits(positive)); int sum = sum_until_zero(); printf(\"Total sum: %d\\n\", sum); simple_menu(); return 0; } Expected output 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 Enter a positive number: -3 Enter a positive number: 145 Valid number: 145 Digits of 145: 3 Enter values (0 to stop): 5 10 -2 0 Total sum: 13 Menu: 1) Say hello 2) Show info 0) Exit ... Common mistakes Using while when you need the block to run at least once. Forgetting to update the loop control variable. Skipping input validation in console loops. Using break in the wrong place and breaking expected flow. Practical use while and do while are common in:\nconsole input validation, interactive menus, repeated reads until a sentinel value appears. These structures are foundational in user-driven C programs.\nRecommended next exercise For loop in C: solved exercises with accumulators and counters If else in C: solved exercises with nested conditions Arrays and vectors in C: solved exercises All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ When should I use while vs do while in C? Use while when the condition may fail immediately. Use do while when you must execute at least once.\nHow do I avoid infinite loops? Update control variables every iteration and make sure the exit condition is reachable.\nIs menu practice with do while useful? Yes. It combines control flow, user input, and validation, which are core C skills.",
    "description": "Solved while and do while exercises in C with input validation, digit counting, and condition-driven loops.",
    "tags": [
      "While in C Exercises",
      "Do While in C Exercises",
      "Loops in C",
      "Input Validation in C",
      "Basic C Exercises"
    ],
    "title": "While and do while in C: solved exercises",
    "uri": "/en/ejercicios/fundamentos/while-do-while-en-c-ejercicios-resueltos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Algorithms",
    "content": "Binary insertion method in C If you are looking for a binary insertion sort in C solved exercise, this post gives you the full implementation and the key reasoning.\nBinary insertion sort is a variation of insertion sort. It uses binary search to find the insertion position, but still shifts elements linearly.\nProblem statement Implement binary insertion sort to sort an integer array in ascending order.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 #include \u003cstdio.h\u003e int insertion_position(const int a[], int left, int right, int key) { while (left \u003c= right) { int mid = left + (right - left) / 2; if (a[mid] \u003c= key) { left = mid + 1; } else { right = mid - 1; } } return left; } void binary_insertion_sort(int a[], int n) { for (int i = 1; i \u003c n; i++) { int key = a[i]; int pos = insertion_position(a, 0, i - 1, key); for (int j = i - 1; j \u003e= pos; j--) { a[j + 1] = a[j]; } a[pos] = key; } } int main(void) { int a[] = {37, 23, 0, 17, 12, 72, 31, 46, 100, 88, 54, 54}; int n = (int)(sizeof(a) / sizeof(a[0])); binary_insertion_sort(a, n); for (int i = 0; i \u003c n; i++) { printf(\"%d \", a[i]); } printf(\"\\n\"); return 0; } Expected output 1 0 12 17 23 31 37 46 54 54 72 88 100 Common mistakes Searching in the wrong range (0..i instead of 0..i-1). Forgetting to shift elements before placing key. Using an incorrect repeated-value condition and losing stability. Assuming it becomes O(n log n): shifts are still linear. Practical use This exercise helps you:\nseparate comparison cost from movement cost, practice binary search on a sorted prefix, prepare interview questions that ask for insertion-sort optimizations. Recommended next exercise Insertion sort in C: solved exercise Shell sort in C: solved exercise step by step Merge sort in C: solved exercise All C exercises Guided practice and next step If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is binary insertion sort faster than insertion sort in C? It reduces comparisons with binary search, but still shifts elements, so worst-case time does not become linearithmic.\nWhat is its time complexity? Average and worst-case time remain O(n²) due to shifts. Position search is O(log n), but does not dominate total runtime.\nWhen is it worth practicing? When you want to improve insertion-sort intuition and combine searching and sorting in one focused exercise.",
    "description": "Solved binary insertion sort exercise in C using binary search for insertion position and linear shifts.",
    "tags": [
      "Binary Insertion Sort in C",
      "Insertion Sort in C",
      "C Solved Exercise",
      "Sorting Algorithms in C",
      "Intermediate C Exercises"
    ],
    "title": "Binary insertion sort in C: solved sorting exercise",
    "uri": "/en/ejercicios/algoritmos/insercion-binaria-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Data structures",
    "uri": "/en/ejercicios/estructuras-datos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Structs \u0026 files",
    "content": "fread and fwrite in C: solved exercise If you searched for fread and fwrite in C solved exercise, this page shows the full binary write/read workflow.\nProblem statement Write an integer array to a binary file and read it back into another array.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 #include \u003cstdio.h\u003e int main(void) { int data[] = {4, 8, 15, 16, 23, 42}; int copy[6] = {0}; FILE *f = fopen(\"data.bin\", \"wb\"); if (!f) return 1; fwrite(data, sizeof(int), 6, f); fclose(f); f = fopen(\"data.bin\", \"rb\"); if (!f) return 1; fread(copy, sizeof(int), 6, f); fclose(f); for (int i = 0; i \u003c 6; i++) printf(\"%d \", copy[i]); printf(\"\\n\"); return 0; } Expected output 1 4 8 15 16 23 42 Common mistakes Opening in text mode (w/r) instead of binary (wb/rb). Not checking actual items read/written. Ignoring type-size portability across systems. Practical use Binary formats are common for compact datasets, telemetry streams, and state snapshots.\nRecommended next exercise Files in C: solved exercise to count lines and characters Strings in C: solved exercises with strlen, strcpy, and strcmp Binary tree in C: solved insertion and search exercise All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved binary file exercise in C using fwrite and fread to persist and restore integer arrays.",
    "tags": [
      "Fread and Fwrite in C",
      "Binary Files in C",
      "Fread Fwrite Solved Exercise",
      "File I/O in C",
      "Intermediate C"
    ],
    "title": "fread and fwrite in C: solved binary file exercise",
    "uri": "/en/ejercicios/struct-ficheros/fread-fwrite-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Data structures",
    "content": "Queue in C: solved exercise If you searched for queue in C solved exercise, this page shows a FIFO queue implementation with a circular buffer.\nProblem statement Implement a queue with:\nenqueue, dequeue, full/empty checks. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 #include \u003cstdio.h\u003e #define CAP 5 typedef struct { int data[CAP]; int front, rear, size; } Queue; void init(Queue *q) { q-\u003efront = 0; q-\u003erear = -1; q-\u003esize = 0; } int is_empty(Queue *q) { return q-\u003esize == 0; } int is_full(Queue *q) { return q-\u003esize == CAP; } int enqueue(Queue *q, int x) { if (is_full(q)) return 0; q-\u003erear = (q-\u003erear + 1) % CAP; q-\u003edata[q-\u003erear] = x; q-\u003esize++; return 1; } int dequeue(Queue *q, int *out) { if (is_empty(q)) return 0; *out = q-\u003edata[q-\u003efront]; q-\u003efront = (q-\u003efront + 1) % CAP; q-\u003esize--; return 1; } int main(void) { Queue q; int v; init(\u0026q); enqueue(\u0026q, 7); enqueue(\u0026q, 8); enqueue(\u0026q, 9); dequeue(\u0026q, \u0026v); printf(\"Out: %d\\n\", v); dequeue(\u0026q, \u0026v); printf(\"Out: %d\\n\", v); return 0; } Expected output 1 2 Out: 7 Out: 8 Common mistakes Forgetting modulo % CAP wraparound. Using only front == rear without tracking size. Missing underflow check on dequeue. Practical use FIFO queues are core in message systems, pipelines, and async job processing.\nRecommended next exercise Singly linked list in C: solved exercise with insert and delete Stack in C: solved exercise with push, pop, and peek Binary search in C: solved exercise on sorted arrays All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved queue exercise in C using a circular array with O(1) enqueue and dequeue operations.",
    "tags": [
      "Queue in C",
      "Queue in C Solved Exercise",
      "Circular Array",
      "C Data Structures"
    ],
    "title": "Queue in C: solved exercise with circular array",
    "uri": "/en/ejercicios/estructuras-datos/cola-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Algorithms",
    "uri": "/en/ejercicios/algoritmos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Algorithms",
    "content": "Shell sort method in C If you are looking for a shell sort in C solved exercise, this post explains the full logic, not just the final code.\nShell sort improves insertion sort by using gaps. Instead of comparing only adjacent values, it compares values that are farther apart and progressively reduces the gap until it reaches 1. It is an in-place algorithm and often performs better than bubble sort or insertion sort on medium-sized arrays.\nProblem statement Implement shell sort to sort an integer array in ascending order.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 #include \u003cstdio.h\u003e void shell_sort(int a[], int n) { for (int gap = n / 2; gap \u003e 0; gap /= 2) { for (int i = gap; i \u003c n; i++) { int tmp = a[i]; int j = i; while (j \u003e= gap \u0026\u0026 a[j - gap] \u003e tmp) { a[j] = a[j - gap]; j -= gap; } a[j] = tmp; } } } int main(void) { int a[] = {29, 10, 14, 37, 13, 5, 42, 8}; int n = (int)(sizeof(a) / sizeof(a[0])); shell_sort(a, n); for (int i = 0; i \u003c n; i++) { printf(\"%d \", a[i]); } printf(\"\\n\"); return 0; } Expected output 1 5 8 10 13 14 29 37 42 Common mistakes Reducing gap incorrectly and causing infinite loops. Forgetting the temporary value (tmp) before shifting values. Using a wrong while condition and overwriting data. Assuming fixed complexity: runtime depends on the chosen gap sequence. Practical use Shell sort is useful when:\nyou want a simple implementation, you need better average behavior than insertion sort with low memory overhead, you are practicing sorting techniques before moving to more advanced algorithms. Recommended next exercise Insertion sort in C: solved exercise Binary insertion sort in C: solved exercise Merge sort in C: solved exercise All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is shell sort better than insertion sort in C? In many practical scenarios, yes. Large initial gaps reduce disorder early and make the final pass cheaper.\nWhat is shell sort complexity? It depends on the gap sequence. With basic n/2 gaps, worst-case behavior can approach O(n²), but practical results are often better than insertion sort.\nHow should I practice shell sort effectively? Trace two passes manually (gap = n/2 and gap = n/4) and compare the number of shifts with insertion sort on the same input.",
    "description": "Solved shell sort exercise in C with gap sequence, complete implementation, and practical comparison with insertion sort.",
    "tags": [
      "Shell Sort in C",
      "Shell Sort C Solved Exercise",
      "Sorting Algorithms in C",
      "Insertion Sort in C",
      "Intermediate C Exercises"
    ],
    "title": "Shell sort in C: solved exercise step by step",
    "uri": "/en/ejercicios/algoritmos/shell-sort-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Data structures",
    "content": "Binary tree in C: solved exercise If you searched for binary tree in C solved exercise, this page gives you a basic BST with insert and search.\nProblem statement Implement a binary search tree with:\nvalue insertion, value lookup, output showing if value exists. C solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 #include \u003cstdio.h\u003e #include \u003cstdlib.h\u003e typedef struct Node { int v; struct Node *left, *right; } Node; Node *insert(Node *r, int v) { if (!r) { Node *n = malloc(sizeof(Node)); if (!n) return NULL; n-\u003ev = v; n-\u003eleft = n-\u003eright = NULL; return n; } if (v \u003c r-\u003ev) r-\u003eleft = insert(r-\u003eleft, v); else if (v \u003e r-\u003ev) r-\u003eright = insert(r-\u003eright, v); return r; } int search(Node *r, int v) { if (!r) return 0; if (r-\u003ev == v) return 1; if (v \u003c r-\u003ev) return search(r-\u003eleft, v); return search(r-\u003eright, v); } void free_tree(Node *r) { if (!r) return; free_tree(r-\u003eleft); free_tree(r-\u003eright); free(r); } int main(void) { Node *r = NULL; r = insert(r, 20); r = insert(r, 10); r = insert(r, 30); printf(\"Has 10: %d\\n\", search(r, 10)); printf(\"Has 40: %d\\n\", search(r, 40)); free_tree(r); return 0; } Expected output 1 2 Has 10: 1 Has 40: 0 Common mistakes Not defining duplicate-value behavior. Breaking BST ordering property. Skipping final memory cleanup. Practical use Trees are still used for in-memory indexes, hierarchy models, and search features.\nRecommended next exercise Circular linked list in C: solved insert and traversal exercise Doubly linked list in C: solved exercise with insert and traversal fread and fwrite in C: solved binary file exercise All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved binary search tree exercise in C with node insertion and recursive search.",
    "tags": [
      "Binary Tree in C",
      "Bst in C",
      "Binary Tree C Solved Exercise",
      "C Data Structures",
      "Intermediate C"
    ],
    "title": "Binary tree in C: solved insertion and search exercise",
    "uri": "/en/ejercicios/estructuras-datos/arbol-binario-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Resources \u0026 guides",
    "uri": "/en/ejercicios/recursos/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Algorithms",
    "content": "Merge sort method in C If you searched for a merge sort in C solved exercise, this version helps you understand the full idea, not only copy the code.\nMerge sort is a recursive algorithm based on divide and conquer. It splits the problem into halves, sorts each half, then merges them. Its time complexity is O(n log n) in best, average, and worst case. It is commonly attributed to John von Neumann (1945) and is still a core example for efficient sorting design.\nMerge sort strategy The strategy is:\nIf the array has 0 or 1 element, it is already sorted. If it has 2 or more elements, split it into two halves. Sort each half recursively. Merge the two sorted halves into one sorted array. This keeps performance stable even when input order changes.\nMerge sort pseudocode 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 function merge_sort(A, l, r, aux): if l \u003e= r: return m = l + (r - l) / 2 merge_sort(A, l, m, aux) merge_sort(A, m + 1, r, aux) merge(A, l, m, r, aux) function merge(A, l, m, r, aux): i = l j = m + 1 k = l while i \u003c= m and j \u003c= r: if A[i] \u003c= A[j]: aux[k] = A[i] i = i + 1 else: aux[k] = A[j] j = j + 1 k = k + 1 copy remaining left values copy remaining right values copy aux[l..r] back to A[l..r] Problem statement Implement merge sort to sort an integer array in ascending order.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 #include \u003cstdio.h\u003e #include \u003cstdlib.h\u003e static void merge(int a[], int aux[], int l, int m, int r) { int i = l; int j = m + 1; int k = l; while (i \u003c= m \u0026\u0026 j \u003c= r) { if (a[i] \u003c= a[j]) { aux[k++] = a[i++]; } else { aux[k++] = a[j++]; } } while (i \u003c= m) { aux[k++] = a[i++]; } while (j \u003c= r) { aux[k++] = a[j++]; } for (i = l; i \u003c= r; i++) { a[i] = aux[i]; } } static void merge_sort_rec(int a[], int aux[], int l, int r) { if (l \u003e= r) { return; } int m = l + (r - l) / 2; merge_sort_rec(a, aux, l, m); merge_sort_rec(a, aux, m + 1, r); merge(a, aux, l, m, r); } void merge_sort(int a[], int n) { if (n \u003c= 1) { return; } int *aux = malloc((size_t)n * sizeof(int)); if (!aux) { fprintf(stderr, \"Error: could not allocate auxiliary memory\\n\"); exit(EXIT_FAILURE); } merge_sort_rec(a, aux, 0, n - 1); free(aux); } int main(void) { int a[] = {38, 27, 43, 3, 9, 82, 10}; int n = sizeof(a) / sizeof(a[0]); merge_sort(a, n); for (int i = 0; i \u003c n; i++) printf(\"%d \", a[i]); printf(\"\\n\"); return 0; } Expected output 1 3 9 10 27 38 43 82 Quick code walkthrough merge_sort allocates one auxiliary array. merge_sort_rec splits the range until single-element subarrays. merge combines two already sorted halves in linear time. Merge sort complexity in C Time (best, average, worst): O(n log n) Extra memory: O(n) This is why merge sort is useful when you need predictable runtime and stable sorting behavior.\nCommon mistakes Wrong bounds for each half (l, m, r). Forgetting to copy merged values from aux back to a. Using m = (l + r) / 2 without considering overflow on large indexes. Missing the base case and causing infinite recursion. Practical use Merge sort is a good fit when:\nyou need stable sorting, you need consistent performance, you can spend extra memory for the auxiliary buffer. If memory is your top constraint, quicksort may be a better fit in some scenarios.\nRecommended next exercise Quicksort in C: solved exercise with Lomuto partition Binary search in C: solved exercise on sorted arrays Binary tree in C: solved insertion and search exercise All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is merge sort in C useful for technical interviews? Yes. It is common in interviews because it tests recursion, index handling, and complexity reasoning.\nDoes merge sort always run in O(n log n)? Yes, in asymptotic time. That is one of its main advantages.\nHow should I practice merge sort effectively? Start with small arrays, trace each merge step manually, then test duplicates, negatives, and reverse-sorted cases.",
    "description": "Merge sort method in C explained step by step with strategy, pseudocode, full solution, and O(n log n) complexity.",
    "tags": [
      "Merge Sort in C",
      "Merge Sort Method",
      "C Merge Sort Solved Exercise",
      "Sorting Algorithms in C",
      "Advanced C Exercises"
    ],
    "title": "Merge sort in C: solved exercise with divide and conquer",
    "uri": "/en/ejercicios/algoritmos/merge-sort-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Exercises \u003e Algorithms",
    "content": "Quicksort in C: solved exercise If you searched for quicksort in C solved exercise, this example implements the classic Lomuto partition version.\nProblem statement Sort an integer array using quicksort and print the final order.\nC solution 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 #include \u003cstdio.h\u003e int partition(int a[], int l, int r) { int piv = a[r]; int i = l - 1; for (int j = l; j \u003c r; j++) { if (a[j] \u003c= piv) { i++; int tmp = a[i]; a[i] = a[j]; a[j] = tmp; } } int tmp = a[i + 1]; a[i + 1] = a[r]; a[r] = tmp; return i + 1; } void quicksort(int a[], int l, int r) { if (l \u003c r) { int p = partition(a, l, r); quicksort(a, l, p - 1); quicksort(a, p + 1, r); } } int main(void) { int a[] = {10, 7, 8, 9, 1, 5}; int n = sizeof(a) / sizeof(a[0]); quicksort(a, 0, n - 1); for (int i = 0; i \u003c n; i++) printf(\"%d \", a[i]); printf(\"\\n\"); return 0; } Expected output 1 1 5 7 8 9 10 Complexity Average: O(n log n) Worst case: O(n^2) Common mistakes Wrong recursion bounds (p - 1, p + 1). Ignoring pivot behavior on nearly sorted input. Mixing Lomuto with Hoare partition logic. Practical use Quicksort ideas appear in ranking engines and preprocessing for fast lookup workflows.\nRecommended next exercise Merge sort in C: solved exercise with divide and conquer Binary search in C: solved exercise on sorted arrays Binary tree in C: solved insertion and search exercise All C exercises Guided practice and full book If you want a complete path with progressive difficulty:\nProgramming in C in 100 Solved Exercises View on Amazon (included in Kindle Unlimited) FAQ Is this exercise useful for C exams and technical interviews? Yes. It targets patterns that commonly appear in practice assignments, technical interviews, and C programming exams.\nWhere can I keep practicing with more solved C exercises? In Programming in C in 100 Solved Exercises and C Exercises. Kindle Unlimited: View on Amazon.\nHow should I practice this exercise type to improve faster? Start with small inputs, run edge cases (empty, one item, max capacity), then rewrite the solution from scratch without copying.",
    "description": "Solved quicksort exercise in C using Lomuto partition to sort arrays efficiently.",
    "tags": [
      "Quicksort in C",
      "Quick Sort in C",
      "Quicksort C Solved Exercise",
      "Algorithms in C",
      "Intermediate C"
    ],
    "title": "Quicksort in C: solved exercise with Lomuto partition",
    "uri": "/en/ejercicios/algoritmos/quicksort-en-c-ejercicio-resuelto/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Basic C Exercises",
    "uri": "/en/tags/basic-c-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Exercises for Beginners",
    "uri": "/en/tags/c-exercises-for-beginners/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Fundamentals",
    "uri": "/en/tags/c-fundamentals/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C vs C#",
    "uri": "/en/tags/c-vs-c%23/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C vs C++",
    "uri": "/en/tags/c-vs-c++/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C vs Rust",
    "uri": "/en/tags/c-vs-rust/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Input Process Output in C",
    "uri": "/en/tags/input-process-output-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Language Comparison",
    "uri": "/en/tags/language-comparison/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Practical resources to learn C programming.\nSolved exercises C100 Book",
    "description": "Solved C exercises step by step. From basics to advanced data structures.",
    "tags": [],
    "title": "Learn C — solved exercises",
    "uri": "/en/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Sequential Programming in C",
    "uri": "/en/tags/sequential-programming-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Systems Programming",
    "uri": "/en/tags/systems-programming/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/en/tags/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Coding",
    "uri": "/en/tags/c-coding/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Programming Tools",
    "uri": "/en/tags/c-programming-tools/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Composition in C",
    "uri": "/en/tags/composition-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Function Pointers in C",
    "uri": "/en/tags/function-pointers-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Inheritance in C",
    "uri": "/en/tags/inheritance-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Intermediate C Exercises",
    "uri": "/en/tags/intermediate-c-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Learn C",
    "uri": "/en/tags/learn-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Online C Compiler",
    "uri": "/en/tags/online-c-compiler/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Polymorphism in C",
    "uri": "/en/tags/polymorphism-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Practice C Online",
    "uri": "/en/tags/practice-c-online/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Basic C",
    "uri": "/en/tags/basic-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Casts in C",
    "uri": "/en/tags/casts-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Classes in C With Struct",
    "uri": "/en/tags/classes-in-c-with-struct/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Data Types in C",
    "uri": "/en/tags/data-types-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Encapsulation in C",
    "uri": "/en/tags/encapsulation-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Modular C Design",
    "uri": "/en/tags/modular-c-design/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Sizeof in C",
    "uri": "/en/tags/sizeof-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Solved C Exercise",
    "uri": "/en/tags/solved-c-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Struct in C Solved Exercise",
    "uri": "/en/tags/struct-in-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Array Traversal in C",
    "uri": "/en/tags/array-traversal-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Arrays in C",
    "uri": "/en/tags/arrays-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Arrays in C Solved Exercises",
    "uri": "/en/tags/arrays-in-c-solved-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Console Input in C",
    "uri": "/en/tags/console-input-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Memory Initialization C",
    "uri": "/en/tags/memory-initialization-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Memset in C",
    "uri": "/en/tags/memset-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Vectors in C Exercises",
    "uri": "/en/tags/vectors-in-c-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Conditionals in C",
    "uri": "/en/tags/conditionals-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Dynamic Memory C",
    "uri": "/en/tags/dynamic-memory-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: If Else in C Exercises",
    "uri": "/en/tags/if-else-in-c-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Intermediate C",
    "uri": "/en/tags/intermediate-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Logical Operators in C",
    "uri": "/en/tags/logical-operators-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Malloc in C",
    "uri": "/en/tags/malloc-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Nested if in C",
    "uri": "/en/tags/nested-if-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Realloc in C",
    "uri": "/en/tags/realloc-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Do While in C Exercises",
    "uri": "/en/tags/do-while-in-c-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Input Validation in C",
    "uri": "/en/tags/input-validation-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Loops in C",
    "uri": "/en/tags/loops-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: While in C Exercises",
    "uri": "/en/tags/while-in-c-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Accumulator in C",
    "uri": "/en/tags/accumulator-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Programming",
    "uri": "/en/tags/c-programming/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Counter in C",
    "uri": "/en/tags/counter-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: For in C Solved Exercises",
    "uri": "/en/tags/for-in-c-solved-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: For Loop in C Exercises",
    "uri": "/en/tags/for-loop-in-c-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Is C Still Relevant",
    "uri": "/en/tags/is-c-still-relevant/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Is Learning C Worth It",
    "uri": "/en/tags/is-learning-c-worth-it/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Learn C in 2026",
    "uri": "/en/tags/learn-c-in-2026/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Binary Insertion Sort in C",
    "uri": "/en/tags/binary-insertion-sort-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Solved Exercise",
    "uri": "/en/tags/c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Insertion Sort in C",
    "uri": "/en/tags/insertion-sort-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Sorting Algorithms in C",
    "uri": "/en/tags/sorting-algorithms-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Best Books to Learn C",
    "uri": "/en/tags/best-books-to-learn-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Best C Programming Book",
    "uri": "/en/tags/best-c-programming-book/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Learning Resources",
    "uri": "/en/tags/c-learning-resources/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Insercion Directa en C",
    "uri": "/en/tags/insercion-directa-en-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Learn C From Scratch",
    "uri": "/en/tags/learn-c-from-scratch/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Shell Sort C Solved Exercise",
    "uri": "/en/tags/shell-sort-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Shell Sort in C",
    "uri": "/en/tags/shell-sort-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Advanced C Exercises",
    "uri": "/en/tags/advanced-c-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Data Structures",
    "uri": "/en/tags/c-data-structures/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Circular Linked List in C",
    "uri": "/en/tags/circular-linked-list-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Linked List C Solved Exercise",
    "uri": "/en/tags/linked-list-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Merge Sort Solved Exercise",
    "uri": "/en/tags/c-merge-sort-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Merge Sort in C",
    "uri": "/en/tags/merge-sort-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Merge Sort Method",
    "uri": "/en/tags/merge-sort-method/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Binary Tree C Solved Exercise",
    "uri": "/en/tags/binary-tree-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Binary Tree in C",
    "uri": "/en/tags/binary-tree-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Bst in C",
    "uri": "/en/tags/bst-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Binary Files in C",
    "uri": "/en/tags/binary-files-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: File I/O in C",
    "uri": "/en/tags/file-i/o-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Fread and Fwrite in C",
    "uri": "/en/tags/fread-and-fwrite-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Fread Fwrite Solved Exercise",
    "uri": "/en/tags/fread-fwrite-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Array of Structs",
    "uri": "/en/tags/array-of-structs/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Struct in C",
    "uri": "/en/tags/struct-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: C Strings Solved Exercises",
    "uri": "/en/tags/c-strings-solved-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: String Handling C",
    "uri": "/en/tags/string-handling-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Strings in C",
    "uri": "/en/tags/strings-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Strlen Strcpy Strcmp",
    "uri": "/en/tags/strlen-strcpy-strcmp/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Double Pointer in C",
    "uri": "/en/tags/double-pointer-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Dynamic Memory in C",
    "uri": "/en/tags/dynamic-memory-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Pointer to Pointer in C",
    "uri": "/en/tags/pointer-to-pointer-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Pointers in C Solved Exercise",
    "uri": "/en/tags/pointers-in-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Malloc and Free in C",
    "uri": "/en/tags/malloc-and-free-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Malloc Free C Solved Exercise",
    "uri": "/en/tags/malloc-free-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Pointers in C",
    "uri": "/en/tags/pointers-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Algorithms in C",
    "uri": "/en/tags/algorithms-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Quick Sort in C",
    "uri": "/en/tags/quick-sort-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Quicksort C Solved Exercise",
    "uri": "/en/tags/quicksort-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Quicksort in C",
    "uri": "/en/tags/quicksort-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Bubble Sort in C",
    "uri": "/en/tags/bubble-sort-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Sorting Algorithms",
    "uri": "/en/tags/sorting-algorithms/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Sorting in C Solved Exercise",
    "uri": "/en/tags/sorting-in-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Binary Search C Solved Exercise",
    "uri": "/en/tags/binary-search-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Binary Search in C",
    "uri": "/en/tags/binary-search-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Circular Array",
    "uri": "/en/tags/circular-array/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Queue in C",
    "uri": "/en/tags/queue-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Queue in C Solved Exercise",
    "uri": "/en/tags/queue-in-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Stack in C",
    "uri": "/en/tags/stack-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Stack in C Solved Exercise",
    "uri": "/en/tags/stack-in-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Singly Linked List in C",
    "uri": "/en/tags/singly-linked-list-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Advanced C",
    "uri": "/en/tags/advanced-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Doubly Linked List C Solved Exercise",
    "uri": "/en/tags/doubly-linked-list-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Doubly Linked List in C",
    "uri": "/en/tags/doubly-linked-list-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Fgetc in C",
    "uri": "/en/tags/fgetc-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Files in C",
    "uri": "/en/tags/files-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Files in C Solved Exercises",
    "uri": "/en/tags/files-in-c-solved-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Fopen in C",
    "uri": "/en/tags/fopen-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Main and Secondary Diagonal",
    "uri": "/en/tags/main-and-secondary-diagonal/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Matrices in C",
    "uri": "/en/tags/matrices-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Matrices in C Solved Exercises",
    "uri": "/en/tags/matrices-in-c-solved-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Pass by Reference in C",
    "uri": "/en/tags/pass-by-reference-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Pointers in C Solved Exercises",
    "uri": "/en/tags/pointers-in-c-solved-exercises/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Recursion in C",
    "uri": "/en/tags/recursion-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Recursion in C Solved Exercise",
    "uri": "/en/tags/recursion-in-c-solved-exercise/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Recursive Functions in C",
    "uri": "/en/tags/recursive-functions-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Reverse String in C",
    "uri": "/en/tags/reverse-string-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Swap Variables C",
    "uri": "/en/tags/swap-variables-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Text File C",
    "uri": "/en/tags/text-file-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Tags",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tag :: Two Dimensional Arrays in C",
    "uri": "/en/tags/two-dimensional-arrays-in-c/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Complete book",
    "content": "Code for the C in 100 Exercises book Access the complete code for the book in your preferred format and get it running instantly.\nGitHub Repository Download as ZIP Devcontainer Template Errata and suggestions Want to keep learning? Sign up for the newsletter: technology, education, programming, internet culture and useful tools.",
    "description": "Download the repository, ZIP and Devcontainer from the book Programming in C in 100 Solved Exercises.",
    "tags": [],
    "title": "Book Code",
    "uri": "/en/c100/code/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Complete book",
    "content": "Did you notice something odd in the book? Thank you for helping to improve Programming in C in 100 Solved Exercises. Here you will see corrections and can report new errata.\nReport an errata Open an issue with chapter, page and detail. This way all readers can follow it and comment.\nOpen issue on GitHub ← Back to main page",
    "description": "Consult and report errata for the book Programming in C in 100 Solved Exercises.",
    "tags": [],
    "title": "Errata",
    "uri": "/en/c100/erratas/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Complete book",
    "content": "Your reader pack is ready Receive by email the A4 C Language cheat sheet, the template with tests and the prepared Devcontainer.\nName\nEmail *\nI want the pack You will receive an email with the links. If you don't see it, check spam or visit the Thank you page. By submitting you accept the Privacy Policy.\nMore resources Code repository Errata and suggestions Subscribe to the newsletter Error A problem occurred.\nClose",
    "description": "Receive the C cheat sheet, project template and Devcontainer from the book Programming in C in 100 Solved Exercises.",
    "tags": [],
    "title": "Reader Pack – Programming in C in 100 Exercises",
    "uri": "/en/c100/pack/index.html"
  },
  {
    "breadcrumb": "Learn C — solved exercises \u003e Complete book",
    "content": "Thank you for your interest! Your submission has been processed successfully. Here are the pack resources in case the email is delayed or you lose it.\nC Language A4 Cheat Sheet (PDF) Devcontainer Template Complete exercises repository Sign up for the newsletter Technology, education, programming, internet culture and useful tools.\n← Back to main page",
    "description": "Access again the cheat sheet, Devcontainer and exercises from the book Programming in C in 100 Solved Exercises.",
    "tags": [],
    "title": "Thank You",
    "uri": "/en/c100/gracias/index.html"
  }
]
