import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'

const Fullpage = () => (
  <ReactFullpage
    scrollingSpeed={1000} /* Options here */
    render={({ state }) => {
      return (
        <ReactFullpage
          navigation
          render={() => (
            <ReactFullpage.Wrapper>
              <div className="section">
                <p>Section 1</p>
              </div>
              <div className="section">
                <p>Section 2</p>
              </div>
              <div className="section">
                <p>Section 3</p>
              </div>
              <div className="section">
                <p>Section 4</p>
              </div>
            </ReactFullpage.Wrapper>
          )}
        />
      )
    }}
  />
)

export default Fullpage
