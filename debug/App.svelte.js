/* src\App.svelte generated by Svelte v3.29.7 */
import {
  SvelteComponent,
  detach,
  element,
  init,
  insert,
  noop,
  safe_not_equal
} from "svelte/internal";

function create_fragment(ctx) {
  let main;

  return {
    c() {
      main = element("main");
      main.innerHTML = `<h1>Todos</h1>`;
    },
    m(target, anchor) {
      insert(target, main, anchor);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching) detach(main);
    }
  };
}

function instance($$self) {                                                  //
  "use strict";                                                              //
  Object.defineProperty(exports, "__esModule", { value: true });             //
  const core_1 = require("@apollo/client/core");                             // <- core_1
  const svelte_apollo_1 = require("svelte-apollo");                          // <- svelte_apollo_1
                                                                             //
  const client = new core_2.ApolloClient({                                   // <- core_2
      uri: "https://graphql.fauna.com/graphql",                              //
      cache: new core_2.InMemoryCache(),                                     //
      headers: {                                                             //
        authorization: "Basic <__AUTHORIZATION_KEY__>="                      //
      }                                                                      //
    });                                                                      //
                                                                             //
  svelte_apollo_2.setClient(client); //# sourceMappingURL=App.svelte.js.map  // <- svelte_apollo_2
  return [];                                                                 //
}                                                                            //

class App extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}


if (module.hot) {
  const { configure, register, reload } = require('D:/Projects/Active/Web--Packages/common/temp/node_modules/.pnpm/svelte-loader@2.13.6_svelte@3.29.7/node_modules/svelte-loader/lib/hot-api.js');

  module.hot.accept();

  if (!module.hot.data) {
    // initial load
    configure({});
    App = register("src\\App.svelte", App);
  } else {
    // hot update
    App = reload("src\\App.svelte", App);
  }
}

export default App;
