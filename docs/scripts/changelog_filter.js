var filterControls = document.querySelectorAll('.filter_btn input');
filterControls.forEach(function (el) {
  el.addEventListener('click', function (event) {
    filterByPackage();
    filterByVersion();
  });
});

function filterByPackage() {
  var filterParams = [];
  var targetElements = document.querySelectorAll('.changelog_item');
  var pkgFilterControls = document.querySelectorAll('.filter_btn.pkg input');
  pkgFilterControls.forEach(function (el) {
    if (el.checked) filterParams.push(el.getAttribute('value'));
  });
  if (filterParams.length > 0) {
    targetElements.forEach(function (el) {
      if (filterParams.includes(el.getAttribute('data-pkg'))) {
        el.classList.remove('pkg_hide');
      } else {
        el.classList.add('pkg_hide');
      }
    });
  } else {
    targetElements.forEach(function (el) {
      el.classList.remove('pkg_hide');
    });
  }
}

function filterByVersion() {
  var filterParams = [];
  var verRegex = new Map();
  verRegex.set('major', '(\\d+\\.0\\.0|\\$+)');
  verRegex.set('minor', '(\\d+\\.[1-9]+\\.0|\\$+)');
  verRegex.set('patch', '(\\d+\\.\\d+\\.[1-9]+|\\$+)');
  var targetElements = document.querySelectorAll('.changelog_item');
  var verFilterControls = document.querySelectorAll('.filter_btn.ver input');
  verFilterControls.forEach(function (el) {
    if (el.checked) filterParams.push(el.getAttribute('value'));
  });
  if (filterParams.length > 0) {
    var regexString = '^' + verRegex.get(filterParams[0]);
    for (var i = 1; i <= filterParams.length - 1; i++) {
      regexString = regexString + '|' + verRegex.get(filterParams[i]);
    }
    var regex = new RegExp(regexString);
    targetElements.forEach(function (el) {
      if (regex.test(el.getAttribute('data-ver'))) {
        el.classList.remove('ver_hide');
      } else {
        el.classList.add('ver_hide');
      }
    });
  } else {
    targetElements.forEach(function (el) {
      el.classList.remove('ver_hide');
    });
  }
}