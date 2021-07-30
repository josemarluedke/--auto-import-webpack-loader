import Route from '@ember/routing/route';
import query from 'gql/query.graphql';

export default class IndexRoute extends Route {
  model() {
    console.log(query);

    return query;
  }
}
