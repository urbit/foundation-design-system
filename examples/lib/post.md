## Parser builders

These functions are used to build `rule`s (i.e. parsers), and thus are often
called rule-builders. For a complete list of parser builders, see [4f: Parsing
(Rule-Builders)](/reference/hoon/stdlib/4f), but also the more specific
functions in [4h: Parsing (ASCII
Glyphs)](/reference/hoon/stdlib/4h), [4i: Parsing (Useful
Idioms)](/reference/hoon/stdlib/4i), [4j: Parsing (Bases and Base
Digits)](/reference/hoon/stdlib/4j), [4l: Atom Parsing](/reference/hoon/stdlib/4l).

### [`+just`](/reference/hoon/stdlib/4f/#just)

The most basic rule builder, `+just` takes in a single `char` and produces a
`rule` that attempts to match that `char` to the first character in the `tape`
of the input `nail`.

```
> =edg ((just 'a') [[1 1] "abc"])
> edg
[p=[p=1 q=2] q=[~ [p='a' q=[p=[p=1 q=2] q="bc"]]]]
```

We note that `p.edg` is `[p=1 q=2]`, indicating that the next character to be
parsed is in line 1, column 2. `q.edg` is not null, indicating that parsing
succeeded. `p.q.edg` is `'a'`, which is the result of the parse. `p.q.q.edg` is the same as `p.edg`, which is always the case for
`rule`s built using standard library functions when parsing succeeds. Lastly,
`q.q.edg` is `"bc"`, which is the part of the input `tape` that has yet to be parsed.

Now let's see what happens when parsing fails.

```
> =edg ((just 'b') [[1 1] "abc"])
> edg
[p=[p=1 q=1] q=~]
```

Now we have that `p.edg` is the same as the input `hair`, `[1 1]`, meaning the
parser has not advanced since parsing failed. `q.edg` is null, indicating that
parsing has failed.

Later we will use [+star](#star) to string together a sequence of `+just`s in
order to parse multiple characters at once.

### [`+jest`](/reference/hoon/stdlib/4f/#jest)

`+jest` is a `rule` builder used to match a `cord`. It takes an input `cord` and
produces a `rule` that attempts to match that `cord` against the beginning of
the input.

Let's see what happens when we successfully parse the entire input `tape`.

```
> =edg ((jest 'abc') [[1 1] "abc"])
> edg
[p=[p=1 q=4] q=[~ [p='abc' q=[p=[p=1 q=4] q=""]]]]
```

`p.edg` is `[p=1 q=4]`, indicating that the next character to be parsed is at
line 1, column 4. Of course, this does not exist since the input `tape` was only
3 characters long, so this actually indicates that the entire `tape` has been
successfully parsed (since the `hair` does not advance in the case of failure).
`p.q.edg` is `'abc'`, as expected. `q.q.edg` is `""`, indicating that nothing
remains to be parsed.

What happens if we only match some of the input `tape`?

```
> =edg ((jest 'ab') [[1 1] "abc"])
> edg
[p=[p=1 q=3] q=[~ [p='ab' q=[p=[p=1 q=3] q="c"]]]]
```

Now we have that the result, `p.q.edg`, is `'ab'`, while the remainder `q.q.q.edg`
is `"c"`. So `+jest` has successfully parsed the first two characters, while the
last character remains. Furthermore, we still have the information that the
remaining character was in line 1 column 3 from `p.edg` and `p.q.q.edg`.

What happens when `+jest` fails?

```
> ((jest 'bc') [[1 1] "abc"])
[p=[p=1 q=1] q=~]
```

Despite the fact that `'bc'` appears in `"abc"`, because it was not at the
beginning the parse failed. We will see in [parser
combinators](#parser-combinators) how to modify this `rule` so that it
finds `bc` successfully.

### [`+shim`](/reference/hoon/stdlib/4f/#shim)

`+shim` is used to parse characters within a given range. It takes in two atoms
and returns a `rule`.

```
> ((shim 'a' 'z') [[1 1] "abc"])
[p=[p=1 q=2] q=[~ [p='a' q=[p=[p=1 q=2] q="bc"]]]]
```

### [`+next`](/reference/hoon/stdlib/4f/#next)

`+next` is a simple `rule` that takes in the next character and returns it as the
parsing result.

```
> (next [[1 1] "abc"])
[p=[p=1 q=2] q=[~ [p='a' q=[p=[p=1 q=2] q="bc"]]]]
```

### [`+cold`](/reference/hoon/stdlib/4f/#cold)

`+cold` is a `rule` builder that takes in a constant noun we'll call `cus` and a
`rule` we'll call `sef`. It returns a `rule` identical to the `sef` except it
replaces the parsing result with `cus`.

Here we see that `p.q` of the `edge` returned by the `rule` created with `+cold`
is `%foo`.

```
> ((cold %foo (just 'a')) [[1 1] "abc"])
[p=[p=1 q=2] q=[~ u=[p=%foo q=[p=[p=1 q=2] q="bc"]]]]
```

One common scenario where `+cold` sees play is when writing [command line
interface (CLI) apps](/guides/additional/hoon/cli-tutorial). We usher the
reader there to find an example where `+cold` is used.

### [`+knee`](/reference/hoon/stdlib/4f/#knee)

Another important function in the parser builder library is `+knee`, used for building
recursive parsers. We delay discussion of `+knee` to the
[section below](#recursive-parsers) as more context is needed to explain it
properly.

## Outside callers

Since `hair`s, `nail`s, etc. are only utilized within the context of writing
parsers, we'd like to hide them from the rest of the code of a program that
utilizes parsers. That is to say, you'd like the programmer to only worry about
passing `tape`s to the parser, and not have to dress up the `tape` as a `nail`
themselves. Thus we have several functions for exactly this purpose.

These functions take in either a `tape` or a `cord`,
alongside a `rule`, and attempt to parse the input with the `rule`. If the
parse succeeds, it returns the result. There are crashing and unitized versions
of each caller, corresponding to what happens when a parse fails.

For additional information including examples see [4g: Parsing (Outside Caller)](/reference/hoon/stdlib/4g).

### Parsing `tape`s

[`+scan`](/reference/hoon/stdlib/4g/#scan) takes in a `tape` and a `rule` and attempts to parse the `tape` with the
`rule`.

```
> (scan "hello" (jest 'hello'))
'hello'
> (scan "hello zod" (jest 'hello'))
{1 6}
'syntax-error'
```

[`+rust`](/reference/hoon/stdlib/4g/#rust) is the unitized version of `+scan`.

```
> (rust "a" (just 'a'))
[~ 'a']
> (rust "a" (just 'b'))
~
```

For the remainder of this tutorial we will make use of `+scan` so that we do not
need to deal directly with `nail`s except where it is illustrative to do so.

### Parsing atoms

[Recall from Hoon School](/guides/core/hoon-school/E-types) that `cord`s are atoms with the aura
`@t` and are typically used to represent strings internally as data, as atoms
are faster for the computer to work with than `tape`s, which are `list`s of
`@tD` atoms. [`+rash`](/reference/hoon/stdlib/4g/#rash) and [`+rush`](/reference/hoon/stdlib/4g/#rush) are for parsing atoms, with `+rash` being
analogous to `+scan` and `+rush` being analogous to `+rust`. Under the hood, `+rash`
calls `+scan` after converting the input atom to a `tape`, and `+rush` does
similary for `+rust`.

## Parser modifiers

The standard library provides a number of gates that take a `rule` and produce a
new modified `rule` according to some process. We call these _parser modifiers_.
These are documented among the [parser
builders](/reference/hoon/stdlib/4f).

### [`+ifix`](/reference/hoon/stdlib/4f/#ifix)

`+ifix` modifies a `rule` so that it matches that `rule` only when it is
surrounded on both sides by text that matches a pair of `rule`s, which is discarded.

```
> (scan "(42)" (ifix [pal par] (jest '42')))
'42'
```

`+pal` and `+par` are shorthand for `(just '(')` and `(just ')')`, respectively. All
ASCII glyphs have counterparts of this sort, documented
[here](/reference/hoon/stdlib/4h).

### [`+star`](/reference/hoon/stdlib/4f/#star) {% #star %}

`+star` is used to apply a `rule` repeatedly. Recall that `+just` only parses
the first character in the input `tape.`

```
> ((just 'a') [[1 1] "aaaa"])
[p=[p=1 q=2] q=[~ [p='a' q=[p=[p=1 q=2] q="aaa"]]]]
```

We can use `+star` to get the rest of the `tape`:

```
> ((star (just 'a')) [[1 1] "aaa"])
[p=[p=1 q=4] q=[~ [p=[i='a' t=<|a a|>] q=[p=[p=1 q=4] q=""]]]]
```

and we note that the parsing ceases when it fails.

```
> ((star (just 'a')) [[1 1] "aaab"])
[p=[p=1 q=4] q=[~ [p=[i='a' t=<|a a|>] q=[p=[p=1 q=4] q="b"]]]]
```

We can combine `+star` with `+next` to just return the whole input:

```
> ((star next) [[1 1] "aaabc"])
[p=[p=1 q=6] q=[~ [p=[i='a' t=<|a a b c|>] q=[p=[p=1 q=6] q=""]]]]
```

### [`+cook`](/reference/hoon/stdlib/4f/#cook)

`+cook` takes a `rule` and a gate and produces a modified version of the `rule`
that passes the result of a successful parse through the given gate.

Let's modify the rule `(just 'a')` so that it when it successfully parses `a`,
it returns the following letter `b` as the result.

```
((cook |=(a=@ `@t`+(a)) (just 'a')) [[1 1] "abc"])
[p=[p=1 q=2] q=[~ u=[p='b' q=[p=[p=1 q=2] q="bc"]]]]
```

## Parser combinators

Building complex parsers from simpler parsers is accomplished in Hoon with the
use of two tools: the monadic applicator rune
[`;~`](/reference/hoon/rune/mic/#-micsig) and [parsing
combinators](/reference/hoon/stdlib/4e). First we introduce a few
combinators, then we examine more closely how `;~` is used to chain them together.

The syntax to combine `rule`s is

```hoon
;~(combinator rule1 rule2 ... ruleN)
```

The `rule`s are composed together using the combinator as an
intermediate function, which takes the product of a `rule` (an `edge`) and a `rule` and turns
it into a sample (a `nail`) for the next `rule` to handle. We elaborate on this
behavior [below](#-micsig).

### [`+plug`](/reference/hoon/stdlib/4e/#plug)

`+plug` simply takes the `nail` in the `edge` produced by one rule and passes it
to the next `rule`, forming a cell of the results as it proceeds.

```
> (scan "starship" ;~(plug (jest 'star') (jest 'ship')))
['star' 'ship']
```

### [`+pose`](/reference/hoon/stdlib/4e/#pose)

`+pose` tries each `rule` you hand it successively until it finds one that
works.

```
> (scan "a" ;~(pose (just 'a') (just 'b')))
'a'
> (scan "b" ;~(pose (just 'a') (just 'b')))
'b'
```

### [`+glue`](/reference/hoon/stdlib/4e/#glue)

`+glue` parses a delimiter in between each `rule` and forms a cell of the
results of each `rule`.

```
> (scan "a,b" ;~((glue com) (just 'a') (just 'b')))
['a' 'b']
> (scan "a,b,a" ;~((glue com) (just 'a') (just 'b')))
{1 4}
syntax error
> (scan "a,b,a" ;~((glue com) (just 'a') (just 'b') (just 'a')))
['a' 'b' 'a']
```

### [`;~`](/reference/hoon/rune/mic/#-micsig) {% #-micsig %}

Understanding the rune `;~` is essential to building parsers with Hoon. Let's
take this opportunity to think about it carefully.

The `rule` created by `;~(combinator (list rule))` may be understood
inductively. To do this, let's consider the base case where our `(list rule)` has only a
single entry.

```
> (scan "star" ;~(plug (jest 'star')))
'star'
```

Our output is identical to that given by `(scan "star" (jest 'star'))`. This is to
be expected. The combinator `+plug` is specifically used for chaining together
`rule`s in the `(list rule)`, but if there is only one `rule`, there is nothing
to chain. Thus, swapping out `+plug` for another combinator makes no difference here:

```
> (scan "star" ;~(pose (jest 'star')))
'star'
> (scan "star" ;~((glue com) (jest 'star')))
'star'
```

`;~` and the combinator only begin to play a role once the `(list rule)` has at
least two elements. So let's look at an example done with `+plug`, the simplest
combinator.

```
> (scan "star" ;~(plug (jest 'st') (jest 'ar')))
['st' 'ar']
```

Our return suggests that we first parsed `"star"` with the `rule` `(jest 'st')` and passed
the resulting `edge` to `(jest 'ar')` - in other words, we called `+plug` on `(jest 'st')` and the `edge` returned once it had been used to parse `"star"`. Thus
`+plug` was the glue that allowed us to join the two `rule`s, and `;~` performed
the gluing operation. And so, swapping `+plug` for `+pose` results in a crash,
which clues us into the fact that the combinator now has an effect since there
is more than one `rule`.

```
> (scan "star" ;~(pose (jest 'st') (jest 'ar')))
{1 3}
syntax error
```

## Parsing numbers

Functions for parsing numbers are documented in [4j: Parsing (Bases and Base
Digits)](/reference/hoon/stdlib/4j). In particular,
[`dem`](/reference/hoon/stdlib/4i/#dem) is a `rule` for parsing decimal
numbers.

```
> (scan "42" dem)
42
> (add 1 (scan "42" dem))
43
```

## Recursive parsers

Naively attempting to write a recursive `rule`, i.e. like

```
> |-(;~(plug prn ;~(pose $ (easy ~))))
```

results in an error:

```
-find.,.+6
-find.,.+6
rest-loop
```

Here, [`+prn`](/reference/hoon/stdlib/4i/#prn) is a `rule` used
to parse any printable character, and
[`+easy`](/reference/hoon/stdlib/4f/#easy) is a `rule` that always returns a
constant (`~` in this case) regardless of the input.

Thus some special sauce is required, the
[`+knee`](/reference/hoon/stdlib/4f/#knee) function.

`+knee` takes in a noun that is the default value of the parser, typically given
as the bunt value of the type that the `rule` produces, as well as a gate that
accepts a `rule`. `+knee` produces a `rule` that implements any recursive calls
in the `rule` in a manner acceptable to the compiler. Thus the preferred manner
to write the above `rule` is as follows:

```hoon
|-(;~(plug prn ;~(pose (knee *tape |.(^$)) (easy ~))))
```

You may want to utilize the `~+` rune when writing recursive parsers to cache
the parser to improve performance. In the following section, we will be writing a recursive
parser making use of `+knee` and `~+` throughout.

# Parsing arithmetic expressions

In this section we will be applying what we have learned to write a parser for
arithmetic expressions in Hoon. That is, we will make a `rule` that takes in
`tape`s of the form `"(2+3)*4"` and returns `20` as a `@ud`.

We call a `tape` consisting of some consistent arithmetic string of numbers,
`+`, `*`, `(`, and `)` an _expression_. We wish to build a `rule` that takes in an
expression and returns the result of the arithmetic computation described by the
expression as a `@ud`.

To build a parser it is a helpful exercise to first describe its
[grammar](https://en.wikipedia.org/wiki/Parsing_expression_grammar). This has a
formal mathematical definition, but we will manage to get by here describing the grammar
for arithmetic expressions informally.

First let's look at the code we're going to use, and then dive into explaining
it. If you'd like to follow along, save the following as `expr-parse.hoon` in
your `gen/` folder.

```hoon
::  expr-parse: parse arithmetic expressions
::
|=  math=tape
|^  (scan math expr)
++  factor
  %+  knee  *@ud
  |.  ~+
  ;~  pose
    dem
    (ifix [pal par] expr)
  ==
++  term
  %+  knee  *@ud
  |.  ~+
  ;~  pose
    ((slug mul) tar ;~(pose factor term))
    factor
  ==
++  expr
  %+  knee  *@ud
  |.  ~+
  ;~  pose
    ((slug add) lus ;~(pose term expr))
    term
  ==
--
```

Informally, the grammar here is:

- A factor is either an integer or an expression surrounded by parentheses.
- A term is either a factor or a factor times a term.
- An expression is either a term or a term plus an expression.

### Factors, terms, and expressions

Our grammar consists of three `rule`s: one for factors, one for terms, and one
for expressions.

#### Factors

```hoon
++  factor
  %+  knee  *@ud
  |.  ~+
  ;~  pose
    dem
    (ifix [pal par] expr)
  ==
```

A _factor_ is either a decimal number or an expression surrounded by parentheses. Put
into Hoon terms, a decimal number is parsed by the `rule` `+dem` and an
expression is parsed by removing the surrounding parentheses and then passing
the result to the expression parser arm `+expr`, given by the `rule` `(ifix [pal par] expr)`. Since we want to parse our expression with one or the other, we
chain these two `rule`s together using the monadic applicator rune `;~` along
with `+pose`, which says to try each rule in succession until one of them works.

Since expressions ultimately reduce to factors, we are actually building a
recursive rule. Thus we need to make use of `+knee`. The first argument for
`+knee` is `*@ud`, since our final answer should be a `@ud`.

Then follows the definition of the gate utilized by `+knee`:

```hoon
  |.  ~+
  ;~  pose
    dem
    (ifix [pal par] expr)
  ==
```

`~+` is used to cache the parser, so that it does not need to be computed over
and over again. Then it follows the `rule` we described above.

#### Parsing expressions

An _expression_ is either a term plus an expression or a term.

In the case of a term plus an expression, we actually must compute what that equals. Thus we will
make use of [`+slug`](/reference/hoon/stdlib/4f#slug), which parses a
delimited list into `tape`s separated by a given delimiter and then composes
them by folding with a binary gate. In this case, our delimiter is `+` and our
binary gate is `+add`. That is to say, we will split the input string into terms
and expressions separated by luses, parse each term and expression until they
reduce to a `@ud`, and then add them together. This is accomplished with the
`rule` `((slug add) lus ;~(pose term expr))`.

If the above `rule` does not parse the expression, it must be a `term`, so the
`tape` is automatically passed to `+term` to be evaluated. Again we use `;~` and `pose` to
accomplish this:

```hoon
;~  pose
  ((slug add) lus ;~(pose term expr))
  term
==
```

The rest of the `+expr` arm is structured just like how `+factor` is, and for
the same reasons.

#### Parsing terms

A _term_ is either a factor times a term or a factor. This is handled similarly
for expressions, we just need to swap `lus` for `tar`, `add` for `mul`, and
`;~(pose factor term)` instead of `;~(pose term expr)`.

```hoon
++  expr
  %+  knee  *@ud
  |.  ~+
  ;~  pose
    ((slug add) lus ;~(pose term expr))
    term
  ==
```

### Try it out

Let's feed some expressions to `+expr-parse` and see how it does.

```
> +expr-parse "3"
3
> +expr-parse "3+3"
6
> +expr-parse "3+3+(2*3)+(4+2)*(4+1)"
42
> +expr-parse "3+3+2*3"
12
```

As an exercise, add exponentiation (e.g. `2^3 = 8`) to `+expr-parse`.
