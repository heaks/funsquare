import React, { PropRypes } from 'react';
import GoogleMapInstance from './GoogleMap';
import QueriesList from './QueriesList';
import SearchForm from './SearchForm';
import Results from './Results';
import Comments from './Comments';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

class App extends React.Component {
  render() {
    console.log('APP props: ', this.props);
    const allComments = this.props.comments;
    console.log('allComments: ', allComments);
    return (
      <Container fluid={true}>
        <Row>
          <Col md="8">
            <div>
              {this.props.children}
              <SearchForm/>
              <QueriesList/>
              <GoogleMapInstance/>
              <Results/>
            </div>
          </Col>
          <Col md="4">
            <div className="comment-section">
              <Comments comments={allComments} {...this.props}/>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;