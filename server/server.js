const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const serveStatic = require('serve-static');

const userRoute = require('./routes/user.route');
const bidDueDateRoute = require('./routes/bidDueDate.route');
const aroDateRoute = require('./routes/aroDate.route');
let cacheProvider = require('./cache-provider');

cacheProvider.start((err) => {
  if (err)
    console.error(err);
});

const app = express();



app.use(session({
  name: 'js-force',
  secret: 'S3CRE7',
  resave: true,
  saveUninitialized: true
}));

const corsOptions = {
  origin: true,
  credentials: true

};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/signin', userRoute);
app.use( '/bidDue', bidDueDateRoute);
app.use( '/aro', aroDateRoute);

app.use(serveStatic(__dirname + '/dist'));

const PORT = 4000;
const port = process.env.PORT || PORT;
app.listen(port, () => {
  console.log('Express server running on port ' + port);
});
