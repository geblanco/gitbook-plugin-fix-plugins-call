Gitbook Plugin Fix plugin call
=============
A gitbook plugin to fix plugins calls

### Install

Add this to your `book.json`, then run `gitbook install`:

```json
{
    "plugins": ["bibtex-indexed-cite"]
}
```

### Why?

Currently gitbook-editor does not support inserting plugin syntax things without forcing to edit in markdown, which is pretty anoying.

To overcome this, instead of writing
```md
{{ "whatever" | <filter> }}
```
I did write
```md
`{{ "whatever" | <filter> }}`
```

So I can still edit in the normal tab, but this deactivates the plugin functionality.

This plugin parses those entries and fixes the surrounding ``` ` ``` characters

### Setup

In your `book.json` add

```json
{
	"pluginsConfig": {
		"fix-plugins-call": {
			"plugins": [ "<filter-one>", "<filter-two>", "..."]
		}
	}
}
```

Where every `<filter>`
 is a filter for a plugin call to fix