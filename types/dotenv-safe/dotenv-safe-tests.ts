import env = require("dotenv-safe");

env.config({
    allowEmptyValues: true,
    path: "/foo/bar/baz.env",
    sample: "/foo/bar/qux.env",
});

env.config({
    example: "./.my-env-example-filename",
});
