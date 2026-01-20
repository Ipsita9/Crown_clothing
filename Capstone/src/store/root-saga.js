import {all,fork} from "redux-saga/effects";
import { categoriesSaga } from "./categories/categories.saga";
import { userSagas } from "./user/user.saga";
export function* rootSaga(){
    yield all([fork(categoriesSaga),fork(userSagas),]);

    
}