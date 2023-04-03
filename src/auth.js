import React, { useEffect } from 'react'
import { userSelector, fetchUserBytoken, clearState } from './features/User/UserSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import Login from './features/User/Login';


export function Auth() {
  const dispatch = useDispatch();
  const { isFetching, isError } = useSelector(userSelector);
  const history = useHistory();

    useEffect(() => {
        dispatch(fetchUserBytoken({ token: localStorage.getItem('token') }));
      }, []);
    //   useEffect(() => {
    //     if (isError) {
    //       dispatch(clearState());
    //       history.push('/login');
    //     }
    //   }, [isError]);
  return (
   <>
   {isError && null}
   </>
  )
}
