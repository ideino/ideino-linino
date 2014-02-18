ideino - linino
===

It's the node.js development environment for [Linino](http://www.linino.org).

# Linino Configuration

* Luci

To connect `Ideino` environment to `Luci` xxxx the following istrunctions:

1- in `Linino` go to `/usr/lib/lua/luci/view/linino/` and rename `homepafge.htm` to `homepage.htm.bak` and copy inside `/_lininofiles/homepage.htm`.

2- copy `/_lininofiles/ideino.js` into `/www/luci-static/resources/linino/` directory in `Linino`.


# Installation

`npm -f install`
