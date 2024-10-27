# Docusaurus

We use Docusaurus to render the site, providing a sleek, easy to navigate and highly customizable interface for our course content. Course content consists of the following:

- **Markdown Files**: All course content is stored as markdown files in the `CBW-Submodule/course-Content` directory which is symbolically linked to the `/website/course` directory (see repository structure). 
   
    :::info What are Symbolic Links?
    A symbolic link (symlink) is like a shortcut - it's a special file that points to another file or directory. Instead of copying files, symlinks redirect to the original location, saving space and ensuring changes to the original update everywhere.
    :::

- **H5P Files**: H5P components are exported from Lumi Desktop as one HTML file and several media files. 

    - These files are stored in the `CBW-Submodule/H5P-Content` directory which is symbolically linked to the   `/website/static/H5P-Content` directory (see repository structure). 

    - You can render these files in any given `.mdx` file by using the `<H5P />` component.

    :::info How to embed H5P content
    For more information on embedding H5P content see the [**H5P Integration Overview page**](/course/overview/H5P)
    :::

## Repository Structure

```bash title="Repository: github.com/MitchellShiell/onlineCoursePOC"
.
├── /CBW-Submodule/              # Content Submodule
│   ├── /Course-Content/         # Markdown/MDX files
│   │   └── 00-overview/         # Module folders
│   │       ├── 00-overview.mdx  # Course content files
│   │       ├── 01-Docusaurus.md
│   │       ├── 02-H5P.mdx
│   │       └── 03-Deployment.md
│   └── /H5P-Content/           # Interactive content
│       └── /multiplechoice/    # H5P component folders
│           └── index.html      # H5P component files
└── /website/                   # Docusaurus site
    ├── /course/               # Symlinked course content
    │   └── 00-overview/       # (Mirrors Course-Content folder)
    │       ├── 00-overview.mdx
    │       ├── 01-Docusaurus.md
    │       ├── 02-H5P.mdx
    │       └── 03-Deployment.md
    └── /static/               # Static assets
        └── /H5P-Content/     # Symlinked H5P content
            └── /multiplechoice/ # (Mirrors other H5P-Content folder)
                └── /index.html
```

#### Key Directory Explanations

#### `/CBW-Submodule/`
* Main content submodule
* Contains all course materials and H5P content
* Seperation allows it to be more easily shared across multiple course implementations

#### `/Course-Content/`
* Organized by modules (e.g., `00-overview`)
* Contains markdown and MDX files
* Follows a consistent naming convention

:::info Naming Convention
- Files: Use kebab-case (e.g., `my-file-name.mdx`)
- Files and directorys: Use kebab-case (e.g., `introduction.mdx`, `01-introduction/`)
- Numeric prefixes control the order in navigation (e.g., `01-Docusaurus.md` appears before `02-H5P.mdx`)
- File extensions: Use `.md` for plain markdown, `.mdx` when using React components

The top level title, for this page `# Docusaurus` will be the title represented in the left-hand navigation.
:::

#### `/H5P-Content/`
* Organized by interactive component type
* Each component has its own uniquely named directory
* Contains HTML and, if required, any associated media files

#### `/website/`
* Contains symlinked content folders
* Contains all the wonderful and customizable code that makes the website
* If requsted I can explain or write a brief repo structure doc on navigating codebase 

:::info Symlink Relationships
The repository uses two main symbolic links:
1. `CBW-Submodule/Course-Content` ↔️ `website/course`
2. `CBW-Submodule/H5P-Content` ↔️ `website/static/H5P-Content`

This structure allows content updates to be immediately reflected in the website while maintaining clean separation of concerns.
:::

## Optional Git Submodules

Git submodules allow you to store your course content in a separate repository while maintaining a link to this main repository.

### Benefits
- Content can be stored within a seperate repository and shared across multiple course websites
- Changes to content only need to be made in one place
- Different versions of content can be used by different implementations

### Quick Overview of Git Submodules


#### 1. Add content repository as a submodule

```bash
git submodule add <repository-url> CBW-Submodule
```

#### 2. Get latest content from submodule

```bash
git submodule update --remote
```

#### 3. Create symbolic links
- **Note:** Symbolic links let you selectively include content
- **Example:** You can have multiple courses in your content repository but only link the specific course you want to display

```bash
ln -s CBW-Submodule/Course-Content website/course
ln -s CBW-Submodule/H5P-Content website/static/H5P-Content
```
