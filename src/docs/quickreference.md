# Print the name of every type defined in the schema
curl -s $DOCS_API/schema.json | python3 -c "import json,sys; [print(k) for k in json.load(sys.stdin)['\$defs']]"

# One type's definition from the schema
curl -s $DOCS_API/schema.json | python3 -c "import json,sys; print(json.dumps(json.load(sys.stdin)['\$defs'][sys.argv[1]], indent=1))" PageEntry

# Current version, build time, page and asset counts
curl -s $DOCS_API/latest.json

# Top-level nav
# order, route, title, section, folder?, child count
curl -s $DOCS_API/manifest.json | python3 -c "import json,sys; [print(n.get('order'), '|', repr(n['route']), '|', n['title'], '|', n['section'], '| folder:', n.get('folder', False), '| children:', len(n.get('children',[]))) for n in json.load(sys.stdin)['nav']]"

# One nav node by route at any depth, with its children
curl -s $DOCS_API/manifest.json | python3 -c "import json,sys; f=lambda ns:[x for n in ns for x in [n]+f(n.get('children',[]))]; print(json.dumps([n for n in f(json.load(sys.stdin)['nav']) if n['route']==sys.argv[1]], indent=1))" guides/cheatsheet

# List every page route
curl -s $DOCS_API/manifest.json | python3 -c "import json,sys; [print(p['route']) for p in json.load(sys.stdin)['pages']]"

# One page's manifest entry by route
curl -s $DOCS_API/manifest.json | python3 -c "import json,sys; print(json.dumps([p for p in json.load(sys.stdin)['pages'] if p['route']==sys.argv[1]], indent=1))" STATUS

# A page's Markdown, first 30 lines
curl -s $DOCS_API/pages/guides/cheatsheet.md | head -30
