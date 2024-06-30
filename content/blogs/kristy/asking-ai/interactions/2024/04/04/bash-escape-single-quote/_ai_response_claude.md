To escape single quotes within a string variable in Bash, you can use the `$'...'` syntax or double quotes `"..."`. Here are a few ways to handle it:

1. **Using $'...'**:
```bash
string="I'm a 'quoted' string"
echo "$string"  # Outputs: I'm a 'quoted' string

# To escape single quotes:
quoted_string=$'I\'m a \'quoted\' string'
echo "$quoted_string"  # Outputs: I'm a 'quoted' string
```

2. **Using double quotes "..."**:
```bash
string="I'm a 'quoted' string"
echo "$string"  # Outputs: I'm a 'quoted' string

# No need to escape single quotes within double quotes
quoted_string="I'm a 'quoted' string"
echo "$quoted_string"  # Outputs: I'm a 'quoted' string
```

3. **Using escaped single quotes**:
```bash
string='I'\''m a '\''quoted'\'' string'
echo "$string"  # Outputs: I'm a 'quoted' string
```

In the third example, we escape each single quote by putting another single quote before it.

The `$'...'` method is generally preferred as it's more readable and easier to manage, especially when dealing with complex strings containing various special characters.

Keep in mind that when you use double quotes `"..."`, other special characters like `\` (backslash), `$` (dollar sign), and backticks `` ` `` will still be interpreted by Bash. If you need to preserve them literally, you'll need to escape them or use the `$'...'` syntax.