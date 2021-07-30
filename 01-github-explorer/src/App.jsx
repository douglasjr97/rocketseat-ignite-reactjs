import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList';
import { Fragment } from 'react';
import './styles/global.scss';

export function App(){
    return(
        <Fragment>
        <RepositoryList/>
        <Counter/>
        
        </Fragment>

        )

}