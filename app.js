let units = require('./config');
let convert = require('convert-units');
let express = require('express');
let app = express();

app.get('/units', function (req, res) {
    res.send(units.data);
});

app.get('/', function (req, res) {
    let value = req.query.value ? Number(req.query.value) : 0;
    let source = req.query.source ? req.query.source : 0;
    let target = req.query.target ? req.query.target : 0;

    if (value && source && target) {
        let from = units.searchKey(source);
        let to = units.searchKey(target);

        if (!from || !to) {
            res.send('[err] bad units!');
        } else {
            let result = convert(value).from(from).to(to);
            res.json({
                'source': source,
                'target': target,
                'value': value,
                'result': result,
            });
        }
    } else {
        res.send('[err] bad request!');
    }
});

app.listen(3000, function () {
    console.log('Server run...');
});