# Copilot Instructions for thefreys.github.io

## Project Overview
This repository generates and hosts a static site. The site content is organized into "nodes," each represented by a directory under the `content/` folder. Nodes contain specific files that define their content, styling, and behavior. The site is built using Bash scripts, which automate the generation of static files like `index.html` and `sitemap.xml`.

## Key Components

### Content Nodes
- **Location**: `content/`
- **Purpose**: Each directory represents a node, which corresponds to a page or section of the site.
- **Key Files**:
  - `markdown.md`: Primary content file (Markdown/HTML).
  - `javascript.js`: Node-specific JavaScript.
  - `css.css`: Node-specific CSS.
  - `ancestor.js`: JavaScript inherited by descendant nodes.
  - `ancestor.css`: CSS inherited by descendant nodes.
  - `_title.txt`: Custom title and navigation label.
  - `_tags.txt`: Tags for search and navigation.
  - `.hide`: Suppresses the node and its descendants from navigation and sitemap.

### Bash Scripts
- **Location**: `bash/site/`
- **Purpose**: Automates the generation of static site files.
- **Key Scripts**:
  - `generate-page-tmp.sh`: Reads node files and generates `index.html`, `nodeObject.js`, and other assets. Handles AI components, search rows, and sitemap entries. Processes templates and replaces placeholders with node-specific data.
  - `generate.sh`: High-level script to build the entire site.
  - `generate-xmlsitemap.sh`: Creates the `sitemap.xml` for the site.
  - `generate-template-assets.sh`: Processes and prepares shared template assets.

## Developer Workflows

### Building the Site
1. Navigate to the `bash/site/` directory.
2. Run the `generate-page-tmp.sh` script:
   ```bash
   ./generate-page-tmp.sh /path/to/node
   ```
   Replace `/path/to/node` with the desired node path.
3. To build the entire site, use:
   ```bash
   ./generate.sh
   ```

### Adding Content
1. Create a new directory under `content/`.
2. Add the required files (e.g., `markdown.md`, `css.css`).
3. Run the build script to generate the static files.

### Debugging
- Check the `tmp_pages_dir` for generated files to verify output.
- Use `git log` to inspect the last modification date for content files.
- Review the `nodeObject.js` and `index.html` in the `pages/` directory for correctness.

## Project-Specific Conventions
- **File Naming**: Use lowercase and hyphens for directory and file names.
- **Title Formatting**: Titles are auto-capitalized unless `_title.txt` is provided.
- **AI Components**: AI-related files (e.g., `_ai_query.txt`) are processed to generate dynamic content.
- **Content Inheritance**: Files like `ancestor.js` and `ancestor.css` allow parent nodes to pass down styles and scripts to their descendants.

## External Dependencies
- **Git**: Used to fetch the last modification date for content files.
- **Bash**: Scripts rely on Bash for file operations and templating.

## Examples
- **Node Directory**: `content/example-node/`
  - Contains `markdown.md`, `css.css`, and `_title.txt`.
  - Generates `example-node/index.html` with the specified content and styling.

- **Generated Files**:
  - `index.html`: Main HTML file for the node.
  - `nodeObject.js`: JavaScript object representing the node's metadata.

## Key Files and Directories
- `content/`: Stores all content nodes.
- `bash/site/`: Contains Bash scripts for site generation.
- `templates/`: HTML templates used for generating pages.
- `assets/generated/`: Stores dynamically generated assets like `contentNodes.js` and `search.csv`.
- `pages/`: Contains the final generated static site files.

---

For more details, refer to the `README.md` files in the repository.