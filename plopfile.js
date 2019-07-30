const prettier = require("prettier");

module.exports = plop => {
  const prettierConfig = prettier.resolveConfig.sync(__dirname);
  plop.load("plop-prettier", prettierConfig);

  plop.setGenerator("React Component", {
    description: "Create a new React component",
    prompts: [
      {
        type: "prompt",
        name: "componentName",
        message: "Name of your component:"
      },
      {
        type: "confirm",
        name: "createWithPage",
        message: "Do you want the create the component with page?",
        default: true
      }
    ],
    actions: answers => {
      const actions = [
        {
          type: "pretty-add",
          path: "./src/{{properCase componentName}}.js",
          templateFile: "./config/plop/component/component.js.plop"
        },
        {
          type: "pretty-add",
          path: "./src/scss/{{properCase componentName}}.scss",
          templateFile: "./config/plop/component/component.scss.plop"
        }
      ];

      if (answers.createWithPage) {
        actions.push(
          {
            type: "pretty-add",
            path: "./docs/lib/Components/{{properCase componentName}}Page.js",
            templateFile: "./config/plop/component/index.page.js.plop"
          },
          {
            type: "pretty-add",
            path: "./docs/lib/examples/{{properCase componentName}}.js",
            templateFile: "./config/plop/component/index.example.js.plop"
          },
          {
            type: "modify",
            path: "./src/index.js",
            pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
            templateFile: "./config/plop/component/index.modify.hbs"
          },
          {
            type: "modify",
            path: "./src/scss/index.scss",
            pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
            templateFile: "./config/plop/component/index.scss.modify.hbs"
          },
          {
            type: "modify",
            path: "./docs/lib/Components/index.js",
            pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
            templateFile: "./config/plop/component/index.docs.modify.hbs"
          },
          {
            type: "modify",
            path: "./webpack.docs.config.js",
            pattern: /(\/\/ -- APPEND ITEMS HERE --)/gi,
            templateFile: "./config/plop/component/webpack.modify.hbs"
          }
        );
      } else {

      }

      return actions;
    }
  });

};
