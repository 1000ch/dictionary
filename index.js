'use babel';

import fs from 'fs';
import {Range} from 'atom';
import polylint from 'polylint';

let directory = null;

export const activate = () => {

  // install deps
  require("atom-package-deps").install("linter-polylint");

  let directories = atom.project.getDirectories();

  if (!directories.length) {
    return;
  }

  directory = directories.shift();
};

export const provideLinter = () => {

  return {
    grammarScopes: ['text.html.basic'],
    scope: 'file',
    lintOnFly: true,
    lint: (editor) => {

      if (!directory) {
        return;
      }

      let path = editor.getPath();
      let text = editor.getText();

      polylint(text, {
        root: directory
      }).then(warnings => {
        console.log(warnings);
      }).catch(error => console.error(error));
    }
  };
};
