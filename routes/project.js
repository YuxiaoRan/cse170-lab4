exports.viewProject = function(req, res) {
  var name = req.params.name;
  console.log("The project name is: " + name);
  var projName = {
    "projectName": name
  };
  res.render("project", projName);
}
