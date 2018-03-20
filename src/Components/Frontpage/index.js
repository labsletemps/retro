import React from 'react';
import './styles.css';
import Section from '../Section';

const API_ENDPOINT = 'https://www.letemps.ch/porcelain';

class Frontpage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            sections: []
        }
    }

    componentDidMount() {
        fetch(API_ENDPOINT)
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    isLoaded: true,
                    sections: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        const { error, isLoaded, sections } = this.state;

        if (error) {
            return <div>Une erreur s'est produite lors du chagement des données</div>;
        }else if(!isLoaded) {
            return <div>Loading...</div>;
        }else{
            const items = sections.map((section, index) => (
                <Section key={index} index={index} articles={section.articles} section={section}>
                    <h2>{section.section}</h2>
                </Section>
            ));
            return(
                <div>{items}</div>
            );
        }
    }
};

export default Frontpage;