# Using the Foundation components in Markdown

Enclosed are samples of the components in practice and how to use them.

## Built-in Markdoc components

### Tables

If your table has long-form code blocks, you can't use Markdown tables without causing trouble. [Markdoc has you](https://markdoc.io/docs/tags#table-with-rich-content):

```md
{% table %}
* Foo
* Bar
* Baz
---
*
  ```
  puts "Some code here."
  ```
*
  {% list type="checkmark" %}
  * Bulleted list in table
  * Second item in bulleted list
  {% /list %}
* Text in a table
---
*
  A "loose" list with

  multiple line items
* Test 2
* Test 3
---
* Test 1
* A cell that spans two columns {% colspan=2 %}
{% /table %}
```

In practice it makes a nice table:

![](https://media.urbit.org/foundation/design/table.png)

## Our additions

### Fences

Using code blocks like normal work as you expect. However, we also have the following:

#### Copy icons

````
```hoon {% copy=true %}
````

Adds a copy icon top right, that copies the buffer to clipboard.

#### Collapsed or scroll appearances

````
```hoon {% mode="collapse" %}
````

Will collapse the code block to a set height and require a click to expand.

````
```hoon {% mode="scroll" %}
````

Will set the code block to a set height and allow the user to scroll.

### Superscript

Pandoc style.

```
20^th^
```

### Inline HTML

As usual.

```html
<iframe class="arena-iframe" width="100%" src="https://www.are.na/tlon/seal-zp3irwad52y/embed"></iframe>
```

### Callouts

Interspersing content with cards to call attention to specific instructions.

![](https://media.urbit.org/foundation/design/callout.png)

```
{% callout %}

**Layer 2 for planets**

Learn more about [layer 2 for planets](/using/id/layer-2-for-planets) in the User's Manual page on the topic.

{% /callout %}
```

### Buttons

Using our default buttons in text.

![](https://media.urbit.org/foundation/design/button.png)

```
{% button label="Download Port" link="https://github.com/urbit/port/releases/latest/download/Port.dmg" color="bg-green-400 text-white" %}
{% /button %}
```

### Tabs

Let users choose from a few sections when necessary.

![](https://media.urbit.org/foundation/design/tabs.png)

````
{% tabs %}

{% tab label="MacOS" %}

To install **Port** on MacOS, simply download and open the `.dmg` file.

{% /tab %}

{% tab label="Linux" %}

We use `snap` so that **Port** can stay updated automatically. If you already have `snap` installed, simply run:

```sh
sudo snap install port
```

Or to install `snap` for your distribution, snapcraft provides [installation instructions](https://snapcraft.io/docs/installing-snapd).

{% /tab %}

{% tab label="Windows" %}

To install **Port** on Windows, simply download and open the `.exe` file.

{% /tab %}

{% /tabs %}
````