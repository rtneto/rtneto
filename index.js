import express from 'express';
import htmlExpress from 'html-express-js';
import path from 'path';
import { router } from './server/router.js';

const app  = express();
const PORT = process.env.PORT || 3000;

const __dirname = path.resolve();

// setting up render engine
app.set('views', __dirname + '/public');
app.engine(
  'js',
  htmlExpress({
    includesDir: 'includes',
  })
);
app.set('view engine', 'js');

// setting up router
app.use(router);

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
