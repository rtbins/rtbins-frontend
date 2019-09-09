import * as React from 'react';
import * as DOM from 'react-dom';

const root = document.getElementById('root');

class Main extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return (
            <div>
                <div>FundFlow</div>
            </div>

        );
    }
}

DOM.render(<Main />, root);