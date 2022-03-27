const script = document.scripts[2].innerText;
const startString = "var url_redirect = '";
const endString = ";\n";

const url = script.substring(
   script.indexOf(startString) + startString.length,
   script.indexOf(endString) - endString.length
);

document.location.href = url;
