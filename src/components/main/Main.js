import React from 'react'
import SectionWrapper from './SectionWrapper'
import AuthorApi from '../../api/mockAuthorApi';
/*
justify-content-center: to align an element
*/
const Main = () => {
  console.log(AuthorApi.getAllFields());
  return(
    <SectionWrapper>
        <div className="section-content-title row justify-content-center">
          <div className="col-lg-12 col-sm-12 col-md-12">
            <section className="py-2">
              <h3 className="section-main-title">Resume</h3>
            </section>
          </div>
        </div>

        <div className="section-content row justify-content-center">
          <div className="col-lg-12 col-sm-10 col-md-12">
            <section className="py-2">
              <h3 className="section-title">About</h3>
              <p className="section-text">Lorem ipsum dolor qsit amet consectetur adipisicing elit. Rem sed vel, quae iste aut expedita, fuga a qui omnis reiciendis assumenda enim tempora iure odio?</p>
            </section>
          </div>
        </div>

        <div className="section-content row justify-content-center">
          <div className="col-lg-12 col-sm-10 col-md-12">
            <section className="py-2">
              <h3 className="section-title">Education</h3>
              <p className="section-text">
              </p>
              
              <div className="scrolling-wrapper">
                
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Kendriya Vidyalaya No. 1</h5>
                    <h6 className="card-subtitle mb-2 text-muted">High School</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link float-right">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Indian Institute of Technology</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <span className="mx2">B.Tech</span>
                      <span className="mx2">6/11/2009</span>
                    </h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>

        <div className="section-content row justify-content-center">
          <div className="col-lg-12 col-sm-10 col-md-12">
            <section className="py-2">
              <h3 className="section-title">Projects</h3>
              <p className="section-text">
              </p>
            </section>

            <div className="scrolling-wrapper">
                
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Kendriya Vidyalaya No. 1</h5>
                    <h6 className="card-subtitle mb-2 text-muted">High School</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link float-right">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Indian Institute of Technology</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <span className="mx2">B.Tech</span>
                      <span className="mx2">6/11/2009</span>
                    </h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div>
              </div>

          </div>
        </div>

        <div className="section-content row justify-content-center">
          <div className="col-lg-12 col-sm-10 col-md-12">
            <section className="py-2">
              <h3 className="section-title">Work Experience</h3>
              <p className="section-text">
              </p>
              <div className="scrolling-wrapper">
                
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Kendriya Vidyalaya No. 1</h5>
                    <h6 className="card-subtitle mb-2 text-muted">High School</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link float-right">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Indian Institute of Technology</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      <span className="mx2">B.Tech</span>
                      <span className="mx2">6/11/2009</span>
                    </h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div><div className="card">
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                  </div>
                </div>
              </div>

            </section>
          </div>
        </div>
    </SectionWrapper>
  );
}

export default Main;