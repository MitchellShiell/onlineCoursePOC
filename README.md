# onlineCoursePOC

Proof of concept for an open access course using Docusaurus &amp; H5P


## To Do

- [ ] Add explainations/documentation
    - [ ] General Overview
    - [x] Docusaurus
    - [ ] H5P
    - [ ] Deployment
- [x] H5P offline/export
- [x] SCORM offline export and re-import (Not possible or neccessary see below)

## Viable

### H5P embed

- Works, easy to embed, requires paid subscription to host interactive elements

### H5P HTML file with Seperate Media 

- Works, was not the easiest but we can use Lumi export the html with seperate media and universally call and render any component in mdx

## Not Viable

### H5P File (zip)
- Proprietary and hard to embed, also the exports is made to have backend functionality we don't care about 

## H5P HTML Single file
- Will not work outside the loval development environment

### SCORM
- Scorm requires a backend to store user data, this is out of scope as we do not plan to support a backend