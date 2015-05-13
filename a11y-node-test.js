var url = 'bluehost.com';

var a11y = require('a11y');

a11y('twitter.com', function (err, reports) {
    var audit  = reports.audit;  // a11y Formatted report
    var report = reports.report; // DevTools Accessibility Audit formatted report

    console.log(audit);
});
