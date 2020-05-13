import React, { Component } from 'react';

class Course extends Component {
    state = {
        courseTitle: ''
    }

    componentDidMount() {
        this.parseQueryParams();
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

    parseQueryParams() {
        const query = new URLSearchParams(this.props.location.search);
        const title = query.get('title')
        if (this.state.courseTitle !== title) {
            this.setState({ courseTitle: title});
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.courseTitle}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;