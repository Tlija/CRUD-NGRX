import { createReducer } from "@ngrx/store"
import { initialSatate } from "./authState"



const _authReducer =createReducer(initialSatate)



export function AuthReducer(state:any,action:any){
  return _authReducer(state,action)
}
