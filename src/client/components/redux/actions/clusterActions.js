import { CLUSTER_FETCH_DATA_SUCCESS } from './actionTypes';

// Action creators
export function clusterFetchDataSuccess(listOfNodes) {
  return {
    type: CLUSTER_FETCH_DATA_SUCCESS,
    listOfNodes
  }
}

export const clusterFetchData = function(url) {
  return (dispatch) => {
    fetch(url)
    .then( response => {
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response;
    })
    .then(response => response.json())
    .then(listOfNodes => {
      dispatch(clusterFetchDataSuccess(listOfNodes));
    }) 
  }
}