
[get binaries for startup]
- npm install

[run the app]
- npm start
- OR run the script ./Script/01_start.sh

[separate the compiled source to another directory]
- src/ts-config.json => add entry -> "outDir": {THE_OUTPUT_FOLDER}
- also you would need add the directory(s) containing both compiled and static resources (e.g. images, css) 
  bs-config.json => update entry -> "base_dir": ["src", {THE_OUTPUT_FOLDER}]`
- ref: http://stackoverflow.com/questions/34684527/separate-angular2-typescript-files-and-javascript-files-into-different-folders
