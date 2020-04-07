import Search from './models/Search';

/** Global state of the app
 * - Seach object
 * - Current recipe object
 * - Shopiing list object
 * - Linked recipes
 */
const state = {}

const controlSearch = async () => {
    // 1) Get query from view
    const query = 'pizza' //TODO

    if(query){
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results

        // 4) Search for recipes
        await state.search.getResult();

        // 5) Render results on UI
        console.log(state.search.result);
    }
};

document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});