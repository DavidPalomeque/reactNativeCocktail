import { GET_COCKTAILS } from '../constants/index';

export function setCocktails(cocktails) {
  return {
    type: GET_COCKTAILS ,
    payload: cocktails ,
  };
}

export function fetchCocktails() {
  return async (dispatch) => {
    try {
      const apiReq = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka` /*${name} */ , {
        method: 'GET'
      });
      console.log(apiReq);
      await dispatch(setCocktails(apiReq));
      return apiReq || [];
    } catch (error) {
      console.log(error);
    }
  };
}