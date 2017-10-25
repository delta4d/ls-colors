# ls-colors

Fetch `LS_COLORS` information.

# Installation

    npm install --global ls-colors
    npm install --save ls-colors

# Usage

    const colors = require('ls-colors');
    console.log(info);
    // {
    //     '.js': '32'
    //     ....
    // }


# Meaning

## Abbrv

With the help of `dircolors --print-database`, got

| abbrv  | meaning                 |
| ------ | ----------------------- |
| no     | normal                  |
| fi     | regular file            |
| di     | directory               |
| ow     | other-writable          |
| ln     | symbolic link           |
| pi     | pipe                    |
| so     | socket                  |
| do     | door                    |
| bd     | block device            |
| cd     | character device        |
| or     | orphan                  |
| mi     | missing                 |
| ex     | exec                    |
| \*.ext | file with extension ext |

## Color Code

- Attribute codes:

        00=none 01=bold 04=underscore 05=blink 07=reverse 08=concealed

- Text color codes:

        30=black 31=red 32=green 33=yellow 34=blue 35=magenta 36=cyan 37=white

- Background color codes:

        40=black 41=red 42=green 43=yellow 44=blue 45=magenta 46=cyan 47=white

For more information, please visit [bigsoft#ls-colors](http://www.bigsoft.co.uk/blog/index.php/2008/04/11/configuring-ls_colors).

# References

1. https://www.gnu.org/software/coreutils/manual/html_node/dircolors-invocation.html#dircolors-invocation
2. http://www.bigsoft.co.uk/blog/index.php/2008/04/11/configuring-ls_colors

# LICENSE

MIT
