# onlineCoursePOC

Proof of concept for an open access course using Docusaurus &amp; H5P

## Getting Started 

### Running it Locally

To clone the repository with the files in the submodules:

```bash
git clone https://github.com/MitchellShiell/onlineCoursePOC.git
```

Install required dependencies:

```
npm ci
```

Start the server

```
npm start
```

> **Note:** Docusaurus requires node version 18 or higher

## To Do

- [x] Add explainations/documentation
    - [x] Docusaurus
    - [x] H5P
    - [x] Deployment
- [x] H5P offline/export
- [x] SCORM offline export and re-import (Not possible or neccessary see below)
- [ ] Workaround for interactive video and course presentation components

## Notes

### Interactive video and course presentation features

- Lumi does not currently support interactive videos and course presentation components
    - [They are working on implementing this but no definititive timeline is give](https://help.lumi.education/en/articles/9506738-interactive-videos-and-course-presentations-not-found)

- Will need to figure out a workaround

### Viable Options

#### H5P embed
- Works, easy to embed, requires paid subscription to host interactive elements

#### H5P HTML file with Seperate Media 
- Works, was not the easiest but we can use Lumi export the html with seperate media and universally call and render any component in mdx

### Not Viable Options

#### H5P File (zip)
- Proprietary and hard to embed, also the exports is made to have backend functionality we don't care about 

#### H5P HTML Single file
- Will not work outside the loval development environment

#### SCORM
- Scorm requires a backend to store user data, this is out of scope as we do not plan to support a backend