import React from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';
import ErrorPup from '../../assets/errorPup.png'

class ErrorBoundary extends React.Component{
    constructor(){
        super();

        this.state = {
            hasErrored: false
        }
    };
    
    static getDerivedStateFromError(error){
        return {hasErrored: true};
    };

    componentDidCatch(error, info){
        console.log(error);
    };

    render(){
        if(this.state.hasErrored){
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={ErrorPup}/>
                    <ErrorImageText>Sorry... Our dog ate this page:( <br/> Please Reload the page.</ErrorImageText>
                </ErrorImageOverlay>
            );
        }

        return this.props.children;
    };
};

export default ErrorBoundary;