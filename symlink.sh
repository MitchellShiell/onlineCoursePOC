#!/bin/bash

# 1. Have the folders you want linked from the top level directory ready 

# Run this from the directory you want the link to be made in 
# The first path tells where the desired linked folder is, the second is the name of the new symlinked folder

# This is run from the website directory
ln -s ../CBW-Submodule/Course-Content/ course

# This is run from the static directory
ln -s ../../CBW-Submodule/H5P-Content H5P-Content
