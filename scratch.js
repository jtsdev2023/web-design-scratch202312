//

const
    YAML    = require('yaml'),
    F       = require('fs');

let
    inputFile = 'layout.yaml',
    yamlObj = YAML.parse(F.readFileSync(inputFile, {encoding: 'utf-8'}));
