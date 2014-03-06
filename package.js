Package.describe({
    summary: "angular-ui's ui-utils library packaged for meteor"
});

Package.on_use(function (api, where) {
    api.use("ngMeteor", "client");

    // ui-utils files.
    api.add_files("lib/ui-utils-v0.1.1.js", "client");

    // Client files.
    api.add_files("init.js", "client");
});
