import { getCategoriesAndDocument } from "../../routes/utils/firebase/firebase-util";
import { takeLatest, all, call, put } from "redux-saga/effects";

import {fetchCategoriesSuccess,fetchCategoriesFailed} from './category-action';
import { CATEGORIES_ACTION_TYPES } from "./category.type";

export function* fetchCategoriesAsync(){
    try{

const categoriesArray=yield call(getCategoriesAndDocument,'categories');
// the call fuction passing a function and a parameter 
  yield put(fetchCategoriesSuccess(categoriesArray));
  }catch(error){
 yield put(fetchCategoriesFailed(error));
//  use the yield insted of dispatch
}

}

export function* onFatchCategories(){
    yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,fetchCategoriesAsync)
}

export function* categoriesSaga(){
    yield all([call(onFatchCategories)]);
}
