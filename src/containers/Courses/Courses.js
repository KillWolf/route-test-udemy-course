import React, { Component } from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide'},
            { id: 2, title: 'Vue - The Complete Guide'},
            { id: 3, title: 'PWA - The Complete Guide'}
        ]
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <article className="Course" key={course.id}>
                                <NavLink exact to={{pathname: this.props.match.url + '/' + course.id,
                                search: '?title=' + course.title}}>{course.title}</NavLink></article>;
                        })
                    }
                </section>
                <Switch>
                    <Route path="/courses/:id" component={Course} />
                </Switch>
            </div>
        );
    }
}

export default Courses;