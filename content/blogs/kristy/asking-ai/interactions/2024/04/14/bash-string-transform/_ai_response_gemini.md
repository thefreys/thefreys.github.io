Here's how you can transform a string variable in bash to have capitalized words and spaces replacing dashes:

```bash
title="${title//-*/}"  # Replace dashes with spaces
title="${title^}"        # Capitalize the first letter of the entire string
```

This uses two bash parameter expansions:

1. **String Substitution:** `${title//-*/ }` replaces all occurrences of `-` in `${title}` with a space.
2. **Title Case Expansion:** `${title^}` capitalizes the first letter of the entire `${title}` string.

**Example:**

```bash
title="this-is-a-title"
title="${title//-*/}"  # title="this is a title"
title="${title^}"        # title="This is a title"
echo "$title"
```

This will output:

```
This is a title
```