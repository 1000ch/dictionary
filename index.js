'use babel';

import fs        from 'fs';
import { Range } from 'atom';
import polylint  from 'polylint';

export const activate = () => {
  require("atom-package-deps").install("linter-polylint");
};

export const provideLinter = () => {

  return {
    grammarScopes: ['source.html'],
    scope: 'file',
    lintOnFly: true,
    lint: (editor) => {

      let path = editor.getPath();
      let text = editor.getText();

      return {
        type: message.type,
        text: message.text,
        filePath: path,
        range: range
      };

    }
  };
};
