---
title: "Pages Archive Layout with Content"
excerpt: A variety of common markup showing how this theme styles them.
layout: archive
permalink: /archive-sample/
---
#### A variety of common markup showing how this theme styles them.

Based on [Minimal Mistakes sample archive page](https://mmistakes.github.io/minimal-mistakes/archive-layout-with-content/)
[*(raw source)*](https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/docs/_pages/archive-layout-with-content.md)
{: .small}

Exploring this page will teach you some Markdown syntax, both general syntax and syntax specific to this theme. For example, the Markdown for the text above is as follows:
```markdown
[//]: # ( markdown syntax for above: )

Based on [Minimal Mistakes sample archive page](https://mmistakes.github.io/minimal-mistakes/archive-layout-with-content/)
[*(raw source)*](https://raw.githubusercontent.com/mmistakes/minimal-mistakes/master/docs/_pages/archive-layout-with-content.md)
{: .small}

[//]: # ( {: .small} is specific to this theme )
```

### Comments in Markdown
```markdown
[//]: # (This syntax works like a comment, and won't appear in any output.)
[//]: # (Writing it this way ensures it won't show up when converting Markdown to other formats)

<!-- HTML comments also work in Markdown -->
```

## Images
![Sample Image](/assets/images/unsplash-gallery-image-3.jpg)
[*Image Source*](https://unsplash.com/@petefogden?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge)
{: .small}

```markdown
![Sample Image](/assets/images/unsplash-gallery-image-3.jpg)
[*Image Source*](https://unsplash.com/@petefogden?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge)
{: .small}
```

## Image Galleries

[Posting Image Galleries](https://mmistakes.github.io/minimal-mistakes/post%20formats/post-gallery/)

## Headers

# Header one

## Header two

### Header three

#### Header four

##### Header five

###### Header six

```
# Header one

## Header two

### Header three

#### Header four

##### Header five

###### Header six
```

## Blockquotes

Single line blockquote:

> Stay hungry. Stay foolish.

```markdown
> Stay hungry. Stay foolish.
```

Multi line blockquote with a cite reference:

> People think focus means saying yes to the thing you've got to focus on. But that's not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I'm actually as proud of the things we haven't done as the things I have done. Innovation is saying no to 1,000 things.

<cite>Steve Jobs</cite> --- Apple Worldwide Developers' Conference, 1997
{: .small}

```markdown
> People think focus means...
<cite>Steve Jobs</cite> --- Apple Worldwide Developers' Conference, 1997
{: .small}
```

## Tables

| Employee         | Salary |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | $1     | Because that's all Steve Jobs needed for a salary.           |
| [Jane Doe](#)    | $100K  | For all the blogging she does.                               |
| [Fred Bloggs](#) | $100M  | Pictures are worth a thousand words, right? So Jane × 1,000. |
| [Jane Bloggs](#) | $100B  | With hair like that?! Enough said.                           |

```markdown
| Employee         | Salary |                                                              |
| --------         | ------ | ------------------------------------------------------------ |
| [John Doe](#)    | $1     | Because that's all Steve Jobs needed for a salary.           |
| [Jane Doe](#)    | $100K  | For all the blogging she does.                               |
| [Fred Bloggs](#) | $100M  | Pictures are worth a thousand words, right? So Jane × 1,000. |
| [Jane Bloggs](#) | $100B  | With hair like that?! Enough said.                           |
```

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |

```markdown
| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|-----------------------------|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=============================|
| Foot1   | Foot2   | Foot3   |
```

## Definition Lists

Definition List Title
:   Definition list division.

Startup
:   A startup company or startup is a company or temporary organization designed to search for a repeatable and scalable business model.

#dowork
:   Coined by Rob Dyrdek and his personal body guard Christopher "Big Black" Boykins, "Do Work" works as a self motivator, to motivating your friends.

Do It Live
:   I'll let Bill O'Reilly [explain](https://www.youtube.com/watch?v=O_HyZ5aW76c "We'll Do It Live") this one.

```markdown
Definition List Title
:   Definition list division.
```


## Unordered Lists (Nested)

  * List item one
      * List item one
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

```markdown
  * List item one
      * List item one
          * List item one
          * List item two
          * List item three
          * List item four
      * List item two
      * List item three
      * List item four
  * List item two
  * List item three
  * List item four

[//]: # ( ordered lists are the same but with numbers )
```

## Ordered List (Nested)

  1. List item one
      1. List item one
          1. List item one
          2. List item two
          3. List item three
          4. List item four
      2. List item two
      3. List item three
      4. List item four
  2. List item two
  3. List item three
  4. List item four

## Buttons

Make any link standout more when applying the `.btn` class.

```html
<a href="#" class="btn--success">Success Button</a>
```

[Primary Button](#){: .btn}
[Success Button](#){: .btn .btn--success}
[Warning Button](#){: .btn .btn--warning}
[Danger Button](#){: .btn .btn--danger}
[Info Button](#){: .btn .btn--info}
[Inverse Button](#){: .btn .btn--inverse}
[Light Outline Button](#){: .btn .btn--light-outline}

```markdown
[Primary Button Text](#link){: .btn}
[Success Button Text](#link){: .btn .btn--success}
[Warning Button Text](#link){: .btn .btn--warning}
[Danger Button Text](#link){: .btn .btn--danger}
[Info Button Text](#link){: .btn .btn--info}
[Inverse Button](#link){: .btn .btn--inverse}
[Light Outline Button](#link){: .btn .btn--light-outline}
```

[X-Large Button](#){: .btn .btn--x-large}
[Large Button](#){: .btn .btn--large}
[Default Button](#){: .btn}
[Small Button](#){: .btn .btn--small}

```markdown
[X-Large Button](#link){: .btn .btn--x-large}
[Large Button](#link){: .btn .btn--large}
[Default Button](#link){: .btn}
[Small Button](#link){: .btn .btn--small}
```

## Notices

**Watch out!** You can also add notices by appending `{: .notice}` to a paragraph.
{: .notice}

```markdown
**Watch out!** You can also add notices by appending `{: .notice}` to a paragraph.
{: .notice}
```

## HTML Tags

### Address Tag

<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>

```html
<address>
  1 Infinite Loop<br /> Cupertino, CA 95014<br /> United States
</address>
```

### Anchor Tag (aka. Link)

This is an example of a [link](https://www.traderjoes.com/ "Trader Joe's").

```markdown
This is an example of a [link](https://www.traderjoes.com/ "Trader Joe's").
```

### Abbreviation Tag

The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets

```markdown
The abbreviation CSS stands for "Cascading Style Sheets".

*[CSS]: Cascading Style Sheets
```

### Cite Tag

"Code is poetry." ---<cite>Automattic</cite>

```markdown
"Code is poetry." ---<cite>Automattic</cite>
```

### Code Tag

You will learn later on in these tests that `word-wrap: break-word;` will be your best friend.
```markdown
`code`
```

### Strike Tag
`<strike>`

This tag will let you <strike>strikeout text</strike>.

### Emphasize Tag
`_italicized text_` or `*italicized text`

The emphasize tag should _italicize_ text.

### Insert Tag
`<ins>inserted</ins>`

This tag should denote <ins>inserted</ins> text.

### Keyboard Tag
`<kbd>keyboard text</kbd>`

This scarcely known tag emulates <kbd>keyboard text</kbd>, which is usually styled like the `<code>` tag.

### Preformatted Tag

This tag styles large blocks of code.

<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>

```markdown
<pre>
.post-title {
  margin: 0 0 5px;
  font-weight: bold;
  font-size: 38px;
  line-height: 1.2;
  and here's a line of some really, really, really, really long text, just to see how the PRE tag handles it and to find out how it overflows;
}
</pre>
```

### Quote Tag
`<q>`

<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

```markdown
<q>Developers, developers, developers&#8230;</q> &#8211;Steve Ballmer

[//]: # ( &#8230; is the Unicode character value for ellipsis ... and &#8211; is for an – en dash –)
```

### Strong Tag
`**bold text**`

This tag shows **bold text**.

### Subscript Tag
`<sub>`

Getting our science styling on with H<sub>2</sub>O, which should push the "2" down.

### Superscript Tag
`<sup>`

Still sticking with science and Albert Einstein's E = MC<sup>2</sup>, which should lift the 2 up.

### Variable Tag
`<var>`

This allows you to denote <var>variables</var>.

-----

# All Pages Archive

{% for post in site.pages %}
{% include archive-single.html %}
{% endfor %}
