Notes:

React start watch jsx
npx babel --watch _site/_src/js/jsx --out-dir . --presets react-app/prod


ADD to HEAD Template
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
<link rel="stylesheet" href="https://fontsawesome5.com">

<link rel="stylesheet" href="https://code.getmdl.io/1.3.0/material.blue-light_blue.min.css" />
<link rel="stylesheet" href="./css/simple.css">

<script defer src="https://code.getmdl.io/1.3.0/material.min.js"></script>
<script defer src="./js/gaboogled.js"></script>

Material Color Customizer
https://getmdl.io/customize/index.html

add custom styles
fINAL: bootrap 4 (gaboogled.css) and gaboogled.js

Download Starter Material Template



Build Process

1. Start Gulp Listener for Changes then tells jekyll to run
2. Save changes in Gulp aware folders.
2. jekyll runs normal jekyll work flow via tools/_config.yml
3. run yarn update to execute final build, repository, and publish scripts via tools/package.json
