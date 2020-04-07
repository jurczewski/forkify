import Search from './models/Search';
import * as searchView from './view/searchView'
import { elements } from '../js/view/base'

/** Global state of the app
 * - Seach object
 * - Current recipe object
 * - Shopiing list object
 * - Linked recipes
 */
const state = {}

const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if(query){
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();

        // 4) Search for recipes
        await state.search.getResult();

        // 5) Render results on UI
        searchView.renderResult(state.search.result);
    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});