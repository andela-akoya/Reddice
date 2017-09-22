/**
 * Created by koyexes on 22/09/2017.
 */

import knex from 'knex';
import bookshelf from 'bookshelf';
import knexConfig from '../knexfile';

export default bookshelf(knex(knexConfig.development));